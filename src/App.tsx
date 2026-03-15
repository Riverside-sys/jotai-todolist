import { Provider } from "jotai";
import Todolist from "./components/Todolist";
import "./todoStyle.css";

const App = () => {
  return (
    <Provider>
      <h1>Jōtai</h1>
      <Todolist />
    </Provider>
  );
};

export default App;
