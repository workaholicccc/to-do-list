import { useState } from "react"

function TodoList(){

    const[task,setTask]=useState([])  //for the task list
    const[newTask,setnewTask]=useState("") //for new tasks

    function handleInputChange(event){
        setnewTask(event.target.value)

    }

    function AddTask(){
         if(newTask!==""){  //if the newTask is not empty
            setTask([...task,newTask]);  
            setnewTask("")  //to keep the input empty after adding
             
        }

    }

    function DeleteTask(index){
        const updatedTask=task.filter((_,i)=>i!==index);   //the updatedTask will contain the elements which doesn't match the index
        setTask(updatedTask)

    }


    return(
        <div className="TDL">
            <h1>To-Do List</h1>
            <div className="tsk_add">

                <input type="text" placeholder="enter the task...." value={newTask} onChange={handleInputChange}/>
                <button id="add" onClick={AddTask}>ADD</button>

            </div>
            
            <div className="task_cont">
                {task.length > 0 && (  //rendering to make the task container disappear when there are no tasks
                    <ol>
                        {task.map((task, index) => (
                            <li key={index}>
                                <span>{task}</span>
                                <button id="dlt" onClick={() => DeleteTask(index)}>Delete</button>   
                            </li>
                        ))}
                    </ol>
                )}

            </div>



        </div>
    )
}
export default TodoList 