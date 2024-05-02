"use client";
import React, { useContext } from "react";
import OpendayCard from "./OpendayCard";

const Openday = ({ openday }: any) => {
    const filtredOpenday = openday.data.filter((openday: any) => {
        return (openday.attributes.Title);
        return(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtredOpenday?.map((openday:any)=>(
                    <div key={openday.id}>
                        <OpendayCard openday={openday} />
                    </div>
                ))}
            </div>
        )
    });
}