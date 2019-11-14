import InputChangeHandler from './InputChangeHandler';

// eslint-disable-next-line no-undef
describe('InputChangeHandler', () => {
  // eslint-disable-next-line no-undef
  test('seAttHandler', () => {
    const tempSessions = [
      {
        sid: 1,
        attendance: 'A'
      }
    ];
    // eslint-disable-next-line no-undef
    expect(
      InputChangeHandler.seAttHandler({ sid: 1 }, 'AB', tempSessions)
    ).toStrictEqual([
      {
        sid: 1,
        attendance: 'AB'
      }
    ]);
  });
  // eslint-disable-next-line no-undef
  test('seReHandler', () => {
    const tempSessions = [
      {
        sid: 1,
        remark: 'A'
      }
    ];
    // eslint-disable-next-line no-undef
    expect(
      InputChangeHandler.seReHandler({ sid: 1 }, 'AB', tempSessions)
    ).toStrictEqual([
      {
        sid: 1,
        remark: 'AB'
      }
    ]);
  });
  // eslint-disable-next-line no-undef
  test('stAttHandler', () => {
    const tempStudents = [
      {
        mid: 1,
        attendance: 'A'
      }
    ];
    // eslint-disable-next-line no-undef
    expect(
      InputChangeHandler.stAttHandler({ mid: 1 }, 'AB', tempStudents)
    ).toStrictEqual([
      {
        mid: 1,
        attendance: 'AB'
      }
    ]);
  });
  // eslint-disable-next-line no-undef
  test('stReHandler', () => {
    const tempStudents = [
      {
        mid: 1,
        remark: 'A'
      }
    ];
    // eslint-disable-next-line no-undef
    expect(
      InputChangeHandler.stReHandler({ mid: 1 }, 'AB', tempStudents)
    ).toStrictEqual([
      {
        mid: 1,
        remark: 'AB'
      }
    ]);
  });
});
