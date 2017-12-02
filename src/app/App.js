import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './App.css';
import NavigationBar from "./containers/NavigationBar";

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Container fluid={true}>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
