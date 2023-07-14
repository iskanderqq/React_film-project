import { Component } from "react";

export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchVal: "",
            type: "All"
        }
    }

    keyHandler = (e) =>{
        if(e.key === 'Enter'){
            this.props.func(this.state.searchVal,this.state.type)
        }
    }
    changeHandler = (e) =>{
            this.setState(
                ()=>({[e.target.name]: e.target.value}), ()=>{
                    this.props.func(this.state.searchVal,this.state.type)
                }
                )
    }
    render(){
        return  <div className="row">

                    <div className="input-field ">
                        <input  
                        type="search" 
                        className="validate"
                        placeholder="Search"
                        value={this.searchVal}
                        onKeyDown={this.keyHandler}
                        onChange={(e) => this.setState({searchVal: e.target.value})}
                        />
                        <div className="radio-container">
                            <p>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="All"
                                            onChange={this.changeHandler}
                                    />
                                    <span>All</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="movie"
                                            onChange={this.changeHandler}
                                    />
                                    <span>Movies</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="Series"
                                           onChange={this.changeHandler}
                                    />
                                    <span>Series</span>
                                </label>
                            </p>
                        </div>
                        
                        <a className="waves-effect waves-light btn-small" onClick={() => this.props.func(this.state.searchVal, this.state.type)}>Search</a>
                        
                    </div>
                </div>

    }
}