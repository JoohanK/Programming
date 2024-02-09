const todoInput = document.getElementById("todoInput"); // input fältet
const addTodoButton = document.getElementById("addTodo"); // add knappen
const todoList = document.getElementById("todoList"); //

/******* function att hämta all data ********/
const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    data.slice(0, 5).forEach((todo) => {
      addTodoToList(todo);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

/******* function att lägga till att lägga till nytt ********/
const addTodo = async () => {
  const newTodo = todoInput.value;
  if (newTodo) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify({
            title: newTodo,
            userId: 1, // användar id
            completed: false,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add a new todo");
      }
      const data = await response.json();
      // Display the newly added todo after it's created on the backend.
      addTodoToList(data);
      todoInput.value = ""; // Clear the input field
    } catch (error) {
      console.error("Error adding a new todo:", error);
    }
  }
};

const addTodoToList = (todo) => {
  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = todo.title;

  // Add an update button
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", () => {
    const updatedTitle = prompt("Update the task:", taskSpan.textContent);
    if (updatedTitle) {
      // Update the todo and reflect the change in the list
      updateTodo(todo.id, updatedTitle, taskSpan);
    }
  });

  // Add a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    // Delete the todo and remove it from the list
    deleteTodo(todo.id, li);
  });

  li.appendChild(taskSpan);
  li.appendChild(updateButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
};

// Function to update a todo
const updateTodo = async (todoId, updatedTitle, taskSpan) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: updatedTitle,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update the todo");
    }
    const data = await response.json();
    // Update the displayed title by modifying the inner text of the span
    taskSpan.innerText = data.title;
  } catch (error) {
    console.error("Error updating the todo:", error);
  }
};

// Function to delete a todo
const deleteTodo = async (todoId, listItem) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete the todo");
    }
    // Remove the deleted todo from the list
    listItem.remove();
  } catch (error) {
    console.error("Error deleting the todo:", error);
  }
};

addTodoButton.addEventListener("click", addTodo);
fetchTodos();