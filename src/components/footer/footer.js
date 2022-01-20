import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-unstyled">
            <li className="float-end">
              <a href="#top">Back to top</a>
            </li>
            <li>
              <a href="https://github.com/VPolazau/notes-VPolazau">GitHub</a>
            </li>
          </ul>
          <p className="name">
            Made by <ins>Victor Polozov</ins>
          </p>
          <p> January, 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
