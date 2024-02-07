import { Footer } from "../components/Footer"
import placeholder from '../assets/placeholder.png'
import { Link } from "react-router-dom"


export const HomePage = () => {

  return (
    <>



      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="card text-bg-dark mb-3">
              <Link className="text-decoration-none" to={'/series'}>
                <img src={placeholder} className="img-fluid" alt="Placeholder" style={{ height: '250px' }} />
                <div className="card-body text-center text-white mb-5">
                  <p className="card-text fs-4 fw-bold">Series</p>
                </div>
              </Link>
            </div>
            <p>Popular Series</p>
          </div>
          <div className="col-3">
            <div className="card text-bg-dark mb-3">
              <Link className="text-decoration-none" to={'/movies'}>
                <img src={placeholder} className="img-fluid" alt="Placeholder" style={{ height: '250px' }} />
                <div className="card-body text-center text-white mb-5">
                  <p className="card-text fs-4 fw-bold">Movies</p>
                </div>
              </Link>
            </div>
            <p>Popular Movies</p>
          </div>
        </div>
      </div>






      <Footer />
    </>


  )
}
