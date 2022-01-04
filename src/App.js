import "./App.css";
import Head from "./Components/Head";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Components/Title";
import TodoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";

function App() {
  return (
    <div className="App">
      <Head />
      <Title />
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
