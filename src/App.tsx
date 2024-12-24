import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import TodoItem from "./components/TodoItem";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index: number, currentText: string) => {
    setEditingIndex(index);
    setEditingText(currentText);
  };

  const saveEdit = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editingText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="todo-list">
        <h2>Todo List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              editingIndex={editingIndex}
              editingText={editingText}
              startEditing={startEditing}
              saveEdit={saveEdit}
              removeTodo={removeTodo}
              setEditingText={setEditingText}
            />
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
