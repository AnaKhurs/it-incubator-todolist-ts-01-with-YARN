import React from "react";
import {TaskType} from "../Todolist";

type PropsType = {
    t: TaskType
    removeTask: (tId:string)=>void
}


export const MapTasksForTodolist = ({t,removeTask, ...props}: PropsType) => {

    const onClickHandler = (tId: string) => {
        removeTask(tId)
    }

    return <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => onClickHandler(t.id)}>x</button>
    </li>
}