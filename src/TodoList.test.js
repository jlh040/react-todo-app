import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
    render(<TodoList />);
});

it('matches the snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('does not show todos upon page load', () => {
    const { queryByText } = render(<TodoList />);
    const todoParagraph = queryByText('Task:');

    expect(todoParagraph).not.toBeInTheDocument();
})