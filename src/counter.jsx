import React, { useState } from "react";
import './counter.jsx'; // Make sure to adjust this import if necessary

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [score, setScore] = useState(0);
  const [quotes, setQuotes] = useState([
    "Believe in yourself and all that you are. Know that there is something inside you that ",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Successful and unsuccessful people do not vary greatly in their abilities. They vary in ",
    "The only way to do great work is to love what you do",
    "Successful people are not gifted; they just work hard, then succeed on purpose",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask("");
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    setTodos(newTodos);
    setScore(score + 1);
  };

  const handleIncomplete = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const styles = {
    form: {
      display: "flex",
      marginTop: 20,
    },
    
    input: {
      width: "70%",
      height: "30px", // Increase the height to make the input larger
      padding: "10px", // Increase the padding for spacing
      fontSize: 16,
      marginRight: 10,
    },
    button: {
      width: "30%",
      padding: 10,
      fontSize: 16,
      backgroundColor: "blue",
      border: "none",
      cursor: "pointer",
    },
    list: {
      marginTop: 20,
      width: "50%",
      listStyleType: "none",
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      padding: 10,
      backgroundColor: "#eee",
    },
    completeButton: {
      padding: 10,
      backgroundColor: "green",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
    incompleteButton: {
      padding: 10,
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      marginLeft: 10,
    },
    deleteButton: {
      padding: 10,
      backgroundColor: "grey",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      marginLeft: 10,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100px",
        backgroundImage: "url('/download (1).jpeg')", // Corrected image path
        
      }}
    >
      <h1 style={{ marginTop: 20, backgroundColor: "lightblue", border: "2px solid black", width: "200px" }}>Todo List</h1>
      <h3>Score: {score}</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          required
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add task
        </button>
      </form>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            {todo}
            <button
              style={styles.completeButton}
              onClick={() => handleComplete(index)}
            >
              Completed task
            </button>
            <button style={styles.incompleteButton} onClick={handleIncomplete}>
              Incomplete Task
            </button>
            <button
              style={styles.deleteButton}
              onClick={() => handleDelete(index)}
            >
              Delete task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
