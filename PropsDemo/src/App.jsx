import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  let laptop={
    Name:"laptop",
    Content:"This is a stylish laptop",
    url:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  };
  let mobile={
    Name:"mobile",
    Content:"This is a mobile",
    url:"https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=600"
  }

  return (
    <>
    <div className=' flex  space-x-3'>
        <ProductCard  product={laptop} />
        <ProductCard  product={mobile}/>
        <ProductCard  />
    </div>
       
    </>
  )
}

export default App
