import React from 'react'

export const Movie = ({movie}) => {
    // console.log(movie)
    const baseImgUrl = process.env.REACT_APP_BASEIMAGEURL
    // console.log(baseImgUrl + movie.poster_path)
  return (
    <div className='bg-rose-600 w-56 flex flex-col items-center justify-center gap-1'>
        <h1 className='font-bold mt-2'>{movie.title}</h1>
        <img className='py-2' alt='imagemovie' src={`${baseImgUrl}${movie.poster_path}`}></img>
        <p className='italic'>Release: {movie.release_date}</p>
        <p className='underline font-semibold'>{movie.vote_average}</p>
    </div>
  )
}
