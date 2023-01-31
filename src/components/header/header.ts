/* eslint-disable no-unused-vars */
import { Component, InsertPosition } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>Learning DOM</h1>
        <p>Segundo día</p>
      </header>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
