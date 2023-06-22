import React from 'react'
import Pizza from '../images/peproni.png'

const Products = () => {
  return (
    <div className='container mx-auto py-24'>
      <h1 className='text-lg font-bold my-8'>Pizzzaaas</h1>

      <div className="grid grid-cols-5 my-8 gap-24">
        <div>
          <img src={Pizza} alt="" />
          <h2>Pizza</h2>
          <span>small</span>
          <div>
            <span>₹50</span>
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products