import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';
import { TaskStructure } from '../../models/task';
import { TASKS } from '../../mocks/tasks';

describe('Given Card component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: TaskStructure = TASKS[0];
  let element: Card;
  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Card('ul', mockTask, deleteMock, updateMock);
  });
  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Card);
  });
  test('It render the card in the document', () => {
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });
  test('It should be used the checkbox', () => {
    const check = screen.getByRole('checkbox');
    fireEvent.change(check);
    expect(updateMock).toHaveBeenCalled();
  });
  test('It should be used the button', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});
