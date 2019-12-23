import React from "react"

function About(props) {
  return (
    <div className="container py-xl-5 py-lg-3">
      <div className="row py-xl-3 py-lg-3">
        <div className="col-lg-6 feature fea-slider">
          <img src="images/about.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 feature pl-lg-5 mt-lg-0 mt-5">
          <h3 className="title-wthree text-dark mb-4">
            <span className="mb-2">Some Info</span>About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut.</p>
          <p className="mt-3">elit sedc labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation
            ullamco. Sed semper
            leo metus, a lacinia eros semper at. </p>
          <div className="button-w3ls">
            <a href="resume.pdf" className="btn btn-sm animated-button thar-four">Resume <i className="fas fa-download" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

{/*
  <div className="container py-xl-5 py-lg-3">
  <div className="row py-xl-3 py-lg-3">
    <div className="col-lg-6 feature fea-slider" data-aos="fade-right">
      <img src="images/about.jpg" className="img-fluid" alt="" />
    </div>
    <div className="col-lg-6 feature pl-lg-5 mt-lg-0 mt-5" data-aos="fade-left">
      <h3 className="title-wthree text-dark mb-4">
        <span className="mb-2">Some Info</span>About Me</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor incididunt ut.</p>
      <p className="mt-3">elit sedc labore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation
        ullamco. Sed semper
        leo metus, a lacinia eros semper at. </p>
      <div className="button-w3ls">
        <a href="#" className="btn btn-sm animated-button thar-four">Download <i className="fas fa-download" /></a>
      </div>
    </div>
  </div>
</div>
*/}
