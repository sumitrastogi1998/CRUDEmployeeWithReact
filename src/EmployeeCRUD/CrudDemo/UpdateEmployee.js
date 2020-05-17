import React, { Component } from 'react'
import {connect} from 'react-redux'

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             ID: 0,
             Name: '',
             Salary: 0,
             Department: ''
        }
    }
    
    componentDidMount(){
        if(this.props.location.state)
        {
        this.setState({
            ID: this.props.location.state.employee.ID,
             Name: this.props.location.state.employee.Name,
             Salary: this.props.location.state.employee.Salary,
             Department: this.props.location.state.employee.Department
        })
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
        this.props.updateEmployee(this.state)
        alert("Employee Details Updated")
        this.props.history.push('/listEmployee')
    }
    
    render() {
        if(this.props.location.state)
        {
        return (
            <React.Fragment>
            <form>
                <div>
                    <label>Enter ID: </label><input type="number" id="ID" readOnly value={this.state.ID} onChange={this.handleInput} placeholder="Enter Id" /><br />
                </div>
                <div>
                    <label>Enter Name: </label><input type="text" id="Name" value={this.state.Name} onChange={this.handleInput} placeholder="Enter name" /><br />
                </div>
                <div>
                    Enter Salary: <input type="number" id="Salary" onChange={this.handleInput} value={this.state.Salary} placeholder="Enter Salary" /><br />
                </div>
                <div>
                    Enter Department: <input type="text" id="Department" onChange={this.handleInput} value={this.state.Department} placeholder="Enter department" /><br />
                </div>
                <div>
                    <button onClick={this.handleForm} disabled={!this.state.ID || !this.state.Name || !this.state.Salary || !this.state.Department}>Update</button>
                </div>
                
            </form>
            </React.Fragment>
        )
    }else{
        return (<div>
        No employee selected for updating...
        Please go to ListEmployee link and then click on update Button for updating
        </div>)
    }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployee: (obj) => {dispatch({type:'UpdateEmployee',obj: obj})}
    }
}

export default connect(null,mapDispatchToProps)(UpdateEmployee)
