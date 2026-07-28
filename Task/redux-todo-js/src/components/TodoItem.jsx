import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../features/todos/todosSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  // save the edited text when user is done
  const saveEdit = () => {
    if (text.trim()) {
      dispatch(editTodo({ id: todo.id, text: text.trim() }));
    }
    setEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />

      {editing ? (
        <input
          className="edit-input"
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
        />
      ) : (
        <span className="todo-text" onDoubleClick={() => setEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </li>
  );
}
