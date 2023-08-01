import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Server: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('caleb-tests') // Replace this with your actual API endpoint
      .then((response) => setData(response.data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <div>{data}</div>;
};

export default Server;
