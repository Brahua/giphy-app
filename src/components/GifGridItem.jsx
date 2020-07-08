import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem