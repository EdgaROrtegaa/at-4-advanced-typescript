// src/components/TodoItem.tsx
import React from 'react';

interface TodoItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle }) => {
  return (
    <li onClick={onToggle} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};

export default TodoItem;
