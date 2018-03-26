import React from 'react'

// Import components
import { SocialMenu } from './SocialMenu'
import { footerMenu } from '../static-data'

// Import assets
import logo from '../assets/images/logo2.png'
import { Link } from 'react-router-dom'
import arrow from '../assets/images/arrow.png'
// import banner from '../assets/images/banner.png'

const SmallHero = ({ banner_image}) => (
    <div className="page_banner" style={{ backgroundImage: "url(" + banner_image + ")"}}>
        <div className="container">
        <div className="page_banner_text_container">
            <h2 className="page_banner_text wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms" />
            <div className="inner_arrow">
            <img src={arrow} />
            </div>
        </div>
        </div>
    </div>
)

const Hero = ({ title }) => (
    <div className="banner" id="home">
      <div className="container">
        <div className="banner_text_box">
          <h2 className="banner_text wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
            {title}
          </h2>
          <div className="banner_icons_panel">
            <ul className="banner_icons m_hide wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
              <SocialMenu links={footerMenu}/>
            </ul>
            <ul className="footer_icons d_hide footer_icons_h">
              <SocialMenu links={footerMenu} className="d_hide footer_icons_h"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
)

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showBlackBackground: false,
      showMobileMenu: false,
    }

    this.checkPositionY = this.checkPositionY.bind(this)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }

  checkPositionY() {
    const topPosition = window.pageYOffset;
    const { showBlackBackground } = this.state;
    if(showBlackBackground && topPosition < 30) {
      this.setState({
        showBlackBackground: false
      })
    }else if((!showBlackBackground) && topPosition > 30){
      this.setState({
        showBlackBackground: true
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      this.checkPositionY()
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => {})
  }

  render() {
    const { image, title, banner_image } = this.props
    const { showBlackBackground, showMobileMenu } = this.state
    const fixedTheme = showBlackBackground ? 'fixed-theme' : ''
    return (
      <div id="/">
        <header className="header_bg" style={{ backgroundImage: `url(${image})`}}>
          <div className="container">
            <div className="top-panel-in">
              <div className="row clearfix">
                <nav id="header" className={`navbar navbar-fixed-top normal ${fixedTheme}`}>
                  <div id="header-container" className={`container navbar-container ${fixedTheme}`}>
                    <div className="navbar-header">
                      <button onClick={this.toggleMobileMenu} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                      <Link id="brand" className="navbar-brand" to="/">
                        <img className="img-responsive" src={logo} alt="Logo" />
                      </Link>
                    </div>
                    <div id="navbar" className={`collapse navbar-collapse ${showMobileMenu ? 'in' : ''}`}>
                      <ul className="nav navbar-nav">
                        <li onClick={this.toggleMobileMenu} ><a href="#/" className="active">Home</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#about">About</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#gig">Gigs</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#music">Music</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#video">Videos</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#image">Gallery</a></li>
                        <li onClick={this.toggleMobileMenu} ><a href="#/#contactMe">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          { banner_image ? <SmallHero banner_image={banner_image}/> : <Hero title={title}/>}
        </header>

      </div>
    )
  }
}

export default Header
