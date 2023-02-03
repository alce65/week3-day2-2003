/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Tasks } from './components/tasks/tasks';
import './index.scss';
import { TaskApiRepo } from './services/repository/task.api.repo';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tares', path: '/tasks' },
  { label: 'Acerca de', path: '/about.html' },
];

console.log('Load', location.pathname);
new Header('#root');
new Menu('.header', menuOptions);
if (location.pathname === '/home') {
  new Tasks('main', new TaskApiRepo());
}

new Footer('#root');
