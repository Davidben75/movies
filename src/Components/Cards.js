

const Cards = ({movie}) => {

  // const to display img
  const imgPoster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  const imgBackdrop = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`


  // function to convert to local date String
  function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  
  
  return (

   
      <article className="card-container">
        <section className="movie-info">

          <figure className="card-poster-container"> 
            <img className="card-poster" src={imgPoster} alt="poster movie"/>
            <figcaption className="poster-info">        
                <p className="movie-title">{movie.title}</p>
                <p className="movie-release-date">Sortie le : {formatDate(movie.release_date)}</p>          
            </figcaption>
          </figure>

            <span className="movie-details">
              <p > Nombre de vote : {movie.vote_count}</p>
              <p> Synopsis :{movie.overview}</p>
              <p> Note moyennne {movie.vote_average}/10</p>
            </span>
        </section>  

        <span  style={{backgroundImage : `url(${imgBackdrop})` }} className="backdrop-container">
        </span>

        </article>

  )
};

export default Cards;