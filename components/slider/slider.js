import { Carousel } from "react-bootstrap";
import classes from './slider.module.scss';

export const Slider = () => {
  return (
    <Carousel className={classes.slider}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.naukrinama.com/stressbuster/wp-content/uploads/2019/11/BEAUTIFUL-VILLAGES-800-x-400-Arlington-Row.-Credit-Bob-Radlinski-800x400.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.designorlando.com/wp-content/uploads/2013/04/landscape-3-800x40011.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://biothekecologic.com/wp-content/uploads/2019/12/shutterstock_691184395-1-800x400-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};