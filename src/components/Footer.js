import React from 'react'

// Import data
// import { footerMenu } from '../static-data'
import { SocialMenu } from './SocialMenu'
import { footerMenu } from '../static-data'

const Footer = () => (
    <footer>
      <div className="footer_panel wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="copyright">Copyright 2018 <span>Jaz Mattu</span> | All Rights Reserved</p>
            </div>

            <div className="col-sm-6">
              <SocialMenu className="wow fadeInDown footer_icons" links={footerMenu}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer