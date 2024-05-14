import Link from 'next/link'
import React from 'react'

// Definizione del componente OpendayCard
const OpendayCard = ({openday}: any) => {
    return(
        <div className='rounded-lg shadow-md p-4 md-4 overflow-hidden border border-grey-600 cursor-pointer'>
            {/* Link alla pagina degli openday con l'id specifico */}
            <Link href={`/opendays/${openday.id}`}>
            <div className='p-2'>
                {/* Titolo della scuola */}
                <h1 className='text-xl font-extrabold mb-2'>{openday.attributes.School}</h1>
                    {/* Titolo dell'openday */}
                    <h2 className='text-xl front-semibold mb-2 overflow-ellipsis'>
                        {openday.attributes.Title}
                    </h2>
                    {/* Descrizione dell'openday */}
                    <p className='text-gray-600'>{openday.attributes.Description}</p>
                    {/* Data dell'openday formattata come stringa */}
                    <p className='text-gray-600'>{new Date(openday.attributes.Date).toLocaleString()}</p>
                </div>
            </Link>
        </div>
    )
}

export default OpendayCard;