import React from "react"

function Projects(props) {
  return (
    <div className="gallery py-5" id="projects">
      <div className="container py-xl-5 py-lg-3">
        {/* heading title */}
        <div className="mb-lg-5 mb-4 text-center">
          <h3 className="title-wthree text-light mb-2">Technical Projests</h3>
          <p className="sub-tittle-2">This is a list of technical projects that I have made. This list contains both personal and also big school projects.
          You can click on the picture to take you to the link to the github repo.</p>
        </div>
        {/* //heading title */}
        <div className="gallery-grids">
          <section>
            <ul id="da-thumbs" className="da-thumbs">
              <li>
                <a href="https://github.com/madman321000/Web-Scraping" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/web_scraping.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">Web Scraping (July 2018 - Aug 2018)</h5>
                    <p>In this project I used Python to get the career averages for all
                    NBA and NFL players for the past 30 years and do some regressions
                    and a survival analysis on the data.</p>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/madman321000/ECE385_finalproj" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/fine_proj.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">Pacman (Nov 2019 - Dec 2019)</h5>
                    <p>In this project a partner and I used SystemVerilog and C to create a Pacman game on an FPGA.
                    I used C to create a USB interface so that an external keyboard could be plugged into the FPGA
                    and used to play the game. Then all the Pacman and ghost logic and movement are implemented with
                    SystemVerilog.</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/madman321000/Cloud9_Saas" className="b-link-stripe b-animate-go  thickbox">
                  <img src="images/devmatch.jpg" alt="" className="img-fluid" />
                  <div>
                    <h5 className="text-light">Devmatch (May 2018 - July 2018)</h5>
                    <p>This is a website based of a tutorial from Upskill. It is
                     a Ruby on Rails website that is for a fictional startup called
                     DevMatch, which allows Developers, Entrepreneurs, and Investors
                     to meet. The site has 2 options to register, a free account
                     or a pro account for $10 a month.</p>
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

export default Projects;
