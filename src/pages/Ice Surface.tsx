import StormPond from '../../public/media/StormPond.png'

export default function IceSurface() {
  return (
    <div>
      {/* main title */}
      <h1 className="teritary display-5 font-1 mb-9 mt-10">Ice Surface</h1>

      {/* prestwick common */}
      <div className='teritary m-auto text-2xl font-2 bg-Primary w-max p-3 rounded-4'>
      <h3 className='mb-2'><span className='fourth'>Prestwick Common</span> - 15113 Prestwick Blvd SE</h3>
      <p className=' italic '>No hockey sticks or pucks are allowed on Prestwick Common.</p>

</div>
      {/* hockey ring */}
      <h3>Hockey Rink - McKenzie Towne Gate & McKenzie Towne Link SE</h3>
      {/* flood ice information */}
      <h2>When does MTC flood ice surfaces?</h2>
      <p>
        The skating rinks will be flooded when operational capacity allows it
        and when temperatures are below minus 10 degrees Celsius at the time of
        flooding. Ice will be made on Prestwick Common and the hockey rink
        surfaces by our Maintenance Department. *Please remember that this is
        all dependent on the weather! Inverness and Prestwick Storm Ponds - DO
        NOT SKATE on these surfaces. "Water levels and flows change rapidly,
        making skating or other activities extremely dangerous and strictly
        prohibited." - The City of Calgary, Water Services.
      </p>
      
      <a href="/media/documents/Storm-Pond.pdf"><img src={StormPond} alt="storm-pond documentary" /></a>

    </div>
  );
}
