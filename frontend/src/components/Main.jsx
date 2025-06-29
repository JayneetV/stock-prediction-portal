import React from 'react'
import Button from './Button'

const Main = () => {
  return (
   <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti commodi quasi quis. Sunt, et id libero nam voluptates quam! Distinctio possimus architecto accusantium aspernatur alias cupiditate laborum quia delectus iste explicabo veritatis repudiandae vitae numquam repellat, facilis porro nostrum?</p>
            <Button text="Login" class="btn-outline-info"/>
        </div>
    </div>
   </>
  )
}

export default Main
