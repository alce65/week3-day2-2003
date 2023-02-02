/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { TaskStructure } from '../../models/task';
import { Add } from '../add/add';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './tasks.scss';

export class Tasks extends Component {
  constructor(public selector: string, public tasks: TaskStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  addTask(task: TaskStructure) {
    this.tasks = [...this.tasks, task];
    this.render('afterbegin');
    console.log(this.tasks);
  }

  deleteTask(id: TaskStructure['id']) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.render('afterbegin');
    console.log(this.tasks);
  }

  updateTask(task: TaskStructure) {
    this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
    this.render('afterbegin');
    console.log(this.tasks);
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    new Add('.tasks', this.addTask.bind(this));
    this.tasks.forEach((item) => {
      new Card(
        '.tasks>ul',
        item,
        this.deleteTask.bind(this),
        this.updateTask.bind(this)
      );
    });
  }

  createTemplate() {
    return `<section class="tasks"><ul></ul></section>`;
  }
}
