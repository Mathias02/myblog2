import React from 'react'

const Details = ({data}) => {
  return (
    <div>
      {data.map((item) => {
        return(
          <div>{item.attributes.name}</div>
        )
      })}
    </div>
  )
}

export default Details