import React from 'react';
import './App.css';
import RoutingDemo from './EmployeeCRUD/CrudDemo/RoutingDemo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListOfEmployee from './EmployeeCRUD/CrudDemo/ListOfEmployee'
import AddEmployee from './EmployeeCRUD/CrudDemo/AddEmployee'
import UpdateEmployee from './EmployeeCRUD/CrudDemo/UpdateEmployee'

class App extends React.Component {

  
  

  render() {
    return (
      <Router>
      <div className="App">
        <RoutingDemo/>
        <Route path="/addEmployee" component={AddEmployee} />
        <Route path="/listEmployee" component={ListOfEmployee} />
        <Route path="/updateEmployee" component={UpdateEmployee} />
      </div>
      </Router>
      
    );
  }
}
/*
import AddEmployee from './FormPropsState/AddEmployee'
import ListEmployee from './FormPropsState/ListEmployee'

class App extends React.Component {

  
  // Implementing whole FormPropsState Folder
  constructor(props) {
    super(props)
  
    this.state = {
       employees: [
         {ID: 1, Name: "Sumit", Salary: 10000, Department: 'Computer'},
         {ID: 2, Name: "Aman", Salary: 2000, Department: 'Electrical'},
         {ID: 3, Name: "Raju", Salary: 3000, Department: 'Civil'},
       ]
    }
  }
  
  addEmployee = (employee) => {
    const employees = [...this.state.employees, employee];
    this.setState({
      employees: employees
    })
  }

  deleteEmployee = (ID) => {
    const employees = this.state.employees.filter(employee=>{
      return employee.ID !== ID
    })
    this.setState({
      employees: employees
    })
  }
  render() {
    return (
      <div className="App">
        <AddEmployee addEmployee={this.addEmployee}/>
        <ListEmployee employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
      </div>
      
    );
  }
  
}
*/

export default App;
