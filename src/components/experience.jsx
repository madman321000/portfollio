import React from "react"

function Experience(props) {
  return (
    <div className="gallery py-5" id="projects">
      <div className="container py-xl-5 py-lg-3">
        {/* heading title */}
        <div className="mb-lg-5 mb-4 text-center">
          <h3 className="title-wthree text-light mb-2">Work Experience</h3>
          <p className="sub-tittle-2">This is a list of the places that I have worked along
          with a short description of what I did.</p>
        </div>
        {/* //heading title */}
        <div className="gallery-grids">
          <section>
            <ul id="da-thumbs" className="da-thumbs">
              <li>
                <a href="images/amazon.jpg" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/amazon.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">Amazon SDE Intern (May 2020 - Aug 2020)</h5>
                    <p>I will be interning for Amazon this upcoming summer as an SDE intern.
                    I haven't started yet.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                </a>
              </li>
              <li>
                <a href="images/EarthSense.jpg" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/EarthSense.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">EarthSense Field Tech and Robotics Intern (May 2019 - Aug 2019)</h5>
                    <p>At EarthSense I was on the analytics team and did a few different projects.
                    I automated the validation of data collections so that only useful ones will be used by the
                    analytics pipeline. I also worked on python package to turn data collections into objects to
                    be used in different analytics scripts. I also assisted in deploying models for different
                    analytics for crops such as corn, wheat, soybeans, and etc...</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="images/EarthSense.jpg" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/EarthSense.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">Robot Assembler (March 2019 - May 2019)</h5>
                    <p>In this role I configured and tested various components such as
                    radars, lidars, routers, and more for the TerraSentia robots. Additionally
                    I assembled TerraSentia robots and aided in testing and troubleshooting
                    to ensure the robots worked properly.</p>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </a>
              </li>
              <li>
                <a href="images/engrit.jpg" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/engrit.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">UIUC Engineering IT Student Consultant (Aug 2017 - March 2019)</h5>
                    <p>As an IT consultant I managed engineering av systems, workstations, and printers.
                    I handled 10+ tickets a day with issues involving school technology. I had a 100% satisfaction rate.
                    Additionally I collaborated with IT professionals to complete projects such as reimaging 30 laptops
                    for a professor to use.</p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Experience;
