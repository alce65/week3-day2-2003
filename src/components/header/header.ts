/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Learning DOM') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
        <p role="note" aria-label="info">Segundo día</p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
