import React, { useState } from "react";
const [tasks,setTasks]=useState([]);
const [task,setTask]=useState("");
const addTask=()=>{
  if(task.trim()){
    setTasks([...tasks, {id:Date.now(),text:task,completed:false}]);
    setTask("")
  }
}