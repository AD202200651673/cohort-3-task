import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector(selectTodos);

  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add one above.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
