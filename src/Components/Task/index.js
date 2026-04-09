import { useState } from "react";
import "./index.css"

const Task=({task,updateTask})=> {
  const [showEdit,setShowEdit]=useState(false)
  const [editedTask,setEditedTask]=useState({text:task.text,priority:task.priority,deadline:task.deadline,completed:"pending",id:task.id})
  let currentDate=new Date();
  let date=new Date(task.deadline)
  let days=(date-currentDate)/(1000*3600*24)
  let risk="task-item"
  if(days<=0 && (task.completed==="pending")){
    console.log("danger",days)
    risk+=" danger-zone"
  }else if(task.completed==="completed"){
    console.log("safe",days)
    risk+=" task-completed"
  }
  console.log(showEdit)

  const editName=(value)=>{
    setEditedTask(prev=>({...prev,text:value}))
  }

  const editPriority=(value)=>{
    setEditedTask(prev=>({...prev,priority:value}))
  }

  const editDeadline=(value)=>{
    setEditedTask(prev=>({...prev,deadline:value}))
  }

  const saveEditedTask=()=>{
    let checkForUpdates=false;
    if(task.text!==editedTask.text){
      checkForUpdates=true;
    }else if(task.priority!==editedTask.priority){
      checkForUpdates=true;
    }else if(task.deadline!==editedTask.deadline){
      checkForUpdates=true;
    }
    if(checkForUpdates){
      console.log("edited",editedTask)
      updateTask("update",editedTask)
      setShowEdit(false)
    }else{
      setShowEdit(false)
    }
  }
  return (
    <li className={risk} >
      <h2 className="taskId">TodoId: {task.id}</h2>
      {showEdit ? (
        <>
        <div className="task-label-input">
          <label className="task-label" htmlFor="task">Task :</label>
          <input id="task" type="text" value={editedTask.text} onChange={(e)=>editName(e.target.value)} className="task-input-text"/>
        </div>
        <div className="task-label-input">
          <label className="task-label" htmlFor="task">Priority :</label>
          <input id="task" type="text" value={editedTask.priority} onChange={(e)=>editPriority(e.target.value)} className="task-input-text"/>
        </div>
        <div className="task-label-input">
          <label className="task-label" htmlFor="task">Deadline :</label>
          <input id="task" type="text" value={editedTask.deadline} onChange={(e)=>editDeadline(e.target.value)} className="task-input-text"/>
        </div>
        </>
      ):
      (
      <>
        <p className="task-text">
        <span className="task-label">Task: </span>{task.text}
      </p>
      <p className="task-text">
        <span className="task-label">Priority: </span>{task.priority}
      </p>
      <p className="task-text">
        <span className="task-label">Status: </span>{task.completed}
      </p>
      {(task.completed==="pending") && <p className="task-text">
        <span className="task-label">Deadline: </span>{isNaN(days) ? "No Deadline" : Math.ceil(days)+" days"}
      </p>}
      </>
      )}
      <div className="task-btnFlex">
        <button className="task-btn-delete" onClick={()=>updateTask("delete",task.id)} >Delete</button>
        {task.completed==="pending" ?
         <button className="task-btn-completed" onClick={()=>updateTask("update",{...task,completed:"completed"})}>Completed</button>:(
          <button className="task-btn-completed" onClick={()=>updateTask("update",{...task,completed:"pending"})}>Pending</button>
         )}
        {/* <button className="task-btn-completed" onClick={()=>updateTask("update",{...task,completed:!task.completed})}>{task.completed?"Not ":""}Completed</button> */}
        {(task.completed==="pending") && (showEdit ? <button className="task-btn-edit" onClick={()=>saveEditedTask()}>Save</button>: <button className="task-btn-edit" onClick={()=>setShowEdit(prev=>!prev)}>Edit</button>)}
      </div>
      
    </li>
  );
}
export default Task;