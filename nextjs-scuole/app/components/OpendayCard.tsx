import Link from 'next/link'
import React from 'react'

const OpendayCard = ({openday}: any) => {
    const truncateOpendayDescription = openday.attributes.Description.length > 10 ?
    openday.attributes.Description.substring(0, 10) + "..."
    : openday.attributes.Description;

    return(
        <div className='rounded-lg shadow-md p-4 md-4 overflow-hidden border border-grey-600 cursor-pointer'>
            <Link href={`/openday/${openday.id}`}>
            <div className='p-2'>
                    <h2 className='text-xl front-semibold mb-2 overflow-ellipsis'>
                        {openday.attributes.Title}
                    </h2>
                    <p className='text-gray-600'>{truncateOpendayDescription}</p>
                </div>
            </Link>
        </div>
    )
}

export default OpendayCard;