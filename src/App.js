import React, { useState } from 'react'

const Heading = (props) => (
    <h1>
        {props.text}
    </h1>
)

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const Display = (props) => <div>{props.text} {props.value}</div>

const App = (props) => {

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodIncrement = () => setGood(good + 1)
    const neutralIncrement = () => setNeutral(neutral + 1)
    const badIncrement = () => setBad(bad + 1)

    return (
        <div>
            <Heading text={"give feedback"} />
            <Button onClick={goodIncrement} text={"good"} />
            <Button onClick={neutralIncrement} text={"neutral"} />
            <Button onClick={badIncrement} text={"bad"} />

            <Heading text={"statistics"} />
            <div>
                <Display text={"good"} value={good} />
                <Display text={"neutral"} value={neutral} />
                <Display text={"bad"} value={bad} />
            </div>
            
        </div>
    )
}

export default App;
