import React from 'react';

type PropsType = {
    callBack: () => void
    name: string
}
export const Button = (props: PropsType) => {

    const OnClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={OnClickHandler}>{props.name}</button>
)
}