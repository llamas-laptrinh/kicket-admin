import React from 'react';
import { Image } from 'antd';
import test from '../../assets/images/test.jpg'


const index: React.FC = () => {
  return (
    <div><Image preview={false} src={test} /></div>
  );
}

export default index;