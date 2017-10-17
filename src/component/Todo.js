import React from 'react';

export default class Todo extends React.Component {

    render(){
        if(this.props.todo.get('isDone')){
            return (
                <div><strong>{this.props.todo.get('text')}</strong></div>
            )
        }
        else {
            return (
                <div> {this.props.todo.get('text')} </div>
            )
        }
    }
}