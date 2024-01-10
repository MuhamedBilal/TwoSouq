import React from 'react'
import '../styles/Categories.css'
import icons from '../assets/icons.js'

function Categories() {
  return (
    <div className='categories'>

    <div className='heading'>الفقات</div>

    <div className='grid-container'>
        {icons.map((item, index) => (
          <button key={index} className='grid-item'>
            <img src={item.image} alt={item.description} className='category-image' />
            <div className='category-description'>{item.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories