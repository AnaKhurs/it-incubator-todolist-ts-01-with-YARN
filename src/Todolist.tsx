import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {FullInput} from "./components/Fullinput";
import {Input} from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    /* changeFilter: (value: FilterValuesType) => void*/
    addTask: (title: string) => void
}

export function Todolist({tasks, removeTask, ...props}: PropsType) {

    // let [title, setTitle] = useState("")

    /*    const addTask = () => {
            props.addTask(title);
            setTitle("");
        }*/

    /*   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
           setTitle(e.currentTarget.value)
       }*/

    /* const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
         if (e.charCode === 13) {
             addTask();
         }
     }*/

    const onClickFilter = (value: FilterValuesType) => {
        changeFilter(value)
    }

    const onClickHandler = (tId: string) => {
        removeTask(tId)
    }


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

    let [title, setTitle] = useState("")
    const callBackHandlerForAddTask = () => {
        props.addTask(title)
        setTitle("")
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            {/* <FullInput callBack={props.addTask}/>*/}
            <Input setTitle={setTitle} title={title} callBack={callBackHandlerForAddTask}/>
            <Button callBack={callBackHandlerForAddTask} name={'+'}/>
            {/* <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button callBack={addTask} name={"+"}/>
             <button onClick={addTask}>+</button>*/}
        </div>
        <ul>
            {
                tasksForTodolist.map(t => {

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button callBack={() => onClickHandler(t.id)} name={"x"}/>
                    </li>
                })
            }
        </ul>
        <div>

            <Button callBack={() => {
                onClickFilter('all')
            }} name={'all'}/>
            <Button callBack={() => {
                onClickFilter('active')
            }} name={'active'}/>
            <Button callBack={() => {
                onClickFilter('completed')
            }} name={'completed'}/>

        </div>
    </div>
}
