import React from 'react';
import { Form, Button, Input } from 'antd';
import PropTypes from 'prop-types';

function PageAddStudent(props) {
  const { getFieldDecorator } = props.form;

  return (
    <div>
      <Form>
        <Form.Item>
          {(getFieldDecorator('Mtric No'),
          {
            rules: [
              {
                required: true,
                message: 'Please input a matriculation number'
              }
            ]
          })(<Input placeholder="Matric No" />)}
        </Form.Item>
        <Form.Item>
          {(getFieldDecorator('Name'),
          {
            rules: [
              {
                required: true,
                message: 'Please input a name'
              }
            ]
          })(<Input placeholder="Name" />)}
        </Form.Item>
        <Form.Item>
          {(getFieldDecorator('Email'),
          {
            rules: [
              { required: true, message: 'Please input an email' },
              {
                pattern: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com/,
                message: 'Input has to be a email'
              }
            ]
          })(<Input placeholder="Email" />)}
        </Form.Item>
      </Form>
    </div>
  );
}

PageAddStudent.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired
  })
};

export default PageAddStudent;
