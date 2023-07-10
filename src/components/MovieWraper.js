import React from 'react'
import { Movie } from './Movie'

export const MovieWraper = (props) => {

    const movieList = props.props

    // const PopularMovieList = () => {
    //     return movieList.results.map((movie, i) => {
    //       return <div key={i}>
    //         <div>{movie.title}</div>
    //         <div>{movie.poster_path}</div>
    //         <div>{movie.release_date}</div>
    //         <div>{movie.vote_average}</div>
    //       </div>
    //     })
    // }
  return (
    <div className='flex flex-row gap-y-8 gap-x-4 flex-wrap justify-center'>
        {
        movieList.map((movie, i) => {
            // console.log(movie)
            return <Movie movie={movie} key={i}/>
        })}
    </div>
  )
}
