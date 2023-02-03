/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { TASKS } from '../../mocks/tasks';
import { ProtoTaskStructure, TaskStructure } from '../../models/task';

export interface TaskApiRepoStructure {
  loadTasks(): Promise<TaskStructure[]>;
  getTask(id: TaskStructure['id']): Promise<TaskStructure>;
  createTask(task: ProtoTaskStructure): Promise<TaskStructure>;
  update(task: Partial<ProtoTaskStructure>): Promise<TaskStructure>;
  delete(id: TaskStructure['id']): Promise<void>;
}

export class TaskApiRepo {
  url: string;
  constructor(public storeName: string = 'Tasks') {
    this.url = 'http://localhost:3000/tasks';
  }

  async loadTasks(): Promise<TaskStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as TaskStructure[];
    return data;
  }

  async getTask(id: TaskStructure['id']): Promise<TaskStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(this.url);
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  async createTask(task: ProtoTaskStructure): Promise<TaskStructure> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  async update(task: Partial<TaskStructure>): Promise<TaskStructure> {
    const url = this.url + '/' + task.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(task),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as TaskStructure;
    return data;
  }

  async delete(id: TaskStructure['id']): Promise<void> {
    const url = this.url + '/' + id;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
  }
}
