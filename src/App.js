import React, { useState,useEffect } from 'react';
import Movies from './components/Movies';
import './styles/App.css'
const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
   
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const App = () => {
  const [movies,setMovies]=useState([])
  const [searchVal,setSearchVal]=useState('')

  const getMovies=(API)=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.results)
    })
   }

 useEffect(()=>{
 getMovies(API_URL)
 },[]);



 const handleOnsubmit=(e)=>{
  if(searchVal){
    e.preventDefault();
    getMovies(SEARCH_API+searchVal)
    setSearchVal('')
  }

 }
 const handleOnchange=(e)=>{
  setSearchVal(e.target.value)
 }

  return (
    <div className='container'>
      <header className='header'>
        <div className='header-title'> <a href='/'><h1>Movie App</h1></a></div>
        <div className='header-search'> 
        <form onSubmit={handleOnsubmit}>
        <input className='search' placeholder='search...' value={searchVal} onChange={handleOnchange}></input>
        </form>
       </div>
       
       
      </header>
      <div className='movie-container'>
      {movies.map((movie)=>( <Movies key={movie.id} {...movie} />)
       
       )}
      </div>

    </div>
  );
}

export default App;
