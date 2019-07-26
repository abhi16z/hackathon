import React from 'react';
import Icon from '../../atoms/icon';

import './category.css';

export default function Category(props) {
  const { description, onSelectCategory, selected, index } = props;
  const iconType = selected ? 'check-square' : 'border';
  return(
    <div tabIndex="0" onClick={() => onSelectCategory(index)} className="category">
      <Icon type={iconType} style={{ fontSize: '28px' }} />
      <span className="category-description"> {description} </span>
    </div>
  );
}