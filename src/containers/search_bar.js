import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
      return (
        <form className="input-group">
          <input />
          <span className="input-group-btn">
            <button type="button" className="btn btn-secondary">Button</button>
          </span>
        </form>
      );
    }
}
