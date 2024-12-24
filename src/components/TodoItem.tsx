import React from "react";

interface TodoItemProps {
  todo: string;
  index: number;
  editingIndex: number | null;
  editingText: string;
  startEditing: (index: number, currentText: string) => void;
  saveEdit: (index: number) => void;
  removeTodo: (index: number) => void;
  setEditingText: (text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  editingIndex,
  editingText,
  startEditing,
  saveEdit,
  removeTodo,
  setEditingText,
}) => {
  return (
    <li>
      {editingIndex === index ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={() => saveEdit(index)}>Save</button>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => startEditing(index, todo)}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
