import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";

export  default  class App  extends React.Component{
    state={
        items:[],
        id:uuid(),
        item:"",
        editItem:false
    }
    handleChange=e=>{
        this.setState({
            item:e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        const newItem={
            id:this.state.id,
            item: this.state.item
        }
        const updatedItems=[...this.state.items,newItem];
        this.setState({
            id:uuid(),
            items:updatedItems,
            item:''

            
        })
        console.log(updatedItems)
      

    }
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5">
                          <h3 className="text-capitalize text-center">todo input</h3>
                            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                            <TodoList/>

                        </div>
                    </div>
                </div>
        );
    }

}
