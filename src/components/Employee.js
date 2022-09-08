import React,{useState} from "react";


const EmployeeInfo = [
    { id: 100,
      name: 'Hitesh', 
      email: 'hdfdfdkfdfdd@gmail.com',
      phone: '233-333-4433'
    },
    { id: 101,
        name: 'Super', 
        email: 'hkddfdk@gmail.com',
        phone: '233-333-4433'
    },
    { id: 102,
        name: 'Simple', 
        email: 'eewrek@gmail.com',
        phone: '233-333-4433'
    },
    {   id: 103,
        name: 'Raman', 
        email: 'esdffdsdsfsd@gmail.com',
        phone: '233-333-4433'
      },
]


const Employee = () =>{
    const [employee, setEmployee] = useState(EmployeeInfo);
    const [employeeData, setEmployeeData] = useState({});

    const [showForm, setShowForm] = useState(false)
    const [isEdit, setIsEdit] = useState(false);

    /**
     * ADD DELETE EMPLOYEE;
     */
    const deleteEmployee = (id) =>{
        let newArr = employee.filter( item => item.id !== id);
        setEmployee(newArr)
    }

    const addEmployee = () => {
        setEmployee((old)=> [...old, employeeData])
        setShowForm(false)
    }

    const showAddForm = () => {
        let maxIndex = Math.max( ...employee.map( item => item.id))
        setEmployeeData({ id: maxIndex+1});
        setIsEdit(false)
        setShowForm(true)
    }

    const showEditForm = (emp) => {
        setEmployeeData(emp);
        setIsEdit(true)
        setShowForm(true)
    }

    const editEmployee = () => {
        let arrr = employee.filter( (item) => item.id !== employeeData.id);
        setEmployee(  [...arrr, employeeData])
        setShowForm(false)
    }


    return (
        <>
        <button onClick={() => showAddForm()}>ADD NEW</button>
         <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Tasks</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {
        employee && !showForm && employee.map( (e)=>(
        <tr>
          <td>{e?.id}</td>
          <td>{e?.name}</td>
          <td>{e?.email}</td>
          <td>{e?.phone}</td>
          <td><button>Tasks</button></td>
          <td><button onClick={() => showEditForm(e)}>edit</button></td>
          <td><button onClick={() => deleteEmployee(e.id)}>Remove</button></td>
        </tr>
        ))
       }
{
    showForm &&

       <tr>
        <td>{employeeData?.id}</td>
       <td> <input onChange={ (e) => setEmployeeData({ ...employeeData, name: e.target.value})} value={employeeData?.name}/></td>
       <td> <input onChange={ (e) => setEmployeeData({ ...employeeData, email: e.target.value})} value={employeeData?.email}/></td>
       <td> <input onChange={ (e) => setEmployeeData({ ...employeeData, phone: e.target.value})} value={employeeData?.phone}/></td> 
       <td></td>       
       <td>
        
        {
            isEdit ? <button onClick={() => editEmployee()}>Edit</button>
            :
            <button onClick={() => addEmployee()}>Add</button>
        }
        </td>       
       </tr>

}
      </tbody>
    </table> 
        </>
    )
}

export default Employee;