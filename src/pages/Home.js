import {Figure,Image} from "react-bootstrap"
export default function Home(props) {
   
  return (
    <div className="bgWrapper">

      <Image src="bg.jpg" className="bgImage" />
      <h1 className="bgText">Employee Management</h1>
      {/* <Figure>
        <Figure.Image
          alt="Employe Management"
          src="bg.jpg"
          style={{width:'100%', height:'100vh'}}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure> */}
     
    </div>
  )
}
