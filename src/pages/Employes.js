import { useEffect,useState } from "react"
import { Row, Col, Container,Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAllEmployee } from '../actions/employee'
import Table from "../components/Table";
export default function Employes() {
  const dispatch = useDispatch();
  const employeData = useSelector(state => state.employeeData);
  const [search, setSearch] = useState("");
  const [employTbl,setEmployTbl] = useState([]);

  useEffect(() => {
    dispatch(getAllEmployee());
  }, [])

  useEffect(() => {
    setEmployTbl(employeData.employes)
    localStorage.setItem("employes",JSON.stringify(employeData.employes))
  }, [employeData])


  const onInputChange =(e)=>{
    setSearch(e.target.value)
  }
  useEffect(() => {
        if(search){
          let reg = new RegExp(search,'i');          
          let data = employTbl.filter(emp=>reg.test(emp.employee_name))
          setEmployTbl(data);       
        }
        else{
          setEmployTbl(employeData.employes)
        }
  }, [search]);
  return (
    <Container>
      <br />
      <Row>
        <Col md={{ span: 3, offset: 6 }}>
        <Form>
          <Form.Group controlId="search">
            <Form.Label>Search By Name</Form.Label>
            <Form.Control  type="search" value={search} onChange={onInputChange}/>
          </Form.Group>
        </Form>
        </Col>
      </Row>
      <br />
      <Row>

        <Col md={{ span: 6, offset: 3 }}>
          {employeData.isLoading && <p>Loading....</p>}
          <Table data={employTbl} />
        </Col>
      </Row>
    </Container>

  )
}
