import React from 'react';
import AntdButton from 'antd/es/button';

export default function Button(props) {
  const { label } = props;
  return (
    <AntdButton type="primary"> {label} </AntdButton>
  );
}