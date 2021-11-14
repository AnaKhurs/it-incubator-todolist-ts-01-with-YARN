import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction} from 'react';

type PropsType = {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    callBack: (title:string)=>void
}


export const Input = ({title, setTitle, ...props}: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.callBack(title)
        }
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
        </div>
    )
}