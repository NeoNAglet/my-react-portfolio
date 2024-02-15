import React, { Component } from 'react';
import './navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div id='navbar' className='container'>
        <h1>This is an h1 Headeing</h1>
        <h2>This is an h2 Headeing</h2>
        <h3>This is an h3 Headeing</h3>
        <h4>This is an h4 Headeing</h4>
        <h5>This is an h5 Headeing</h5>
        <h6>This is an h6 Headeing</h6>
        <p>This is a paragraph</p>
        <span>This is a span</span>
      </div>
    )
  }
}
