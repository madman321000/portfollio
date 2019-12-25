import React from "react"

function Contact(props) {
  return (
    <div>
      {/* contact */}
      <section className="banner-bottom-w3layouts pt-5">
        <div className="container-fluid pt-xl-5 pt-lg-3">
          {/* heading title */}
          <div className="mb-lg-5 mb-4 text-center">
            <h3 className="title-wthree text-white mb-2">
              <span className="mb-2">Get In Touch</span>Contact Me</h3>
            <p className="sub-tittle-2 text-white">If you have an opportunity please email or call me</p>
          </div>
          {/* //heading title */}
          {/* contact address */}
          <div className="container">
            <div className="address row py-sm-5 pt-sm-0 pt-3 pb-sm-0 pb-5 mb-sm-5">
              <div className="col-lg-2 address-grid">
              </div>
              <div className="col-lg-5 address-grid my-lg-0 my-4">
                <div className="row address-info">
                  <div className="col-3 address-left text-lg-center text-right">
                    <i className="far fa-envelope text-center" />
                  </div>
                  <div className="col-9 address-right text-left">
                    <h6 className="ad-info text-uppercase text-white mb-2">Email</h6>
                    <p className="text-white">Email :
                      <a className="text-white" href="mailto:example@email.com"> maneesh.madala@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 address-grid">
                <div className="row address-info">
                  <div className="col-3 address-left text-lg-center text-right">
                    <i className="fas fa-mobile-alt text-center" />
                  </div>
                  <div className="col-9 address-right text-white text-left">
                    <h6 className="ad-info text-white text-uppercase mb-2">Phone</h6>
                    <p className="text-white">609-638-6993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //contact */}
      {/* footer */}
    </div>
  )
}

export default Contact;
