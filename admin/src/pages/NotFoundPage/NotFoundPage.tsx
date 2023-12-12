import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sao lì dữ vậy nhập đường dẫn bậy bạ chi ??? 😃😃👊🏻 "
      extra={
        <Link to="/">
          <Button type="primary">Quay về Trang Chủ</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
