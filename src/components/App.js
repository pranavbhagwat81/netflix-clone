import React from 'react'
import Row from './Row'
import requests from '../requests'

function App() {
    return (
       <div className='app'>
           <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/>
           <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
           <Row title='Comedy Movies' fetchURL={requests.fetchRomanceMovies}/>
       </div>
    )
}

export default App