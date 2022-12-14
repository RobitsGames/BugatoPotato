import NavbarComp from "../navbar/NavbarComp"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Home.css'
import picture from './sky 1.png'
import background from './gamebackground.png'
export default function Home() {
  return (  
    <>
        <NavbarComp />
        <Container fluid>
            <Row className="rows background-rows-1">
                <Col className="columns" style={{textAlign: "center"}}>
                   <h1 className="game-title">Bugato Potato</h1>
                </Col>
            </Row>
            
            <Row className="rows background-rows-2">   
                <Col></Col>
                <Col xs={8} className="columns">
                    <h1 className="description-title">Protect your potato plant and destroy the bugs!</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </Col>
                <Col></Col>
            </Row>
            <Row className="rows background-rows-3">   
                <Col ></Col>
                <Col xs={8} className="columns" style={{textAlign: "center"}}>
                        <div className="ratio ratio-16x9" style={{marginBottom: "150px"}}>
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid/>
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid />
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid/>
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid/>
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid/>
                        <Image src="https://images.dog.ceo/breeds/pointer-german/n02100236_689.jpg" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "10px"}} fluid/>
                </Col>
                <Col ></Col>
            </Row>
     
        </Container>
    </>
  );
}