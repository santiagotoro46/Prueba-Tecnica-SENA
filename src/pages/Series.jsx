import { Footer } from "../components/Footer"
import { getSeries } from "../api/TitlesApi";
import { useState, useEffect } from "react"

export const Series = () => {


  const [series, setSeries] = useState([]);



  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const seriesData = await getSeries();
        console.log(seriesData);
        setSeries(seriesData);
      } catch (error) {
        console.error('Error while fetching series', error);
      }
    };

    fetchSeries();
  }, []);
  return (
    <>

      {
        <div className="container-fluid mt-3">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {series.map((serie, i) => (
              <div key={i} className="col">
                <div className="card h-100">
                  <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} className="card-img-top img-fluid" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">{serie.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }


      <Footer />
    </>
  )
}
