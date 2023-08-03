import React from 'react';
import { Carousel } from 'react-bootstrap';

import o1 from '../../public/media/rental-photos/01.jpg'
import o2 from '../../public/media/rental-photos/02.jpg'
import o3 from '../../public/media/rental-photos/03.jpg'
import o4 from '../../public/media/rental-photos/03.jpg'
import o5 from '../../public/media/rental-photos/03.jpg'
import o6 from '../../public/media/rental-photos/03.jpg'
import o7 from '../../public/media/rental-photos/03.jpg'
import o8 from '../../public/media/rental-photos/03.jpg'
import o9 from '../../public/media/rental-photos/03.jpg'
import o10 from '../../public/media/rental-photos/03.jpg'
import o11 from '../../public/media/rental-photos/03.jpg'
import o12 from '../../public/media/rental-photos/03.jpg'
import o13 from '../../public/media/rental-photos/03.jpg'
import o14 from '../../public/media/rental-photos/03.jpg'
import o15 from '../../public/media/rental-photos/03.jpg'
import o16 from '../../public/media/rental-photos/03.jpg'
import o17 from '../../public/media/rental-photos/03.jpg'
import o18 from '../../public/media/rental-photos/03.jpg'

const carouselData = [
    { id: 1,
        title: 'Item 1',
        description: 'This is item 1 description.',
        imageUrl: o1,
      },
      {
        id: 2,
        title: 'Item 2',
        description: 'This is item 2 description.',
        imageUrl: o2,
      },
      {
        id: 3,
        title: 'Item 3',
        description: 'This is item 3 description.',
        imageUrl: o3,
      },
      {
        id: 4,
        title: 'Item 4',
        description: 'This is item 4 description.',
        imageUrl: o4,
      },
      {
        id: 5,
        title: 'Item 5',
        description: 'This is item 5 description.',
        imageUrl: o5,
      },
      {
        id: 6,
        title: 'Item 6',
        description: 'This is item 6 description.',
        imageUrl: o6,
      },
      {
        id: 7,
        title: 'Item 7',
        description: 'This is item 7 description.',
        imageUrl: o7,
      },
      {
        id: 8,
        title: 'Item 8',
        description: 'This is item 8 description.',
        imageUrl: o8,
      },
      {
        id: 9,
        title: 'Item 9',
        description: 'This is item 9 description.',
        imageUrl: o9,
      },
      {
        id: 10,
        title: 'Item 10',
        description: 'This is item 10 description.',
        imageUrl: o10,
      },
      {
        id: 11,
        title: 'Item 11',
        description: 'This is item 11 description.',
        imageUrl: o11,
      },
      {
        id: 12,
        title: 'Item 12',
        description: 'This is item 12 description.',
        imageUrl: o12,
      },
      {
        id: 13,
        title: 'Item 13',
        description: 'This is item 13 description.',
        imageUrl: o13,
      },
      {
        id: 14,
        title: 'Item 14',
        description: 'This is item 14 description.',
        imageUrl: o14,
      },
      {
        id: 15,
        title: 'Item 15',
        description: 'This is item 15 description.',
        imageUrl: o15,
      },
      {
        id: 16,
        title: 'Item 16',
        description: 'This is item 16 description.',
        imageUrl: o16,
      },
      {
        id: 17,
        title: 'Item 17',
        description: 'This is item 17 description.',
        imageUrl: o17,
      },
      {
        id: 18,
        title: 'Item 18',
        description: 'This is item 18 description.',
        imageUrl: o18,
      },
      
  // Add more carousel items as needed
];

const MyCarousel = () => {
    return (
      <Carousel>
        {carouselData.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={`Slide ${item.id}`}
            />

            {/* you can uncomment if you want to describe the photos in the carousel */}
            {/* <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default MyCarousel;
