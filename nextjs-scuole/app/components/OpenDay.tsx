import React, {useEffect, useState} from 'react'
import axios from 'axios';

interface OpenDayData{
    date: string;
    school: string;
    title: string;
    description: string;
}

const OpenDay: React.FC = () => {
    const [openDayData, setOpenDayData] = useState<OpenDayData[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:1337/api/opendays/${id}?populate=*', {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
            }
          });
          setOpenDayData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Open Days</h1>
        {openDayData.map((day, index) => (
          <div key={index}>
            <h2>{day.title}</h2>
            <p>Date: {day.date}</p>
            <p>School: {day.school}</p>
            <p>Description: {day.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default OpenDay;