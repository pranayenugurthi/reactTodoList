import "./index.css";
import { useState,useRef } from "react";
const NewTask=({updateTask})=>{
    const [newTask,setNewTask]=useState({text:"", priority:"min", deadline:"",completed:"pending"});
    const index=useRef(3)
    const addNewTask=()=>{
        updateTask("add",{...newTask,id:++index.current})
        setNewTask({text:"", priority:"min", deadline:"",completed:"pending"})
    }
        return(

        <div className='newTAsk-flexContainer'>
                  <h2 className="newTask-head">Add New Task</h2>
        <div className='input-content'>
            <div className="input-container">
                <div className="newTask-input-label">
                    <label className="newTask-label" htmlFor="newTask-priority">Priority:</label>
                    <select id="newTask-priority" className='newTask-select' value={newTask.priority} onChange={(e) => setNewTask({...newTask, priority: e.target.value})}>
                        <option value="min">Min</option>
                        <option value="max">Max</option>
                    </select>
                </div>
                <div className="newTask-input-label">
                    <label className="newTask-label" htmlFor="newTask-Status">Status:</label>
                    <select id="newTask-Status" className='newTask-select' value={newTask.completed} onChange={(e) => setNewTask({...newTask, completed: e.target.value})}>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="newTask-input-label">
                    <label className="newTask-label" htmlFor="newTask-Deadline">Deadline:</label>
                    <input 
                    id="newTask-Deadline"
                    type="date" 
                    className='newTask-select'
                    onChange={(e)=>setNewTask({...newTask, deadline: e.target.value})}
                    />
                </div>
                
                
                
            </div>
            <div className='input-container'>
            <input 
            type="text"
            placeholder='Enter task'
            className='task-input' 
            value={newTask.text} 
            onChange={(e)=>setNewTask({...newTask, text:e.target.value})}
            />
            <button className='add-task-button' onClick={()=>addNewTask()}>Add</button>
            </div>
     </div>
     </div>
    )
}
export default NewTask;