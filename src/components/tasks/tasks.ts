/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { TaskStructure } from '../../models/task';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './tasks.scss';

export class Tasks extends Component {
  constructor(public selector: string, public tasks: TaskStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.tasks.forEach((item) => {
      new Card('.tasks>ul', item);
    });
  }

  createTemplate() {
    return `<section class="tasks"><ul></ul></section>`;
  }
}
