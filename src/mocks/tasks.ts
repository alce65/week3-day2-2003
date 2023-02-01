import { Task, TaskStructure } from '../models/task';

export const TASK: TaskStructure[] = [
  { id: '164983', name: 'Hacer algo', owner: 'Pepe', isCompleted: false },
  new Task('Otra cosa', 'Luisa'),
  new Task('Comer', 'Todos'),
];
