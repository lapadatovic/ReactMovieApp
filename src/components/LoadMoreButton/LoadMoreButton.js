import React from 'react'
import './loadMoreButton.css'
export default function LoadMoreButton({handleClick}) {
  return (
    <div className='button-container'>
        <button 
            className='load-more-button'
            onClick={handleClick}
        >
            Load <span>More</span>
        </button>
    </div>
  )
}
