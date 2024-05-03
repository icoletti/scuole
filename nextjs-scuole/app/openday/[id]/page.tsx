import React from 'react'
import Link from 'next/link';


async function fetchOpenday(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }


  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/opendays/${id}?populate=*`, options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function fetchOpendays() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }

  try {
    const res = await fetch(
      //`http://127.0.0.1:1337/api/opendays`, options
      `https://stunning-chainsaw-5gqwpx7w4pp2vpwv-1337.app.github.dev/api/opendays`, options
    );
    const response = await res.json();
    return response;
  }
  catch (err) {
    console.error(err);
  }
};

const OpenDay = async () => {
  const params = await fetchOpendays();
  //const openday = await fetchOpenday(params.id);
  return (
    // <div className="max-w-3xl mx-auto p-4">
    //   <Link href="/">{"< Indietro"}</Link>
    //   <div className="mt-4">
    //     <h1 className="text-3xl font-semibold">{openday.data.attributes.School}</h1>
    //     <h2 className="text-3xl font-semibold">{openday.data.attributes.Title}</h2>
    //     <p className="text-gray-600 mt-2">{openday.data.attributes.Description}</p>
    //     <div className="mt-4 flex items-center text-gray-400">
    //       <span className="text-sm">Incontro: {" "}{new Date(openday.data.attributes.Date).toLocaleString()}</span>
    //     </div>
    //   </div>
    // </div>
    <div> {params} </div>
  );
};

export default OpenDay;