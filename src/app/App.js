import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NavigationBar from "./containers/NavigationBar";
import BodyTable from "./containers/BodyTable";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <BodyTable />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
