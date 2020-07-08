import React, { useState } from 'react'
import PropTypes from "prop-types";


const AddCategory = ( {setCategories} ) => {
  
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setCategories( (categories) => [inputValue, ...categories]);
    }


    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange}
          className="form-control"
          placeholder="Ingrese una palabra para buscar los gifs relacionados"
        ></input>
      </form>
    )
  
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

// AddCategory.defaultProps 

export default AddCategory