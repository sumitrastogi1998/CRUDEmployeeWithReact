import React, { Component } from 'react'
import {connect} from 'react-redux'

class ListOfEmployee extends Component {
    
    constructor(props) {
        let empList = []
        super(props)
        //console.log(this.props.location.state.details)
        this.state = {
             employeeList: []
        }
    }
    

    updateEvent = (employee) => {
        //console.log(employee)
        this.props.history.push('/updateEmployee',{employee: employee})
    }

    deleteEvent = (ID) => {
        //console.log(ID)
        this.props.deleteEmployee(ID)
    }
    render() {
        //console.log(this.props)
        const {employeeList} = this.props
        const employees = employeeList.map(employee=> {
            return (
                <tr key={employee.ID}>
                    <td>{employee.ID}</td> 
                    <td>{employee.Name}</td>
                    <td>{employee.Salary}</td>
                    <td>{employee.Department}</td>
                    <td><button onClick= {()=> this.updateEvent(employee)}>Update</button></td>
                    <td><button onClick={()=> this.deleteEvent(employee.ID)}>Delete</button></td>
                </tr>
            )
        })
        return (
            <table border="1">
                <tbody>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
                </tr>
                    {employees}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        employeeList: state.employeeList
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteEmployee: (ID) => {dispatch({type: 'DeleteEmployee', ID: ID})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfEmployee)
