import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';
import { TaskStructure } from '../../models/task';
import { TASK } from '../../mocks/tasks';

describe('Given Card component', () => {
  test('It should be in the document', () => {
    document.body.innerHTML = '<ul></ul>';
    const mockTask: TaskStructure = TASK[0];
    const element = new Card('ul', mockTask);
    expect(element).toBeInstanceOf(Card);

    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });
});
