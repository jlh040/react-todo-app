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
});

it('renders todos upon submit', () => {
    const { getByLabelText, getByText } = render(<TodoList />);
    const taskInput = getByLabelText('Enter task:');
    const btn = getByText('Add Task');

    fireEvent.change(taskInput, {target: {value: 'Walk the dog'}});
    fireEvent.click(btn);

    expect(getByText('Task: Walk the dog')).toBeInTheDocument()
})