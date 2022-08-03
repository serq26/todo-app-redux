import './App.css';
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  
  const { open: isModalOpen } = useSelector(state => state.modal)

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <div className='content'>
        <AddTodo />
        <TodoList />   
      </div>   
    </main>
  );
}

export default App;
