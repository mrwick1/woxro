import React from 'react'
import { Link } from 'react-router-dom'

const SingleNav = ({ name, url, ext , setActive , active , setIsOpen}) => {
  if (ext) {
    return <a href={url} target='blank_'>{name}</a>
  }
  else {
    return (
      <li>
        <Link  onClick={()=>{
          setActive && setActive(url);
          setIsOpen && setIsOpen(false);
        }}
        style={{
          color:active === url && '#000'
        }}
        to={url}>{name}</Link>
      </li>
    )
  }
}

export default SingleNav