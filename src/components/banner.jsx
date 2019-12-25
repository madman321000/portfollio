import React from "react"

function Banner(props) {
  return (
    <div>
      <div className="banner-text">
        <div className="effect-text-w3ls">
          <div className="container">
            <h2>Software Engineer</h2>
            <span className="mytext1 uppercase mt-2">Hello My Name is </span>
            <span className="mytext2"> Maneesh Madala </span>
            <p className="para-style text-light mt-xl-4 mt-3">I am currently a junior studying
            Computer Engineering at UIUC. I am interested in opportunities in ai, ml,
            deep learning, big data, and software engineering.</p>
            <div className="button-w3ls">
              <a href="resume.pdf" className="btn btn-sm animated-button thar-three mr-2">Resume <i className="fas fa-download" /></a>
              <a href="/contact" className="btn btn-sm animated-button thar-four">Hire Me</a>
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
    </div>
  )
}

export default Banner;

{/*
  import React, { Component } from 'react'

  export default class Head extends Component {
    render() {
      return (

      )
    }
  }
*/}
