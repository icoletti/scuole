"use client"
import React, {useEffect, useState} from "react";
import OpendayCard from "./OpendayCard";

// Funzione asincrona per recuperare gli open day
async function fetchOpendays() {
    console.log('ok')
    const options = {
        headers: {
            'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`,
        },
    }
    console.log(options);

    try {
        const res = await fetch(
            `https://stunning-chainsaw-5gqwpx7w4pp2vpwv-1337.app.github.dev/api/opendays`, options
        );
        console.log('res', res)

        const response = await res.json();
        return response;
    }
    catch (err) {
        console.error(err);
    }
};

// Componente Openday
const Openday = async () => {
    const opendays = await fetchOpendays();
    console.log('od', opendays);
    
    if (!opendays) {
        return <div>Loading...</div>;
    }

    // Mappa gli open day filtrati
    const filtredOpenday = await opendays.data.map((openday: any) => {

        return (
            <div className="openday">
                <div key={openday.id} className="elemento">
                    <OpendayCard openday={openday} />
                </div>
            </div>
        );
    });
    return (
        <div>
            {filtredOpenday}
        </div>
    );
}

export default Openday;
