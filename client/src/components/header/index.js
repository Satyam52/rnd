import React from 'react'
import iitb from './iitb.png'
import cfilt from './cfilt.png'

const Header = () => {
  return (
    <div>  <div class="navbar navbar-expand-lg navbar material-navbar">
    <div class="container-fluid">
      <img src={iitb} width="60" height="60" class="me-4" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h3 className='font_shadows_into_light'>Query Intent detection and Slot filling</h3>
      {/* <div class="collapse navbar-collapse mt-2" id="navbarNav">
        <ul class="navbar-nav ms-md-auto gap-2">
          <li class="nav-item active">
            <a class="nav-link" href="index.html"><i class="fa-solid fa-house me-2"></i>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html"><i class="fa-regular fa-lightbulb me-2"></i>Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="education.html"><i class="fa-solid fa-graduation-cap me-2"></i>Education</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="hobbies.html"><i class="fa-solid fa-guitar me-2"></i>Hobbies</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="feedback.html"><i class="fa-solid fa-comments me-2"></i>Feedback</a>
          </li>
        </ul>
      </div> */}
        <img src={cfilt} width="60" height="60" class="me-4" />    
    </div>
  </div></div>
  )
}

export default Header