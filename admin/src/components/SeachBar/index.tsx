import { Input } from 'antd';
import React from 'react';

interface SeachBarProps {
    size?: 'small' | 'middle' | 'large';
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
    placeholder?: string;
}

const Index: React.FC <SeachBarProps> = ({size, placeholder,  style, prefix, ...rests}) => {
  return (
    <>
     <Input
         size={size} 
         placeholder={placeholder}
         style={style}
         prefix={prefix}
         {...rests}
     />
    </>
  );
}

export default Index;