import React from 'react';
import './suggestions.css';

import Category from './category';

export default class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }
  render() {
    const { data, onSelectCategory } = this.props;
    return (
      <div className="suggestions-container">
        <h2> Select your interests </h2>
        <div className="header-divider" />
        {
          data.map((cat, index) => (
            <div>
              <Category {...cat} index={index} onSelectCategory={onSelectCategory} />
              <div className="header-divider" />
            </div>
          ))
        }
      </div>
    );
  }
}
