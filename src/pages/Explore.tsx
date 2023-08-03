import Carousel from 'react-bootstrap/Carousel';

import northSide from "../../public/media/northSide.png"
import southSide from "../../public/media/southSide.png"
import StormPond from "../../public/media/StormPond.png";

export default function Explore() {
  return (
    <>
      {/* main title */}
      <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
        <span className="span-title">Ice </span>
        Surface
      </h3>

      {/* prestwick common */}
      <div className="teritary m-auto md:text-2xl text-xl font-2 bg-Primary w-fit p-3 rounded-4">
        <h3 className="mb-2">
          <span className="fourth">Prestwick Common</span> - 15113 Prestwick
          Blvd SE
        </h3>
        <p className=" italic ">
          No hockey sticks or pucks are allowed on Prestwick Common.
        </p>
        <h3 className="teritary m-auto md:text-xl text-lg font-2 mt-3 mb-3">
          Hockey Rink - McKenzie Towne Gate & McKenzie Towne Link SE
        </h3>
      </div>
      <h3 className="teritary m-auto md:text-xl text-lg font-2 mt-3 mb-3">
        Stay tuned for updates
      </h3>
      <h2 className="teritary m-auto pt-5 ml-2 md:text-4xl text-2xl font-5 mt-5 mb-10">
        When does MTC flood ice surfaces?
      </h2>
      <div className="md:flex items-center justify-center">
        {/* hockey ring */}
        {/* flood ice information */}
        <p className=" teritary ml-2 text-xl text-left md:w-1/2 font-2 mt-5 mb-3">
          The skating rinks will be flooded when operational capacity allows it
          and when temperatures are below minus 10 degrees Celsius at the time
          of flooding. Ice will be made on Prestwick Common and the hockey rink
          surfaces by our Maintenance Department. *Please remember that this is
          all dependent on the weather! Inverness and Prestwick Storm Ponds - DO
          NOT SKATE on these surfaces. "Water levels and flows change rapidly,
          making skating or other activities extremely dangerous and strictly
          prohibited." - The City of Calgary, Water Services.
        </p>
      </div>

      <div className="borderTop mt-10 mb-10"></div>
      <div className='mb-7'>
      <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
        <span className="span-title">Ponds  </span>
        & <span className="span-title">Pathways  </span>
      </h3>
        <div className="md:flex items-center justify-center">
          {/* hockey ring */}
          {/* flood ice information */}
          <p className=" teritary ml-2 text-xl text-left md:w-1/2 font-2 mt-5 mb-3">
            McKenzie Towne has two Storm Water retention ponds (Prestwick and
            Inverness), which were put in place for community drainage purposes
            only. There is no access to this area, and no swimming, boating,
            skating, etc. is allowed. <a className="hover:text-black fourth" href="https://www.calgary.ca/water/stormwater.html"> Go here for FAQ on storm drainage systems
            (City of Calgary).</a> Walkers can leisurely stroll, walk or run along
            the pathways around the ponds year-round. Snow and ice are removed
            in the winter for your enjoyment.
          </p>

          <a href="/media/documents/Storm-Pond.pdf ">
            <img
              className="w-1/2"
              src={StormPond}
              alt="storm-pond documentary"
            />
          </a>
        </div>
      </div>

<div className='w-1/2 m-auto'>
      <Carousel className="carousel-parent">
            <Carousel.Item className="carousel-item" interval={4000}>
              <img className="d-block" src={northSide} alt="First slide" />
              <Carousel.Caption>
                <h3>Prestwick Storm Pond & Pathway:</h3>
                <p>Located on the north side of McKenzie Towne Blvd, the pathway is .93 miles or 1.5 kilometers around.</p>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item" interval={4000}>
              <img
                className="d-block"
                src={southSide}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Inverness Storm Pond & Pathway:</h3>
                <p>Located south of Promenade Way, the pathway is 1.47 miles or 2.37 kilometers around.</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
</div>

<div className='borderTop mt-10 mb-10'></div>

<div>
         <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
        <span className="span-title">Emergency </span>
        Services
      </h3>
      <div>
      <h3 className="teritary font-5 md:text-3xl text-xl text-center ml-5 mb-5 mt-11">
        <span className="span-title">Fire Station #30 and EMS – 6 McKenzie Towne Gate SE </span>
      </h3>
      <h3 className="teritary font-5 md:text-2xl text-lg text-center ml-5 mb-5 mt-11">
        <span className="span-title">District #8 Police – 450 Midpark Way SE </span>
      </h3>
      <ul className="text-center teritary text-lg ml-5">
        <li>Ph: 403-428-6800</li>
        <li>Ph: Emergency 911</li>
        <li>Ph: Non-Emergency 403-266-1234</li>
      </ul>
      </div>

      <div className="ContactLine">
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Health Link: </span>811
      </h3>
      

     
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Kids Help Phone:  </span>1-866-332-2322 24Hrs
      </h3>
     

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Addiction Services Helpline: </span>1-866-332-2322 24Hrs
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Bullying Helpline: </span>1-888-456-2323 24Hrs  www.bullyfreealberta.ca
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Child Abuse Helpline: </span>1-800-387-5437 24Hrs
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Family Violence Info Line: </span>310-1818 24Hrs "Call if you (or someone you know) are going through family violence or abuse."
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Distress Cente: </span>403-266-4357 24Hrs "We do not define crisis.  We do not judge. Anyone can call us day or night."
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Access Mental Health: </span>1-844-943-1500  "Provides information, consultation and referral to individuals residing in Calgary who have addiction and/or mental health concerns."
      </h3>
      

      
      <h3 className="teritary font-5 md:text-2xl text-lg text-left ml-5 mb-5 mt-11">
        <span className="span-title">Poison & Drug Information Services: </span>1-800-332-1414 24Hrs
      </h3>
      </div>







      </div>
    </>
  );
}
