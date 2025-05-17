import React, { useState } from "react";

const Child = React.memo(({ setMessage }) => {
    const [inputValue, setInputValue] = useState("");

    const handleMessageChange = () => {
        setMessage(inputValue);
        setInputValue("");
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h2>Дочерний компонент</h2>
            <input
                type="text"
                onChange={handleChange}
                value={inputValue}
            />
            <button onClick={handleMessageChange}>Отправить родителю</button>
        </div>
    );
})

export default function DataFromChildToParent() {
    const [message, setMessage] = useState("");

    return (
        <div>
            <h1>Данные из дочернего компонента</h1>
            <p>{message}</p>
            <Child setMessage={setMessage} />
        </div>
    );
}