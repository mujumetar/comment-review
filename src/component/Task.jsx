import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { AddTask } from './AddTask'
import { v4 as uuidv4 } from 'uuid';
import List from './list';
import { AvatarGenerator } from 'random-avatar-generator';


function Task() {
    const [task, setTask] = useState("")
    const [data, setData] = useState([])
    const [star, setStar] = useState("")
    const [name, setName] = useState("")

    const generator = new AvatarGenerator();
    generator.generateRandomAvatar();
    let avt_img = generator.generateRandomAvatar('avatar');

let taskref = useRef()
let nameref = useRef()
    function HandleTask() {


        if(task || name != ""){
 let obj = {
            task,
            name: name,
            img: avt_img,
            rating: star,
            id: uuidv4()
        }

        console.log(obj)
        setData([...data, obj])
        }
        else{
          taskref.current.style.border="2px solid red"
          nameref.current.style.border="2px solid red"
        }
       

        
    }
    console.log(data)



    return (
        <>
            <List data={data} setTask={setTask} setData={setData}avt_img={avt_img} />
            <AddTask HandleTask={HandleTask} task={task} setTask={setTask} taskref={taskref} nameref={nameref} star={star} setStar={setStar} data={data} name={name} setName={setName}/>
        </>
    )
}

export default Task