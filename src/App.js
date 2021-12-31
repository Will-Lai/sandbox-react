import React, { useState } from 'react'


const Heading = (props) => <h1>{props.heading}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = (props) => <div>{props.text} {props.data}</div>

const App = () => {

    const [goodVal, setGoodVal] = useState(0)
    const [neutralVal, setNeutralVal] = useState(0)
    const [badVal, setBadVal] = useState(0)

    return (
        <div>
            <Heading heading={"give feedback"} />

            <Button onClick={() => setGoodVal(goodVal + 1)} text={"good"}/>
            <Button onClick={() => setNeutralVal(neutralVal + 1)} text={"neutral"}/>
            <Button onClick={() => setBadVal(badVal + 1)} text={"bad"}/>

            <Heading heading={"statistics"} />
            <Display text={"good"} data={goodVal} />
            <Display text={"neutral"} data={neutralVal} />
            <Display text={"bad"} data={badVal} />

        </div>
    )
}

export default App;
