import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const mockTitle = 'Test';
    const element = new Header('slot', mockTitle);
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByRole('heading', { name: mockTitle });
    expect(h1).toBeInTheDocument();
    const p = screen.getByRole('note');
    expect(p).toBeInTheDocument();
  });
});
