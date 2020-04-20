import React, { Component } from "react";
import "./App.css";
import { Card, Image } from "react-bootstrap";
import Me from "./static/Me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          style={{
            width: "27em",
            borderRadius: 10,
            maxWidth: "100%",
          }}
        >
          <Card.Body>
            <Card.Title>
              <h1>TENZIN TAMDIN</h1>
            </Card.Title>
            <Image
              src={Me}
              style={{ width: 130, height: 130, marginBottom: 25 }}
              roundedCircle
            />
            <Card.Subtitle className="mb-2 text-muted">
              <h4>Front-end Developer</h4>
            </Card.Subtitle>
            <Card.Text>
              <h5>
                Hi! I am on journey to start my career as Front-end Developer
                and soon jump on moblie app development too ...
              </h5>
            </Card.Text>
            <div style={{ marginTop: 25 }}>
              <Card.Link href="https://www.linkedin.com/in/tenzin-tamdin-587a21146/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </Card.Link>
              <Card.Link href="mailto:tgtamdin3@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" spin />
              </Card.Link>
              <Card.Link href="https://github.com/tentamdin">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Card.Link>
              <Card.Link href="https://www.instagram.com/ttamdin5/">
                <FontAwesomeIcon icon={faInstagram} size="2x" spin />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
