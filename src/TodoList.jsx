import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos] = useState([{task : " sample task", id:  uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addnewTask = () =>{
        setTodos((prevGTodos)=>{
            return [...todos,{task: newTodo, id : uuidv4()}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id!=id));
    }
    return(
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addnewTask}>Add Task</button>
            <br></br><br></br><br></br><br></br>

            <hr></hr>
            <h4>Tasks todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                         <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}