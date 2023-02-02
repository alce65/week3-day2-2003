import { Task, TaskStructure } from '../models/task';

export const TASKS: TaskStructure[] = [
  { id: '164983', name: 'Hacer algo', owner: 'Pepe', isCompleted: true },
  new Task('Otra cosa', 'Luisa'),
  new Task('Comer', 'Todos'),
];
