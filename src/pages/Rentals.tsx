import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../../public/media/rental-photos/01.jpg'
import second from '../../public/media/rental-photos/02.jpg'
import third from '../../public/media/rental-photos/03.jpg'

import RentalGuide from '../../public/media/rental-photos/RentalGuide.png'
import RentalGuideBook from "../../public/media/Rental_Guide_Book.pdf"
import RentalPolicies from "../../public/media/Rental_Policies_Revised.pdf"
import FacilityImage from "../../public/media/FacilityImage.png"
  
  export default function Rentals() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex: SetStateAction<number>) => {
      setIndex(selectedIndex);
    };
    return (
    <div className="rentalsContainer">



       <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-8">
          <span className="span-title">Rentals</span> & <span className="span-title">Facility</span>
        </h3>
      <div className="flex justify-center teritary gap-5 -mt-5">
       <a href="#rentals"> <div className="browse">
          <h3>Rentals</h3>
        </div></a>
        <a href="#facilities"><div className="browse">
          <h3>Facility Information</h3>
        </div></a>
       <a href="#gazebo"> <div className="browse">
          <h3>Gazebo</h3> 
        </div></a>
      </div>
      
      {/* Rental photo images */}
<section id='rentals' className='mb-10'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='w-1/2 m-auto mt-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          <div>

    <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-8">
          <span className="span-title">Rental</span> Guide Book
        </h3>

        <div className='w-max m-auto'><a href={RentalGuideBook}><img src={RentalGuide} alt="mckenzie town rental guide book" /></a></div>
          </div>
          <div>
          <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-8">
          <span className="span-title">Rental</span> Policies
        </h3>
        <h2 className='font-2 md:text-4xl text-2xl text-center teritary'>click <a className='fourth hover:font-semibold' href={RentalPolicies}>Here</a> to view our Rental Policies</h2>
        </div>
        </section>

<div className='border-top w-11/12 m-auto'></div>
        <section id='facilities'>
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-10">
          <span className="span-title">Facility</span> Information
        </h3>
        <p className='teritary font-2 w-4/5 md:text-xl text-base m-auto text-left pb-5'>Located at 40 McKenzie Towne Boulevard, at the traffic circle, McKenzie Towne Hall is a central amenity that offers a versatile space for recreation activities, meetings, events, and rental space. The 16,000 sq. ft. building boasts a 125-seating capacity Banquet Hall (divisible into 2 or 3 separate rooms), perfect for weddings, anniversaries, birthday parties, and much more. It also contains a gymnasium, excellent for sports activities and large events. The administrative offices and maintenance department of the McKenzie Towne Council are also housed in this building</p>
        
        <img className='m-auto' src={FacilityImage} alt="Facility image" />
        <br />
        </section>
        <div className='border-top w-11/12 m-auto'></div>

        <section id='gazebo'>
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-10">
          <span className="span-title">Gazebo</span> @ Inverness Square Park
        </h3>
        <u className='teritary'> <h2 className='teritary text-left ml-8 font-5 md:text-2xl text-xl mb-4 '>The following is required to book the Gazebo at the Inverness Square Park for a wedding or a special function:</h2></u>
        <ol className='teritary text-left ml-8 md:text-lg text-base flex flex-col gap-3 w-3/5'>
          <li>1. For inquiries and availability email parksbookings@calgary.ca . To submit a booking request for the Gazebo visit Book a park, pathway or greenspace (calgary.ca) and fill out the greenspace application.</li>
          <li>2. Once the date and the permit are confirmed, contact McKenzie Towne Council at facilityco@mtcouncil.com to inform us of the booking, to reserve your date.</li>
        </ol>
        </section>
    </div>
  );
}
