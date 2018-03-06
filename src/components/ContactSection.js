import React from 'react'

import { SocialMenu } from './SocialMenu'
import { socialLinks } from '../static-data'

class ContactSection extends React.Component {
  render() {
    return (
      <div className="contact" id="/#contactMe">
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-6">
              <h2 className="follow_us wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                Follow Me
              </h2>
              <ul className="socialsy wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                <SocialMenu links={socialLinks} hasTitle={true}/>
              </ul>
            </div>

            <div className="col-sm-6">
              <h2 className="follow_us">
                Contact
              </h2>
              <div className="row clearfix contact-section">
                <a
                  className="email-link"
                  href="mailto:&#106;&#097;&#122;&#109;&#097;&#116;&#116;&#117;&#111;&#102;&#102;&#105;&#099;&#105;&#097;&#108;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                >
                  <i className="fa fa-envelope" aria-hidden="true"/>Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSection
