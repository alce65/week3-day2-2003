/* eslint-disable no-unused-vars */
import { MenuOption } from '../../index';
import { Component } from '../component/component';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string, public menuOptions: MenuOption[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.menuOptions
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('\n');
    return `
    <nav class="menu"><ul>${items}</ul></nav>
    `;
  }
}
