/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { TaskStructure } from '../../models/task';
import { TaskApiRepo } from '../../services/repository/task.api.repo';
import { Add } from '../add/add';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './tasks.scss';

export class Tasks extends Component {
  public tasks: TaskStructure[];
  constructor(public selector: string, public repo: TaskApiRepo) {
    super();
    this.tasks = [];
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.load();
  }

  // Read
  async load() {
    this.tasks = await this.repo.loadTasks();
    this.render('afterbegin');
  }

  // Create
  async addTask(task: TaskStructure) {
    const finalTask = await this.repo.createTask(task);
    this.tasks = [...this.tasks, finalTask];
    this.render('afterbegin');
  }

  async deleteTask(id: TaskStructure['id']) {
    await this.repo.delete(id);
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.render('afterbegin');
  }

  async updateTask(task: TaskStructure) {
    const finalTask = await this.repo.update(task);
    this.tasks = this.tasks.map((item) =>
      item.id === task.id ? finalTask : item
    );
    this.render('afterbegin');
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
