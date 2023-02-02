/* eslint-disable no-unused-vars */
import { Task, TaskStructure } from '../../models/task';
import { Component } from '../component/component';

export class Add extends Component {
  constructor(
    public selector: string,
    public addTask: (task: TaskStructure) => void
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll('input');
    const newTask = new Task(inputs[0].value, inputs[1].value);
    console.log(newTask);
    this.addTask(newTask);
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector('form.add')
      ?.addEventListener('submit', this.handleSubmit.bind(this));
  }

  createTemplate() {
    return `<p>Add</p>
      <form class="add">
        <input type="text" name="name" placeholder="Describe la tarea" required>
        <input type="text" name="owner" placeholder="Responsable de la tarea">
        <button type="submit">Añadir</button>
      </form>
    `;
  }
}
