const fs = require('fs');
const path = require('path');

const PATH_COMPONENTS = './src/components';

const test = folderName => `import React from 'react';
import { mount } from 'enzyme';
import ${folderName} from './${folderName}';

// eslint-disable-next-line no-undef
describe('${folderName} component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<${folderName} />);
  });
});
`;

// Add test file if
// [NAME_FOLDER].js exists
// index.js exists
// [NAME_FOLDER].test.js doesn't exist

function getFolderName(pathFolder) {
  return pathFolder.split('/').slice(-1)[0];
}

function addTestFile(pathFolder) {
  const folderName = getFolderName(pathFolder);
  const testString = test(folderName);
  const pathTestFile = path.join(pathFolder, `${folderName}.test.js`);
  fs.writeFileSync(pathTestFile, testString);
  // fs.unlinkSync(pathTestFile);
}

function shouldAddTestFile(pathFolder) {
  const folderName = getFolderName(pathFolder);
  return (
    fs.existsSync(path.join(pathFolder, 'index.js')) &&
    fs.existsSync(path.join(pathFolder, `${folderName}.js`)) &&
    !fs.existsSync(path.join(pathFolder, `${folderName}.test.js`))
  );
}

function addIfShouldAddTestFile(pathFolder) {
  if (shouldAddTestFile(pathFolder)) {
    addTestFile(pathFolder);
  }
}

function execute(pathFolder) {
  const subFolders = fs
    .readdirSync(pathFolder)
    .map(filename => path.join(pathFolder, filename))
    .filter(p => fs.lstatSync(p).isDirectory());
  subFolders.forEach(addIfShouldAddTestFile);
  subFolders.forEach(execute);
}

execute(PATH_COMPONENTS);
