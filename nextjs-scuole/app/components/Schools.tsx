import React from 'react'

interface School {
  name: string
  description: string
  address: string
  video: string
}

interface Props {
  schools: School[]
}

const Schools: React.FC<Props> = ({ schools }) => {
  return (
    <div>
         {schools.map((school, index) => (
        <div key={index}>
          <h2>{school.name}</h2>
          <p>{school.description}</p>
          <p>{school.address}</p>
          <video controls>
            <source src={school.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  )
}

export default Schools