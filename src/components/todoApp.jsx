import { useState } from "react";

function TodoApp (){
    const [ title, setTitle] = useState('Bienvenido');
    const [ todos, setTodos] = useState([])


    function handleClick(e){
        e.preventDefault();
        setTitle("rosa");
    }

    function handleChange(e){
     const value = e.target.value  ;
     setTitle(value)
    }

    // function handleSubmit(e){
    //     e.preventDefault();

    //     const newTodo= {
    //         id: crypto.randomUUID(),
    //         title: title,
    //         completed: false
    //     }
    // }

    return (
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange}  className="todoInput" value={title} placeholder ="proxima tarea" />
            <input onClick={handleClick}
             type="submit"
             value="Create todo" 
             className="buttonCreate"
            />
            
        </form>
    </div>
    );
}

export default TodoApp;