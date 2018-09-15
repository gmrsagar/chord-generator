import React from 'react'

const Chords = props => (
  <div>
    { props.progression && <p>{props.progression.join(" ")}</p>}
  </div>
  )

export default Chords