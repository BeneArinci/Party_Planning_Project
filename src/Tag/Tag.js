import React from 'react';
import './Tag.css'


const Tag = ({name}) => {
  return(
    <div className = "single-tag">
      {name}
    </div>
  )
}

export default Tag