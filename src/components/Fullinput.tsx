import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "./Button";

type PropsType = {
    callBack: (title: string) => void
}


export const FullInput = (props: PropsType) => {
    let [title, setTitle] = useState("")
   // console.log(title)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            //addTask();
            callBackHandler();
        }
    }


    const callBackHandler = () => {
        props.callBack(title)
    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <Button callBack={callBackHandler} name={"+"}/>
            {/* <button onClick={addTask}>+</button>*/}
        </div>

    )
}