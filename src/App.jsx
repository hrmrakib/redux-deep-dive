import Counter from "./components/counter/Counter";
import TodoInput from "./components/todo/TodoInput";

const App = () => {
  return (
    <div className='flex justify-evenly'>
      <Counter />
      <TodoInput />
    </div>
  );
};

export default App;
