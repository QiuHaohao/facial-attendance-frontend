import React from 'react';
import { Spin, Icon } from 'antd';

import './PageLoading.css';

const PageLoading = () => (
  <div className="page-loading">
    <Spin
      size="large"
      indicator={<Icon className="loading" type="loading" spin />}
      tip="Loading..."
    />
  </div>
);

export default PageLoading;
