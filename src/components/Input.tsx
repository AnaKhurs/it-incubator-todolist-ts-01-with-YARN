import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type PropsType = {
    callBack: () => void
    title: string
    setTitle: (title: string) => void
}


export const Input = ({setTitle, title, ...props}: PropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            //addTask();
            //callBackHandler();
            props.callBack();

        }
    }

    return (
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
        </div>
    )
}