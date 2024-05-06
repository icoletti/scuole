import Link from 'next/link'
import React from 'react'

/*function formatData(data){
    return data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate()
}*/

const OpendayCard = ({openday}: any) => {
    return(
        <div className='rounded-lg shadow-md p-4 md-4 overflow-hidden border border-grey-600 cursor-pointer'>
            <Link href={`/opendays/${openday.id}`}>
            <div className='p-2'>
                <h1 className='text-xl font-extrabold mb-2'>{openday.attributes.School}</h1>
                    <h2 className='text-xl front-semibold mb-2 overflow-ellipsis'>
                        {openday.attributes.Title}
                    </h2>
                    <p className='text-gray-600'>{openday.attributes.Description}</p>
                    <p className='text-gray-600'>{new Date(openday.attributes.Date).toLocaleString()}</p>
                </div>
            </Link>
        </div>
    )
}

export default OpendayCard;