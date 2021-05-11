import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom';
export default function EmpTable({data}) {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th> Name</th>      
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? data.map((emp,index) =>{
        return(
          <tr key={emp.id}>
          <td>{emp.id}</td>
          <td> <Link to={`/employe/${emp.id}`}>{emp.employee_name}</Link> </td>          
          <td>{emp.employee_age}</td>
        </tr>
        )       
      }) :(<tr><td colSpan="3">No Record Found</td></tr>)
    }
     
    
    </tbody>
  </Table>
  )
}
