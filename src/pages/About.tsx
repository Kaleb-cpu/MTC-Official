export default function About() {
  return (
    <>
      {/* about section page */}
      <section className="About" id="about">
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">About </span>MTC
        </h3>
        <p className="teritary font-2 md:text-xl m-auto text-lg md:w-3/5 mb-5">
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

      <section>
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

      <section>
      <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">Mission Vision Values </span>
        </h3>

        <div className="md:flex md:justify-evenly">

          {/* Mission statement */}
          <div className="md:w-2/5 ">
        <h3 className="teritary font-2 md:text-3xl text-2xl text-center md:ml-0 ml-5 mb-5 mt-11"> Mission Statement 
        </h3>
        <p className="teritary font-2 md:text-xl text-left text-lg m-auto md:m-0 mb-5">
        MTC is a steward of the community, MTC enhances and maintains physical amenities while actively promoting collaborative participation amongst residents in an inclusive environment.
        </p>
</div>
        {/* Vision statement */}
<div className="md:w-1/5 ">
        <h3 className="teritary font-2 md:text-3xl text-2xl text-center ml-5 mb-5 mt-11"> Vision Statement 
        </h3>
        <p className="teritary font-2 md:text-xl text-left text-lg m-auto md:m-0 mb-5">
        To be Calgary's finest community where people live, work and play.
        </p>
</div>
<div className="md:w-2/5">
        <h3 className="teritary font-2 md:text-3xl text-2xl text-center md:ml-0 ml-5 mb-5 mt-11"> Values
        </h3>
        <div className="teritary font-2 md:text-xl text-left text-lg m-auto md:m-0 mb-5">
        <li>Fiscally responsible stewardship.</li>
        <li>Promote a positive and inclusive experience.</li>
        <li>Progressively maintain a safe, healthy and sustainable environment.</li>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
