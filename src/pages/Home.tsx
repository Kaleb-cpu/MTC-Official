// import css files
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css files/home.css'

// import images
// import Garage_Sale from "../../public/media/updates/Garage_Sale.png";
import Good_Food_Box from "../../public/media/updates/Good_Food_Box.png";
import Good_Food_Box_Image from "../../public/media/updates/Good_Food_Box_Image.png";
import Summer_Camps from "../../public/media/updates/Summer_Camps.png";
import Volunteer from "../../public/media/updates/Volunteer.png";
import Coyote from "../../public/media/updates/Coyote.png";
import Rentals from "../../public/media/updates/Rentals.png";



import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
    <section>
      <Hero />
    </section>
    <section className="breakpoint-1">

    </section>
      <section className="under-fold">
      <div>
      <Carousel className="carousel-parent">
        <Carousel.Item className="carousel-item" interval={4000}>
          <img className="d-block" src={Good_Food_Box} alt="First slide" />
          <Carousel.Caption>
            <h3>Good Food Program</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={4000}>
          <img
            className="d-block"
            src={Good_Food_Box_Image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Good Food</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={4000}>
          <img className="d-block" src={Summer_Camps} alt="Third slide" />
          <Carousel.Caption>
            <h3>Summer Camp</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={4000}>
          <img className="d-block" src={Volunteer} alt="Third slide" />
          <Carousel.Caption>
            <h3>Volunteer with us</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      {/* Side cards */}
      <div className="cards">
        {/* first card */}
      <Card className="card-parent" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Coyote} />
      <Card.Body className="card-body">
        <Card.Title>Coyote Sightings</Card.Title>
        <Card.Text>
        There have been reports of coyote sightings in the area. Friendly reminder to educate yourself on wildlife awareness
        </Card.Text>
        <Button className="button"><a href="https://www.calgary.ca/parks/wildlife/urban-coyotes.html">Learn More</a></Button>
      </Card.Body>
    </Card>

    {/* second card */}
    <Card className="card-parent" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Rentals} />
      <Card.Body className="card-body">
        <Card.Title>Rentals</Card.Title>
        <Card.Text>
          You can now rent some of our facilities.
        </Card.Text>
        <Button className="button"><a href="/rentals">Rentals</a></Button>
      </Card.Body>
    </Card>

    {/* third card
    <Card className="card-parent" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Garage_Sale} />
      <Card.Body>
        <Card.Title>Garage Sale</Card.Title>
        <Card.Text>
          Advertise your Garage Sale
        </Card.Text>
        <Button variant="primary"><a href="">Garage sale</a></Button>
      </Card.Body>
    </Card> */}
      </div>
      </section>
    </>
  );
}
