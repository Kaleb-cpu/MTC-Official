import MyCarousel from '../components/rentalPhotosCarousel'

import RentalGuide from '../../public/media/rental-photos/RentalGuide.png'
import RentalGuideBook from "../../public/media/Rental_Guide_Book.pdf"
import RentalPolicies from "../../public/media/Rental_Policies_Revised.pdf"
import FacilityImage from "../../public/media/FacilityImage.png"
  
  export default function Rentals() {

    
    return (
    <div className="rentalsContainer">



       <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mt-8">
          <span className="span-title">Rentals</span> & <span className="span-title">Facility</span>
        </h3>
        

      <section className='rentalContent'>
<section id='rentals' className='mb-10'>
      
      <MyCarousel/>

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
        </section>
    </div>
  );
}
