import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import { SocialMenu } from './SocialMenu'
import { footerMenu } from '../data/staticData'

import logo from '../assets/images/logo2.png'
import arrow from '../assets/images/arrow.png'

interface HeaderProps {
  image?: string | null
  title?: string | null
  banner_image?: string | null
}

function SmallHero({ banner_image }: { banner_image: string }) {
  return (
    <div
      className="page_banner"
      style={{ backgroundImage: 'url(' + banner_image + ')' }}
    >
      <div className="container">
        <div className="page_banner_text_container">
          <h2
            className="page_banner_text wow fadeInDown"
            data-wow-duration="700ms"
            data-wow-delay="300ms"
          />
          <div className="inner_arrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero({ title }: { title?: string | null }) {
  return (
    <div className="banner" id="home">
      <div className="container">
        <div className="banner_text_box">
          <h2
            className="banner_text wow fadeInDown"
            data-wow-duration="700ms"
            data-wow-delay="300ms"
          >
            {title}
          </h2>
          <div className="banner_icons_panel">
            <ul
              className="banner_icons m_hide wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              <SocialMenu links={footerMenu} />
            </ul>
            <ul className="footer_icons d_hide footer_icons_h">
              <SocialMenu links={footerMenu} className="d_hide footer_icons_h" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header({ image, title, banner_image }: HeaderProps) {
  const [showBlackBackground, setShowBlackBackground] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const checkPositionY = () => {
      const topPosition = window.pageYOffset
      setShowBlackBackground(topPosition > 30)
    }
    window.addEventListener('scroll', checkPositionY)
    return () => window.removeEventListener('scroll', checkPositionY)
  }, [])

  const toggleMobileMenu = () => setShowMobileMenu((v) => !v)

  const fixedTheme = showBlackBackground ? 'fixed-theme' : ''

  return (
    <div>
      <header className="header_bg">
        <div className="container">
          <div className="top-panel-in">
            <div className="row clearfix">
              <nav
                id="header"
                className={`navbar navbar-fixed-top normal ${fixedTheme}`}
              >
                <div
                  id="header-container"
                  className={`container navbar-container ${fixedTheme}`}
                >
                  <div className="navbar-header">
                    <button
                      onClick={toggleMobileMenu}
                      type="button"
                      className="navbar-toggle collapsed"
                      aria-expanded="false"
                      aria-controls="navbar"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <Link id="brand" className="navbar-brand" to="/">
                      <img className="img-responsive" src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div
                    id="navbar"
                    className={`collapse navbar-collapse ${showMobileMenu ? 'in' : ''}`}
                  >
                    <ul className="nav navbar-nav">
                      <li onClick={toggleMobileMenu}>
                        <a href="#home" className="active">
                          Home
                        </a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#about">About</a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#gig">Gigs</a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#music">Music</a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#video">Videos</a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#image">Gallery</a>
                      </li>
                      <li onClick={toggleMobileMenu}>
                        <a href="#contactMe">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {banner_image ? (
          <SmallHero banner_image={banner_image} />
        ) : (
          <Hero title={title} />
        )}
      </header>
    </div>
  )
}
