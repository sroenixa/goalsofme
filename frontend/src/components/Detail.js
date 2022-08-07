import React from 'react'

const Detail = (props) => {
  return (
    <div>{props.match.params.id}</div>
  )
}

export default Detail