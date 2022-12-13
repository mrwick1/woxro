import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const LinkSingle = ({ name, url, type, ph }) => {
  if (type === 'nav-links') {
    return (
      <Link to={url}>{name}</Link>
    )
  }
  else if (type === 'location') {
    return <P>{name}</P>
  }
  else if (type === 'phone') {
    return <P>{name} :  <a href={`tel:${ph}`}>{ph}</a></P>
  }
}

export default LinkSingle

const P = styled.p`
  font-size: 0.9rem;
  color: #a5a5a5;
  line-height: 2.3;
  display:flex;
  gap:10px;
  a{
    cursor: pointer;
  }
`
