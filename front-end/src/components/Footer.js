import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* <MailchimpForm /> */}
          <a className="logo" href="">&lt;aditiambasta&gt;</a>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <ul className="contact-icons">
                <li className='social-icon'>
                    <a href="#">
                        <LinkedInIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid rgba(255, 255, 255, 0.5)", padding:"5px", borderRadius:"50%",  color: "white"}}/>
                    </a>
                </li>
                <li className='social-icon'>    
                    <a href="#">
                        <FacebookIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid rgba(255, 255, 255, 0.5)", padding:"5px", borderRadius:"50%", color: "white"}}/>
                    </a>
                </li>
                <li className='social-icon'>    
                    <a href="#">
                        <InstagramIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid rgba(255, 255, 255, 0.5)", padding:"5px", borderRadius:"50%", color: "white"}}/>
                    </a>
                </li>
            </ul>
            <ul className="contact-info">
                <li>Contact No.: +91-9834561179</li>
                <li>Email: <a href="aditiambasta2004@gmail.com">aditiambasta2004@gmail.com</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer