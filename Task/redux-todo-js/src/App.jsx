import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>My Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
