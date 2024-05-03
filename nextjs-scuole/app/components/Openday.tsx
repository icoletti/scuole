"use client"
import React, {useEffect, useState} from "react";
import OpendayCard from "./OpendayCard";


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

const Openday = async () => {
    console.log("qasddasda");
    const opendays = await fetchOpendays();
    console.log('od', opendays);
    console.log("qasddasda");


    const filtredOpenday = await opendays.data.map((openday: any) => {

        return (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div key={openday.id}>
                        <OpendayCard openday={openday} />
                    </div>
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

