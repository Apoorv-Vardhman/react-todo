import { useState } from 'react';
import './App.css';
import Todos from './components/table/Todos';
import { TodoForm } from './components/TodoForm';

function App() {

  let [todos,setTodos] = useState([]);
  let [currentTodo,setCurrentTodo] = useState({name:"",todo:"",isUpdate:false,id:0});

  const submitTodo = (todo)=>{
    if(todo.isUpdate){
      setTodos(todos.map(value=>{
        if(value.id===todo.id){
          value.name = todo.name;
          value.todo = todo.todo;
        }
        return value;
      }))
    } else{
      todo.id = todos.length+1;
      setTodos([...todos,todo]);
    }
  }

  const deleteTodo = (todo)=>{ 
    setTodos(todos.filter(value=>todo.id!==value.id));
  }

  const updateTodo = (todo)=>{
    console.log(todo);
    todo.isUpdate = true;
    setCurrentTodo(todo);
  }

  return (
    <div className="App">
      <div className='bg-green-300 w-full pt-4 pb-6'>
        <div className="xl:max-w-lg mx-auto">
          <div className="bg-white shadow rounded px-8 pt-6 pb-8">
            <TodoForm onSubmit={submitTodo} todo={currentTodo} />
          </div>
        </div>
      </div>

      <div className='bg-gray-300 w-full pt-4 pb-6'>
        <div className='xl:max-w-2xl sm:min-w mx-auto'>
          <div className="bg-white shadow rounded px-8 pt-4 pb-4">
            <Todos todos={todos} delete={deleteTodo} update={updateTodo}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
