import React from 'react'

export default function Note(props) {
  return (
    <div><br />
      {props.data.title}
      <br />
      {props.data.note}
      <br />
    </div>
  )
}
