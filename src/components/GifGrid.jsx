import React from 'react'
import GifGridItem  from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGif';

const GifGrid = ({category}) => {
  
  const {data:gifs, loading} = useFetchGif(category);


  return (
    <div className="row mx-3 mx-sm-0">
      <h3 className="title-section w-100">{category}</h3>
      { loading && 
        <div className="spinner-border text-info my-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      <div className="card-columns">  
        { gifs.map(gif => <GifGridItem key={gif.id} {...gif}></GifGridItem> )}
      </div> 
    </div>
  )
}

export default GifGrid