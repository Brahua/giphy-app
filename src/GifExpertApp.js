import React, { useState } from 'react'
import GifGrid from './components/GifGrid.jsx';
import AddCategory from './components/AddCategory.jsx';

export default function GifExpertApp({defaultCategories = ['DBZ']}) {

    const [categories, setCategories] = useState(defaultCategories);
  
    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-color-jumbotron">
          <div className="container">
            <h1 className="display-4">GiphyApp</h1>
            <p className="lead">This is a React app</p>
          </div>
        </div>
        <div className="container">
          <AddCategory setCategories={setCategories}/>
          <hr/>   
          { categories.map(category => <GifGrid key={category} category={category}/>) }
        </div> 
      </>
    )
  
}
