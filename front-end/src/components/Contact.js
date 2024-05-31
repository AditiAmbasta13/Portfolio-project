import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pno, setPno] = useState();
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    console.log(fname, lname, email, pno, msg);

    const handleSubmit = async (e)=> {
        e.preventDefault();

        const addUser = { fname, lname, email, pno, msg };
        console.log(addUser);
        const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addUser),
        });
        const result = await response.json();
        if (!response.ok) {
            console.log("error",result.error);
            setError(result.error);
        }
        if (response.ok) {
            console.log(result);
            setFname("");
            setLname("");
            setEmail("");
            setPno(0);
            setMsg("");
        }

    }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="get-in-touch">
          <Col size={12} md={6}>
            <img className="contact-img" src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
              <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={fname} placeholder="First Name" onChange={(e) => {
                        setFname(e.target.value)
                    }} /> 
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={lname} placeholder="Last Name" onChange={(e) => {
                        setLname(e.target.value)
                    }}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={email} placeholder="Email Address" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={pno} placeholder="Phone No." onChange={(e) => {
                        setPno(e.target.value)
                    }}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={msg} placeholder="Message" onChange={(e) => {
                          setMsg(e.target.value)
                        }}>
                      </textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact