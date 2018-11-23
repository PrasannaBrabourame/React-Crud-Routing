import React from 'react';
import '../styleSheets/table.css'
//import UserDetails from './userDetail';
import { connect } from 'react-redux';
import * as userAction from '../../redux/action/userAction';

class fetch extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            number: '', 
            name: '', 
            position: '',
            editIndex:''
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        var user = {
            number: this.state.number, 
            name: this.state.name, 
            position: this.state.position
        }
        if(this.state.editIndex === ''){
            this.props.createNewuser(user);
        }else{
            this.props.editUser(user,this.state.editIndex);
        }
        this.setState({
            number: '', 
            name: '', 
            position: '',
            editIndex:''
        });

        

        //
        //event.preventDefault();
        //this.props.createContact(contact);
    }


    editUser(e,index){
        this.setState({
            number: this.props.userdetails[index].number, 
            name: this.props.userdetails[index].name, 
            position: this.props.userdetails[index].position,
            editIndex:index
        });
        
        console.log(this.props.userdetails[index].name);
    }

    deleteUser(e, index){
        e.preventDefault();
        this.props.deleteuser(index);
      }

    updateInput(event){
        switch(event.target.attributes.label.value){
            case 'lbl_id':
            this.setState({
                number: event.target.value
            });
            break;
            case 'lbl_userName':
            this.setState({
                name: event.target.value
            });
            break;
            case 'lbl_position':
            this.setState({
                position: event.target.value
            });
            break;
            default:
            break;
        }
    }
      
    listView(data, index){
        return (
            <tr key={index}>
                <td>{data.number}</td>
                <td>{data.name}</td>
                <td  onClick={(e)=>this.handleClick(data.number)}>{data.position}</td>
                <td onClick={(e)=>this.editUser(e,index)}><button className="button orange">Edit</button></td>
                <td onClick={(e)=>this.deleteUser(e,index)}><button className="button black">Delete</button></td>
            </tr>
        )
      }

    render(){
        return(
            <div>
            <table className="zui-table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Position</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
               {this.props.userdetails.map((userdetails, i) => this.listView(userdetails, i))}
               </tbody>
            </table>
            <div>
            <input onChange={(e)=>this.updateInput(e)} type="text" value={this.state.number} label="lbl_id"/>
            <input onChange={(e)=>this.updateInput(e)} type="text" value={this.state.name} label="lbl_userName" />
            <input onChange={(e)=>this.updateInput(e)} type="text" value={this.state.position} label="lbl_position"/>
            <button className="button blue" onClick={(e)=>this.handleClick(e)}>Save</button>
            </div>
         </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userdetails: state.userdetails
    }
  };


  
  const mapDispatchToProps = (dispatch) => {
    return {
        createNewuser: userdetails => dispatch(userAction.createNewuser(userdetails)),
        deleteuser: index =>dispatch(userAction.deleteuser(index)),
        editUser : (userdetails,index)=> dispatch(userAction.editUser(userdetails,index))
    }
  };


  export default connect(mapStateToProps, mapDispatchToProps)(fetch);