import React from 'react';


export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:'',userName:''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        switch(e.currentTarget.attributes.label.value){
            case "id":
            this.setState({ id: e.target.value });
            break;
            case "userName":
            this.setState({ userName: e.target.value });
            break;
            default:
            break;
        }
        
      }

    handleClick(){
        alert(this.state.userName);
    }

    render(){
        return(
            <div>
            <input type="text" label="id" onChange={(e)=>this.handleChange(e)}/>
            <input type="text" label="userName" onChange={(e)=>this.handleChange(e)} />
            <button className="button orange" onClick={(e)=>this.handleClick()}>Save</button>
            </div>
        )
    }
}