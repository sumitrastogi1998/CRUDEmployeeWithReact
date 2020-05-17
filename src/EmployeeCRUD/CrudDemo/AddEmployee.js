import React, { Component } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class AddEmployee extends Component {
    constructor(props) {
        super(props)
        //console.log("Cnst")
        this.state = {
            ID: '',
            Name: '',
            Salary: '',
            Department: '',
        }
    }

    handleInput = (event) => {
        if(parseInt(event.target.value))
        {
        this.setState({
            [event.target.id]: parseInt(event.target.value)
        })
        }else{
            this.setState({
                [event.target.id]: event.target.value
            })
        }
    }
    handleForm = (event) => {
        event.preventDefault()
        this.props.addEmployee(this.state)
        alert("Employee Added")
        this.props.history.push('/listEmployee')
        //let history = useHistory()
        //this.props.history.push('/listEmployee',{details: this.state})
        //console.log(this.props)
    }
   
    render() {
        //console.log(this.props)
        return (
            <React.Fragment>
            <form>
                <div>
                    <label>Enter ID: </label><input type="number" id="ID" onChange={this.handleInput} placeholder="Enter Id" /><br />
                </div>
                <div>
                    <label>Enter Name: </label><input type="text" id="Name" onChange={this.handleInput} placeholder="Enter name" /><br />
                </div>
                <div>
                    Enter Salary: <input type="number" id="Salary" onChange={this.handleInput} placeholder="Enter Salary" /><br />
                </div>
                <div>
                    Enter Department: <input type="text" id="Department" onChange={this.handleInput} placeholder="Enter department" /><br />
                </div>
                <div>
                    <button onClick={this.handleForm} disabled={!this.state.ID || !this.state.Name || !this.state.Salary || !this.state.Department}>Submit</button>
                </div>
                
            </form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addEmployee: (obj) => {dispatch({type: 'AddEmployee', obj: obj})}
    }
}
//const showthelocation = withRouter(AddEmployee)
export default connect(null,mapDispatchToProps)(AddEmployee)
