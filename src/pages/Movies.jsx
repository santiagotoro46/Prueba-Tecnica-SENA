import { Footer } from "../components/Footer"
import { getMovies } from "../api/TitlesApi";
import { useState, useEffect } from "react";

export const Movies = () => {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        console.log(moviesData);
        setMovies(moviesData);
      } catch (error) {
        console.error('Error getting movies', error)
      }
    };

    fetchMovies();
  }, []);


  return (
    <>

      <div className="container-fluid mt-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movies.map((movie, i) => (
            <div key={i} className="col">
              <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top img-fluid" />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">{movie.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <Footer />
    </>
  )
}
