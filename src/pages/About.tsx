import foip from "../../public/media/documents/MTC_Privacy_Policy.pdf";
import Form from "../components/Form";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutScrollbar">
        <div className="contentList">
          <h2 className="hidden md:block">Content</h2>
          <h1 className="about">
            <a href="#about">
              <i
                className="fa fa-circle hidden md:block"
                aria-hidden="true"
              ></i>
              <span className="md:text-xl text-base pl-3 ">About MTC</span>
            </a>
          </h1>
          <h1 className="amenities">
            <a href="#amenities">
              <i
                className="fa fa-circle hidden md:block"
                aria-hidden="true"
              ></i>
              <span className="md:text-xl text-base pl-3 ">Amenities</span>
            </a>
          </h1>
          <h1 className="MVV">
            <a href="#MVV">
              <i
                className="fa fa-circle hidden md:block"
                aria-hidden="true"
              ></i>
              <span className="md:text-xl text-base pl-3 ">MVV</span>
            </a>
          </h1>
          <h1 className="foip">
            <a href="#foip">
              <i
                className="fa fa-circle hidden md:block"
                aria-hidden="true"
              ></i>
              <span className="md:text-xl text-base pl-3 ">FOIP</span>
            </a>
          </h1>
          <h1 className="contact-us">
            <a href="#contact-us">
              <i
                className="fa fa-circle hidden md:block"
                aria-hidden="true"
              ></i>
              <span className="md:text-xl text-base pl-3 ">Contact US</span>
            </a>
          </h1>
        </div>
      </div>
      {/* about section page */}
      <section className="About md:w-3/5 md:m-auto" id="about">
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">About </span>MTC
        </h3>
        <p className="teritary font-2 md:text-xl text-lg mb-5">
          McKenzie Towne Council owns, maintains, and manages common amenities
          and features in the community. It is a private, not-for-profit
          Residents' Association that sets the desired course for the McKenzie
          Towne Hall and other shared amenities, to ensure their long-term
          stability. This assures that McKenzie Towne residents will continue to
          enjoy superior and unique amenities. This 1,300-acre community was
          developed in 1995 with a different concept from other communities in
          mind. Most of the amenities owned by the Council were strategically
          placed throughout the community by the community developer.{" "}
        </p>
      </section>

      {/* amenties */}

      <section className="Amenties md:w-4/5 md:m-auto" id="amenities">
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">Amenities: </span>
        </h3>
        <p className="teritary font-2 md:text-xl text-lg md:w-3/5 m-auto mb-5">
          McKenzie Towne Council is responsible for the upkeep and repair of
          various amenities located within the boundaries of McKenzie Towne.
          Many of these amenities are owned by MTC but are located in city
          parks. This includes the area south of 130th Avenue (not including the
          pathway between the 130th Avenue businesses and McKenzie Towne) to
          Highway #22x and Deerfoot to 52nd Street. The major amenities are the
          Towne Hall; Prestwick Common (structures, splash park, fountain/fire
          pit); Elgin Hill (the “Ruins”) and toboggan run; Inverness Square
          (gazebo); the Clock Tower and Clock; Promenade Park (picnic shelter,
          flags, lighting) and the hockey rink location. There are numerous
          other amenities located in smaller parks as well.{" "}
        </p>
      </section>

      {/* Mission Value and Vision */}

      <section className="mission-value-vission" id="MVV">
        <h3 className="title teritary font-5 md:text-4xl text-2xl md:w-max md:m-auto ml-5 mb-5 pt-11">
          <span className="span-title">Mission Vision Values </span>
        </h3>

        <div className="MVV">
          {/* Mission statement */}
          <div className="mission md:ml-32">
            <h3 className="teritary font-2 md:text-3xl text-2xl md:text-center text-left mb-5 mt-11">
              {" "}
              Mission Statement
            </h3>
            <p className="teritary font-2 md:text-xl text-left text-lg mb-5">
              MTC is a steward of the community, MTC enhances and maintains
              physical amenities while actively promoting collaborative
              participation amongst residents in an inclusive environment.
            </p>
          </div>
          {/* Vision statement */}
          <div className="vision">
            <h3 className="teritary font-2 md:text-3xl text-2xl md:text-center text-left mb-5 mt-11">
              {" "}
              Vision Statement
            </h3>
            <p className="teritary font-2 md:text-xl text-left text-lg mb-5">
              To be Calgary's finest community where people live, work and play.
            </p>
          </div>
          <div className="values">
            <h3 className="teritary font-2 md:text-3xl text-2xl md:text-center text-left mb-5 mt-11">
              {" "}
              Values
            </h3>
            <div className="teritary font-2 md:text-xl text-left text-lg mb-5">
              <li>Fiscally responsible stewardship.</li>
              <li>Promote a positive and inclusive experience.</li>
              <li>
                Progressively maintain a safe, healthy and sustainable
                environment.
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="FOIP md:w-max md:m-auto" id="foip">
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center mb-5 mt-11">
          <span className="span-title">Privacy/FOIP </span>
        </h3>

        <h3 className="teritary font-2 md:text-3xl text-2xl text-center mb-5 mt-11">
          {" "}
          Click{" "}
          <a href={foip}>
            {" "}
            <span className="hover:text-white text-blue-500">here</span>{" "}
          </a>{" "}
          for the officially written FOIP documentation
        </h3>
      </section>

      <section className="contact-us" id="contact-us">
        <h3 className="title teritary font-5 md:text-4xl text-2xl ml-5 mb-10 pt-11">
          <span className="span-title">Contact US </span>
        </h3>

        <div className="flex md:justify-around md:flex-row flex-col md:ml-32">
          <div className="teritary font-2 md:text-lg md:text-left text-base mb-5 md:mt-11">
            <p>McKenzie Towne Council</p>
            <p>40 McKenzie Towne Blvd. S.E.</p>
            <p>Calgary, AB T2Z 4X5</p>
            <p>Phone: (403) 781-6612</p>
            <p>Fax: (403) 930-1551</p>

            <h3 className="font-bold mt-10 mb-3 fourth">
              Customer Service Hours:
            </h3>
            <li>Monday to Thursday - 9:00 AM to 9:00 PM</li>
            <li>Friday - 9:00 AM to 8:00 PM</li>
            <li>Saturday - 4:00 PM to 9:00 PM (or as disclosed)</li>
            <li>Sunday - 9:00 AM to 4:30 PM (Temporary)</li>
            <li>Closed on all Statutory Holidays</li>

            <h3 className="font-bold mt-10 mb-3 fourth">Admin Staff Hours:</h3>
            <p>Monday to Friday - 8:00 AM to 4:00 PM</p>
          </div>
          <div className="FormMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20123.208210909914!2d-113.98200864308807!3d50.91629823780583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537177bd9271a861%3A0xebe84e3db73d7cc4!2sMcKenzie%20Towne%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1686606867274!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Form />

        <h3 className="teritary font-2 md:text-xl text-base text-center mb-5 mt-11 italic">
          McKenzie Towne Community Association (MTCA) is not located at McKenzie
          Towne Council. If you require more information, email MTCA directly at
          feedback@mckenzietownecommunityassociation.ca or visit our webpage at
          www.mckenzietownecommunityassociation.ca
        </h3>
      </section>
    </div>
  );
}
