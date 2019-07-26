import React from 'react';
import { Checkbox as AntdCheckbox } from 'antd';

export default function Checkbox(props) {
  const { checked, label } = props;
  return (
    <AntdCheckbox checked={checked}> {label} </AntdCheckbox>
  );
}