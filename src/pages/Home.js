import React, { Component } from 'react'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'
import CarouselBox from '../components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h1 className="text-center m-4">Our team</h1>
                    <CardGroup>
                        <Card bg="warning" border="success" text="primary" >
                            <Card.Img
                                variant="top"
                                src="https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895__340.png"
                            />
                            <Card.Body>
                                <Card.Title>Разработчики</Card.Title>
                                <Card.Text>Разрабы лавировали лавировали да не вылавировали</Card.Text>
                                <Button variant="primary" >О разрабах</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234__340.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Голандский штурвал</Card.Title>
                                <Card.Text>Разрабы лавировали лавировали да не вылавировали</Card.Text>
                                <Button variant="primary" >О разрабах</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
}
