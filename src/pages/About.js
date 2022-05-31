//import { Tab } from 'bootstrap'
import React, { Component } from 'react'
import { Nav, NavDropdown, TabContainer, Container, Row, Col, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Designer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="https://cdn.pixabay.com/photo/2022/05/06/17/15/cartoon-giraffe-7178753_960_720.jpg" />
                  <p>Наши великолепные художники обеспечат фотореалистичными изображениями</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://cdn.pixabay.com/photo/2017/04/02/06/21/monkey-2195107__340.jpg" />
                  <p>Наша команда состоит из лучших програмистов, которых мы смогли найти</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">

                  <p>Наши программы спрограмированы</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">

                  <p>У нас точно есть фреймворки</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">

                  <p>За бумажными библиотеками - будущее</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    )
  }
}
