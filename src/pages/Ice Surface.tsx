import StormPond from "../../public/media/StormPond.png";

export default function IceSurface() {
  return (
    <>
      {/* main title */}
      <h1 className="teritary text-4xl font-5 mb-9 mt-10 md:text-7xl">
        Ice Surface
      </h1>

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
      <h2 className="teritary m-auto borderTop pt-5 ml-2 md:text-4xl text-2xl font-5 mt-5 mb-10">
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

        <a href="/media/documents/Storm-Pond.pdf">
          <img className="w-1/2" src={StormPond} alt="storm-pond documentary" />
        </a>
      </div>
    </>
  );
}
