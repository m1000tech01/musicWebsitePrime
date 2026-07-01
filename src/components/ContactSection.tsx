import { SocialMenu } from './SocialMenu'
import { socialLinks } from '../data/staticData'

export default function ContactSection() {
  return (
    <div className="contact" id="contactMe">
      <div className="container">
        <div className="row clearfix">
          <div className="col-sm-6">
            <h2
              className="follow_us wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              Follow Me
            </h2>
            <ul
              className="socialsy wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              <SocialMenu links={socialLinks} hasTitle={true} />
            </ul>
          </div>

          <div className="col-sm-6">
            <h2 className="follow_us">Contact</h2>
            <div className="row clearfix contact-section">
              <a className="email-link" href="mailto:jazmattuofficial@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
