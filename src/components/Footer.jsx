import { Copyrigth } from "./elements/Copyrigth";
import { Fcolumn1 } from "./elements/Fcolumn1";
import { Fcolumn2 } from "./elements/Fcolumn2";
import { Fcolumn3 } from "./elements/Fcolumn3";
import { Fcolumn4 } from "./elements/Fcolumn4";
import { Fcolumn5 } from "./elements/Fcolumn5";
import { Fcolumn6 } from "./elements/Fcolumn6";
import { Facebook } from "./elements/social/Facebook";
import { Twitter } from "./elements/social/twitter";
import { Instagram } from "./elements/social/instagram";
import { AppStore } from "./elements/store/AppStore";
import { PlayStore } from "./elements/store/PlayStore";
import { WindowsStore } from "./elements/store/WindowsStore";


export const Footer = () => {
  return (
    <>
      {/* <footer className="container-fluid ">
        <div className="d-flex flex-wrap justify-content-between ">
          <div className="col-md-9 mb-4">
            <div className="d-flex flex-wrap justify-content-between ">
              <div className="col-md-2">
                <Fcolumn1 />
              </div>
              <div className="col-md-2">
                <Fcolumn2 />
              </div>
              <div className="col-md-2">
                <Fcolumn3 />
              </div>
              <div className="col-md-2 ">
                <Fcolumn4 />
              </div>
              <div className="col-md-2">
                <Fcolumn5 />
              </div>
              <div className="col-md-2">
                <Fcolumn6 />
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <Copyrigth />
            </div>
          </div>
          
          <div className="d-flex flex-wrap justify-content-between col-md-4">
            <div className="col-md-4 mb-4">
              <Facebook />
            </div>
            <div className="col-md-4 mb-4">
              <Twitter />
            </div>
            <div className="col-md-4 mb-4">
              <Instagram />
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-between col-md-5">
            <div className="col-md-4">
              <AppStore />
            </div>
            <div className="col-md-4">
              <PlayStore />
            </div>
            <div className="col-md-4">
              <WindowsStore />
            </div>
          </div>
        </div>
      </footer> */}




      {/* <footer className="container-fluid  bg-dark text-light p-4">
        <div className="d-flex flex-wrap justify-content-between ">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="d-flex flex-row mb-3">
                <div className="p-1">
                  <Fcolumn1 />
                </div>
                <div className="p-1">
                  <Fcolumn2 />
                </div>
                <div className="p-1">
                  <Fcolumn3 />
                </div>
                <div className="p-1">
                  <Fcolumn4 />
                </div>
                <div className="p-1">
                  <Fcolumn5 />
                </div>
                <div className="p-1">
                  <Fcolumn6 />
                </div>
              </div>
              <div className="row">
                <div className="d-flex">
                  <Copyrigth />
                </div>
              </div>

            </div>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-start ">
                <div className="p-2">
                  <Facebook />
                </div>
                <div className="p-2">
                  <Twitter />
                </div>
                <div className="p-2">
                  <Instagram />
                </div>
              </div>
            </div>

          </div>

        </div>

      </footer> */}

      <footer className="container-fluid bg-dark text-light p-4">
        <div className="d-flex flex-wrap justify-content-between">
          {/* ... */}
          <div className="row">
            <div className="col-12 mb-4">
              <div className="d-flex flex-row mb-3">
                <div className="p-1">
                  <Fcolumn1 />
                </div>
                <div className="p-1">
                  <Fcolumn2 />
                </div>
                <div className="p-1">
                  <Fcolumn3 />
                </div>
                <div className="p-1">
                  <Fcolumn4 />
                </div>
                <div className="p-1">
                  <Fcolumn5 />
                </div>
                <div className="p-1">
                  <Fcolumn6 />
                </div>
              </div>
            </div>
            <Copyrigth />
            <div className="row">
              <div className="d-flex flex-wrap justify-content-start">
                <div className="p-2">
                  <Facebook />
                </div>
                <div className="p-2">
                  <Twitter />
                </div>
                <div className="p-2">
                  <Instagram />
                </div>
              </div>
            </div>
            <div className="ml-auto d-flex flex-wrap justify-content-end ">
              <div className="p-2">
                <AppStore />
              </div>
              <div className="p-2">
                <PlayStore />
              </div>
              <div className="p-2">
                <WindowsStore />
              </div>
            </div>
          </div>
          
        </div>
      </footer>






    </>
  )
}
