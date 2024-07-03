// src/index.ts
import express, { Request, Response } from 'express';
import { Todo } from './types';
// src/types/index.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let todos: Todo[] = [];

app.get('/api/todos', (req: Request, res: Response) => {
  res.json(todos);
});

app.post('/api/todos', (req: Request, res: Response) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
