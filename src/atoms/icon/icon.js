import React from 'react';
import { Icon as AntdIcon } from 'antd';

export default function Icon(props) {
  const { type, style } = props;
  return (
    <AntdIcon type={type} style={style} />
  );
}