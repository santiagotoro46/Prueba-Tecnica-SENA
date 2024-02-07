import { NavLink, Outlet, useLocation } from "react-router-dom"
import { getTitle } from "../api/getTitle";



export const Header = () => {
  const location = useLocation();


 


  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand  ps-5">
                <h1>Demo Streaming</h1>
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to="#" className="nav-link" aria-current="page">
                    Log In
                  </NavLink>
                </div>
                <button className="btn btn-dark ">
                  <NavLink to="#" className="nav-link">
                    Start Your Free Trial
                  </NavLink>
                </button>
              </div>
            </div>
          </nav>

          <div className="bg-dark text-light p-2" >
            <h3 className="ps-5">{getTitle(location.pathname)}</h3>
          </div>
        </div>
      </div>

      <Outlet />
    </>

  )
}
