import React from 'react'
import { searchMovie } from './api'

export const Search = ({setMovieList}) => {

    // const [title, setTitle] = useState("")

    const search = async (q) => {
        if (q.length > 3) {
            console.log(q)
            const query = await searchMovie(q)
            setMovieList(query.data.results)
        }
    }

    return (
    <div className=''>
        <input className='p-2 focus:outline-none bg-slate-500 focus:bg-white focus:ring-2'
            placeholder='cari film kesayangan...'
            onChange={(e) => search(e.target.value)}/>
    </div>
    )
}
