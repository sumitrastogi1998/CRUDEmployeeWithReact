const initState = {
    employeeList: [
        {ID: 1, Name: 'Sumit',Salary: 10000, Department: 'Computer'},
        {ID: 2, Name: 'Aman',Salary: 20000, Department: 'Civil'},
        {ID: 3, Name: 'Raju',Salary: 30000, Department: 'Electrical'}
   ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'AddEmployee'){
        return {
            ...state,
            employeeList: [...state.employeeList, action.obj]
        }
    }
    else if(action.type === 'DeleteEmployee'){
        const newList = state.employeeList.filter(employee=> {
            return employee.ID !== action.ID
        })
        return {
            ...state,
            employeeList: newList
        }
    }
    else
    if(action.type === 'UpdateEmployee'){
        const index = state.employeeList.findIndex(emp => emp.ID === action.obj.ID)
        const employees = [...state.employeeList]
        employees[index] = action.obj 
        //console.log(employees)
        return {
            ...state,
            employeeList: employees
        }
    }
    return state;
}

export default rootReducer;