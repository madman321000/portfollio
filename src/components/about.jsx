import React from "react"

function About(props) {
  return (
    <div className="container py-xl-5 py-lg-3">
      <div className="row py-xl-3 py-lg-3">
        <div className="col-lg-6 feature fea-slider">
          <img src="images/Maneesh_Madala.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 feature pl-lg-5 mt-lg-0 mt-5">
          <h3 className="title-wthree text-light mb-4">
            <span className="mb-2">Some Info</span>About Me</h3>
          <p className="text-light">I am currently a Junior studying Computer Engineering at the University of Illinois.
          I am interested in opportunities in software engineering, ai, ml, big data, and deep learning.
          I have eperience with ML, Deep learning, and Analytics from my internship with EarthSense. I also have some
          experience with analytics from personal projects that I have done. I also have software engineering
          eperience from my internship with Amazon.</p>
          <p className="mt-3 text-light">If you are interested in learning more about my expereince you can click on the button to see my resume.
          If you have a job opportunity that you think my skills would fit you can click the hire me button to contact me.</p>
          <div className="button-w3ls">
            <a href="resume.pdf" className="btn btn-sm animated-button thar-three mr-2">Resume <i className="fas fa-download" /></a>
            <a href="contact.html" className="btn btn-sm animated-button thar-four">Hire Me</a>
          </div>
          {/* copyright */}
          <br/>
          <br/>
           <p className="col-lg-8 copy-right-grids mt-lg-1">© 2018 Online Resume. All Rights Reserved | Design by
             <a href="https://w3layouts.com/" target="_blank">W3layouts</a>
           </p>
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
