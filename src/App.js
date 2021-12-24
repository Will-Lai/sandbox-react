import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part[0].name} ex={props.part[0].exercises}/>
            <Part part={props.part[1].name} ex={props.part[1].exercises}/>
            <Part part={props.part[2].name} ex={props.part[2].exercises}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.ex}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.ex[0].exercises + props.ex[1].exercises + props.ex[2].exercises}</p>
        </div>
    )
}

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}



const App = (props) => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }


    const {counter} = props

    return (
        <div>
            {/* <Header course={course.name} />
            <Content part={course.parts} />
            <Total ex={course.parts} /> */}

            <Hello age={26} name={"William"}/>
            <div>{counter}</div>
        </div>
    )
}

export default App;
