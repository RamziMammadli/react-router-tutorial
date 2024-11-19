import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigation = useNavigate()

    const goBasket = () => {
        navigation('/basket')
    }

  return (
    <div>

        <button onClick={goBasket}>go to basket</button>

        <Link to={'/wishlist'}>Go to wish</Link>
        
    </div>
  )
}

export default Home