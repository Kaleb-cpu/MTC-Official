import sobeys from "../../public/media/businessListing/sobeys.jpeg"
import studentWorks from "../../public/media/businessListing/studentWorks.png"

interface Business {
  id: number;
  name: string;
  description: string;
  address: string;
  imageUrl: string;
}

const businesses: Business[] = [
  {
    id: 1,
    name: 'Example Business 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    address: '123 Main St, City, Country',
    imageUrl: sobeys,
  },
  {
    id: 2,
    name: 'Example Business 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    address: '456 Elm St, Town, Country',
    imageUrl: studentWorks,
  },
  // Add more businesses as needed
];

const Business: React.FC = () => {
  return (
    // <div>
    //   <h1>Business Listings</h1>
    //   <BusinessListing businesses={businesses} />
    // </div>

<div className="container py-5">

{/* <!-- For demo purpose --> */}
<div className="row text-center text-white mb-5">
  <div className="col-lg-7 mx-auto">
    <h1 className="display-4">McKenzie Towne Business</h1>
    
  </div>
</div>
{/* <!-- End --> */}

<div className="row">
  <div className="col-lg-8 mx-auto">

    {/* <!-- List group--> */}
    <ul className="fourth bg-Primary rounded-md">

      {/* <!-- list group item--> */}
      <li className="list-group-item">
        <div>
  {businesses.map((business) => (
    <div className="media align-items-lg-center flex-column flex-lg-row p-3" key={business.id}>
      <div className="media-body order-2 order-lg-1">
        <h5 className="mt-0 font-weight-bold mb-2">{business.name}</h5>
        <p className="font-italic mb-0 small">{business.description}</p>
        <div className="d-flex align-items-center justify-content-between mt-1">
          <h6 className="font-weight-bold my-2">{business.address}</h6>
          <ul className="list-inline small">
                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
              </ul>
        </div>
      </div>
      <img src={business.imageUrl} alt={`${business.name} Image`} width="200" className="ml-lg-5 order-1 order-lg-2" />
    </div>
  ))}
</div>

        {/* <!-- Custom content--> */}
        {/* <!-- End --> */}
      </li>
      {/* <!-- End --> */}

      {/* <!-- list group item--> */}
      
   
    </ul>
    {/* <!-- End --> */}
  </div>
</div>
</div>


    
  );
};

export default Business;