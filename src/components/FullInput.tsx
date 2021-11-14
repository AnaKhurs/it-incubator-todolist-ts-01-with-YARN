import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";


type PropsType = {
    addTask: (title: string) => void
}

export const FullInput = (props: PropsType) => {

    let [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onClickHandler(title)
        }
    }


    const onClickHandler = (title: string) => {
        props.addTask(title)
        setTitle("")
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button name={"+"} callBack={() => onClickHandler(title)}/>
        </div>
    )
}