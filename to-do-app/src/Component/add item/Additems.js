import {Component} from 'react'
import './additem.css'
class AddItems extends Component{
    state={
        
        name: '',
        task: '',
    }
    handelChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    submiting =(e)=>{
        e.preventDefault();
       // console.log(this.state);
        this.props.add_items(this.state)
        this.setState({
            name:'',
            task:''
        })

    }
    render() {
      
        return (
        <div>
            <form onSubmit={this.submiting} >
                <input type="text" placeholder = "Enter your Name ... " id='name' onChange={this.handelChange}  value={this.state.name}/>
                <input type="text" placeholder = "Enter your Task ... " id='task' onChange={this.handelChange} value={this.state.task}/>
                <input type = "submit" value="add"/>

            </form>
        </div>
        );
    }

}
export default AddItems;