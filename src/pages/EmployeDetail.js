import { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"

export default function EmployeDetail(props) {
  let id = props.computedMatch?.params.id;
  const [employe, setEmploye] = useState({})
  useEffect(() => {
    let employes = localStorage.getItem("employes");
    if (employes) {
      employes = JSON.parse(employes);
      setEmploye(employes.filter((emp) => emp.id == id)[0]);
    }
  }, [])
  if (id && employe) {
    return (
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
      <br/>
      <Card
       border="secondary"
      
      style={{ width: '20rem' }}>
      <Card.Header>Employe Detail</Card.Header>
      <Card.Body>
        <Card.Title>{employe.employee_name} </Card.Title>
        <Card.Text>
         Age : {employe.employee_age} <br/>
         Salary : {employe.employee_salary}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    )
  }
  else {
    return (
      <div>No Data Found</div>
    )
  }

}
