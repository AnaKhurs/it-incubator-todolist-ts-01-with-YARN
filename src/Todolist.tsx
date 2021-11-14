import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {MapTasksForTodolist} from "./components/MapTasksForTodolist";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export function Todolist({tasks, removeTask, ...props}: PropsType) {

    let [title, setTitle] = useState("")

    const onFilterClickHandler = (value: FilterValuesType) => {
        changeFilter(value)
    }

/*    const onClickHandler = (tId: string) => {
        removeTask(tId)
    }*/


    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const callBackClickAddPost = () => {
        props.addTask(title)
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>


        <div>
{/*            <FullInput addTask={props.addTask}/>*/}
            <Input title={title} setTitle={setTitle} callBack={callBackClickAddPost}/>
            <Button name={'+'} callBack={callBackClickAddPost}/>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => {
                    return <MapTasksForTodolist t={t} removeTask={removeTask}/>
                    // return <li key={t.id}>
                    //     <input type="checkbox" checked={t.isDone}/>
                    //     <span>{t.title}</span>
                    //     <button onClick={() => onClickHandler(t.id)}>x</button>
                    // </li>

                })
            }
        </ul>
        <div>
            <Button name={"all"} callBack={() => onFilterClickHandler("all")}/>
            <Button name={"active"} callBack={() => onFilterClickHandler("active")}/>
            <Button name={"completed"} callBack={() => onFilterClickHandler("completed")}/>

        </div>
    </div>
}
