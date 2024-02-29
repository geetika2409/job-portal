import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='page notfound'>
      <div className='content'>
        <img src = "./notfound1.jpg" />
        <Link to = {"/"}>Return to Home Page</Link>
      </div>
    </section>
  )
}

export default NotFound