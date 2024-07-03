// src/components/TodoList.tsx
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Fetch todos from API
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const data: Todo[] = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed} 
          onToggle={() => toggleTodo(todo.id)} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
