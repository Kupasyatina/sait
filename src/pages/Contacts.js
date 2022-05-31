import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "600px" }}>
        <h1 className="text-center" >Напиши нам!</h1>
        <Form>
          <Form.Group controlID="formBasicEmail">
            <Form.Label>Адрес почты</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
            <Form.Text>
              Мы скорее всего не отправим ваш емыло куда-то
            </Form.Text>
          </Form.Group>

          <Form.Group controlID="formBasicPassword">
            <Form.Label>Введите просьбу</Form.Label>
            <Form.Control as="textarea" rows="6" />
          </Form.Group>

          <Form.Group controlID="formBasicCheckBox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" >Submit</Button>

        </Form>
      </Container>
    )
  }
}
