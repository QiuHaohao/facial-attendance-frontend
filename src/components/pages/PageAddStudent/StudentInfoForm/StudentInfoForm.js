import React, { useState } from 'react';
import { Form, Button, Select, Input, Upload, message } from 'antd';
import PropTypes from 'prop-types';
import * as userHook from '../../../../hooks/userHook';
import api from '../../../../api/api';

import './StudentInfoForm.css';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function StudentInfoForm(props) {
  const { getFieldDecorator } = props.form;
  const { Option } = Select;
  const user = userHook.useUser();
  const [imageUrl, setImageUrl] = useState(undefined);

  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const showErrorMsg = res => {
      message.destroy();
      message.error(res.response.data[Object.keys(res.response.data)[0]]);
    };
    props.form.validateFields((err, values) => {
      if (!err) {
        if (imageUrl !== undefined) {
          const finalValue = {
            ...values,
            image: imageUrl
          };
          message.loading('Adding Student...', 99999);
          api.addNewStudent(finalValue).then(() => {
            message.destroy();
            message.success('Student added!');
                props.form.resetFields();
                setImageUrl(undefined);
          }, showErrorMsg);

        } else {
          message.destroy();
          message.warning('Please select a photo!');
        }
      }
    });
  };

  return (
    <div className="student-info-form-container">
      <Form onSubmit={handleSubmit} className="student-info-form">
        <Form.Item label="Matric No">
          {getFieldDecorator('mid', {
            rules: [
              {
                required: true,
                message: 'Please input a matriculation number'
              }
            ]
          })(<Input placeholder="Matric No" />)}
        </Form.Item>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input a name'
              }
            ]
          })(<Input placeholder="Name" />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input an email' },
              {
                pattern: /[a-zA-Z0-9]+@[a-zA-Z0-9.]/,
                message: 'Input has to be a email'
              }
            ]
          })(<Input placeholder="Email" />)}
        </Form.Item>
        <Form.Item label="Lab">
          {getFieldDecorator('labs', {
            rules: [{ required: true, message: 'Please select a lab' }]
          })(
            <Select mode="multiple" placeholder="Please select a lab group">
              {user.labs.map(lab => (
                <Option key={lab.lid} value={lab.lid}>
                  {userHook.getDisplayNameFromLab(lab)}             
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Photo">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={info =>
              getBase64(info.file.originFileObj, imgUrl => {
                setImageUrl(imgUrl);
              })
            }
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

StudentInfoForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
    resetFields: PropTypes.func.isRequired
  })
};

const WrappedStudentInfoForm = Form.create({ name: 'student_info' })(
  StudentInfoForm
);

export default WrappedStudentInfoForm;
