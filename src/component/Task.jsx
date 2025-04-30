import React from 'react'
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


    function HandleTask() {
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
    console.log(data)



    return (
        <>
            <List data={data} setTask={setTask} setData={setData} avt_img={avt_img} />
            <AddTask HandleTask={HandleTask} task={task} setTask={setTask} star={star} setStar={setStar} data={data} name={name} setName={setName}/>
        </>
    )
}

export default Task