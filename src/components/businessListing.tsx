import React from 'react';

interface Business {
  id: number;
  name: string;
  description: string;
  address: string;
  imageUrl: string;
}

interface BusinessListingProps {
  businesses: Business[];
}

const generateBusinessListings = (businesses: Business[]) => {
  return businesses.map((business) => (
    <div key={business.id} className="business-card">
      <img src={business.imageUrl} alt={`${business.name} Image`} />
      <h2>{business.name}</h2>
      <p>{business.description}</p>
      <p>{business.address}</p>
    </div>
  ));
};

const BusinessListing: React.FC<BusinessListingProps> = ({ businesses }) => {
  const businessListings = generateBusinessListings(businesses);

  return <div className="business-listing">{businessListings}</div>;
  
  

};

// export default function BusinessList () {
//   return {
      
//   }
// }

export default BusinessListing;
