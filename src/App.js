import './App.css';
import Task from './Components/Task';
import { useState } from 'react';
import NewTask from './Components/NewTask';
import Filters from './Components/Filters';

const todolist=[{
  id:1,
  text:"Go to the gym",
  completed:"pending",
  priority:"max",
  deadline:new Date("2026-4-10")
},{
  id:2,
  text:"Go to the market",
  completed:"completed",
  priority:"min",
  deadline:new Date("2026-04-11")
},{
  id:3,
  text:"Go to the park",
  completed:"pending",
  priority:"max",
  deadline:new Date("2026-05-01")
}]

function App() {
  const [tasks,setTasks]=useState(todolist);
  
  const [filters,setFilters]=useState({})

  const updateTasks=(action,value)=>{
    console.log(action,value)
    if(action==="delete"){
      console.log("del",value)
      setTasks(prevTasks=>prevTasks.filter(task=>task.id!==value))
    }else if(action==="update"){
      
      setTasks(prevTasks=>prevTasks.map(task=>task.id===value.id?{...task,...value}:task))
    }else if(action==="add"){
      setTasks(prevTasks=>([...prevTasks,value]))
    }
    
    
  }
  console.log(tasks)
  let filteredData;
  const getFilteredList=()=>{
    if(Object.keys(filters).length){
      return tasks.filter(task=>{
      for(let key of Object.keys(filters)){
        if(filters[key]==="all"){
          console.log("all")
          continue;
        }
        if(key==="deadline"){
          console.log(key);
          continue;
        }else if(filters[key]!==task[key]){
          return false;
        }
      }
      return true;
    })
    }else{
      return tasks;
    }
  }
  filteredData=getFilteredList();
  let sortedData;
  if(filters.deadline==="asc"){
    sortedData=filteredData.sort((a,b)=>a.deadline-b.deadline)
  }else if(filters.deadline==="desc"){
    sortedData=filteredData.sort((a,b)=>b.deadline-a.deadline)
  }
  if(filters.deadline==="asc" || filters.deadline==="desc"){
    filteredData=sortedData;
  }
  
  console.log("filterData",filteredData)
  console.log("tasks",tasks)
  console.log("filters",filters)
  return (
    <div className="todolist-page">
        <h1 className='todolist-heading'>Todo List</h1>
        <div className='todolist-flexContainer'>

        
          <div className='filters-newTask-flexContainer'>
            <Filters filters={filters} setFilters={setFilters} />
            <NewTask updateTask={updateTasks} />
          </div>
          <div className='tasklist-flexContainer'>
          <h1 className='tasklist-heading'>Task List</h1>
          <ul className='task-list'>
            {
              filteredData?.length > 0 ? filteredData.map(task=>(
                <Task task={task} updateTask={updateTasks} key={task.id}/>
              )) : <p>No tasks available.</p>
            }
          </ul>
          </div>
          </div>
    </div>
  );
}

export default App;
