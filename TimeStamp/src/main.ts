import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}

const todos: Todo[] = [
  { id: 0, label: "buy groceries", done: true },
  { id: 1, label: "buy eggs", done: false },
  { id: 2, label: "sleep", done: true },
];

todos.forEach((todo) => {
  const div = document.createElement("div");
  div.innerHTML = `label: ${todo.label} - done: ${todo.done}`;
  app.append(div);
});

console.log ("Hej")

