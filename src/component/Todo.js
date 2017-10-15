import React from 'react';

export default class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = { todo: props}
    }

    render(){
        console.log(this.state.todo.todo.isDone)
        if(this.state.todo.todo.isDone){
            return (
                <div><strong>{this.state.todo.todo.text}</strong></div>
            )
        }
        else {
            return (
                <div> {this.state.todo.todo.text} </div>
            )
        }
    }
}