import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import dropImg from '../asseds/drop.jpeg'
import nodropImg from '../asseds/nodrop.jpg'


export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={dropImg}
              alt="drop"
            />
            <Carousel.Caption>
              <h3>Мысль Дня</h3>
              <p>Иосиф Сталин — выиграл две войны, поднял Страну из руин, сделал ее сверхдержавой, спасибо мир от фашизма — он кто? </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={nodropImg}
              alt="drop"
            />
            <Carousel.Caption>
              <h3>Мысль Вечера</h3>
              <p>Иосиф Сталин — выиграл две войны, поднял Страну из руин, сделал ее сверхдержавой, спасибо мир от фашизма — он кто? </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
