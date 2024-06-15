import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <p> Site done by Neo Ngwenya. ©All rights reserved. {(new Date().getFullYear())}</p>
      </div>
    )
  }
}
