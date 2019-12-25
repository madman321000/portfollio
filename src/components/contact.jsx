import React from "react"

function Contact(props) {
  return (
    <div>
      {/* contact */}
      <section className="banner-bottom-w3layouts pt-5">
        <div className="container-fluid pt-xl-5 pt-lg-3">
          {/* heading title */}
          <div className="mb-lg-5 mb-4 text-center">
            <h3 className="title-wthree text-dark mb-2">
              <span className="mb-2">Get In Touch</span>Contact Me</h3>
            <p className="sub-tittle-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                    <h6 className="ad-info text-uppercase mb-2">Email</h6>
                    <p>Email :
                      <a href="mailto:example@email.com"> mail@example.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 address-grid">
                <div className="row address-info">
                  <div className="col-3 address-left text-lg-center text-right">
                    <i className="fas fa-mobile-alt text-center" />
                  </div>
                  <div className="col-9 address-right text-left">
                    <h6 className="ad-info text-uppercase mb-2">Phone</h6>
                    <p>+1 234 567 8901</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //contact address */}
          <div className="row" data-aos-easing="linear" data-aos-duration={1500}>
            {/* map */}
            <div className="col-lg-3 map">
            </div>
            {/* //map */}
            {/* contact form */}
            <div className="col-lg-6 main_grid_contact">
              <div className="form">
                <h4 className="mb-4 text-left">Send us a message</h4>
                <form action="#" method="post">
                  <div className="form-group">
                    <label className="my-2">Name</label>
                    <input className="form-control" type="text" name="Name" placeholder required />
                  </div>
                  <div className="form-group">
                    <label className="my-2">Email</label>
                    <input className="form-control" type="email" name="Email" placeholder required />
                  </div>
                  <div className="form-group">
                    <label className="my-2">Message</label>
                    <textarea id="textarea" name="message" placeholder defaultValue={""} />
                  </div>
                  <div className="input-group1">
                    <input className="form-control" type="submit" defaultValue="Submit" />
                  </div>
                </form>
              </div>
            </div>
            {/* //contact form */}
          </div>
        </div>
      </section>
      {/* //contact */}
      {/* footer */}
      <footer>
        <div className="w3ls-footer-grids py-4">
          <div className="container py-xl-5 py-lg-3">
            <div className="row">
              <div className="col-lg-5 w3l-footer-logo">
                {/* footer logo */}
                <a className="navbar-brand" href="index.html"><i className="fas fa-copy" /> Online Resume</a>
                {/* //footer logo */}
              </div>
              {/* button */}
              <div className="col-lg-5 w3l-footer text-lg-right text-center mt-3">
                <ul className="list-unstyled footer-nav-wthree">
                  <li className="mr-4">
                    <a href="index.html" className="active">Home</a>
                  </li>
                  <li className="mr-4">
                    <a className="scroll" href="#about">About Me</a>
                  </li>
                  <li className="mr-4">
                    <a className="scroll" href="#services">My Services</a>
                  </li>
                  <li>
                    <a className=" scroll" href="#projects">Projects</a>
                  </li>
                </ul>
              </div>
              {/* //button */}
              <div className="col-lg-2 mt-lg-0 mt-3">
                <div className="button-w3ls mt-0 text-lg-right text-center">
                  <a href="contact.html" className="btn btn-sm animated-button thar-four">Contact Me</a>
                </div>
              </div>
            </div>
            <div className="row border-top mt-4 pt-lg-4 pt-3 text-lg-left text-center">
              {/* copyright */}
              <p className="col-lg-8 copy-right-grids mt-lg-1">© 2018 Online Resume. All Rights Reserved | Design by
                <a href="https://w3layouts.com/" target="_blank">W3layouts</a>
              </p>
              {/* //copyright */}
              {/* social icons */}
              <div className="col-lg-4 w3social-icons text-lg-right text-center mt-lg-0 mt-3">
                <ul>
                  <li>
                    <a href="#" className="rounded-circle">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="px-2">
                    <a href="#" className="rounded-circle">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rounded-circle">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="pl-2">
                    <a href="#" className="rounded-circle">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* //social icons */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact;
