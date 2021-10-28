import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onClickFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const onClickHandler = (tId: string) => {
        props.removeTask(tId)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button callBack={addTask} name={"+"}/>
            {/* <button onClick={addTask}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {

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
