import React from 'react';
import { Form, Button, Select, Input, Upload, Icon } from 'antd';
import PropTypes from 'prop-types';
import * as userHook from '../../../../hooks/userHook';
import api from '../../../../api/api';

import './StudentInfoForm.css';
function StudentInfoForm(props) {
  const { getFieldDecorator } = props.form;
  const { Option } = Select;
  // const []
  const user = userHook.useUser();

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if (values.photo !== undefined) {
          const formdata = new FormData();
          formdata.append('mid', values.mid);
          formdata.append('name', values.name);
          formdata.append('email', values.email);
          for (let i = 0; i < values.labs.length; i += 1) {
            formdata.append('labs', values.labs[i]);
          }
          formdata.append('image', values.photo);
          api.addNewStudent(formdata);
        }
      }
    });
  };

  // const normFile = e => {
  //   console.log(`UploadEvent${  e}`);
  //   if (Array.isArray(e)) {
  //     return null;
  //   }
  //   return e && e.fileList;
  // };
  return (
    <div className="student-info-form-container">
      <Form
        onSubmit={handleSubmit}
        enctype="text/plain"
        className="student-info-form"
      >
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
          {getFieldDecorator('photo')(
            // <Upload {...uploadProps} name="photo" listType="picture">
            //   <Button>
            //     <Icon type="upload" />
            //     Click to upload
            //   </Button>
            // </Upload>
            <Input type="file" />
          )}
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
    validateFields: PropTypes.func.isRequired
  })
};

const WrappedStudentInfoForm = Form.create({ name: 'student_info' })(
  StudentInfoForm
);

export default WrappedStudentInfoForm;
