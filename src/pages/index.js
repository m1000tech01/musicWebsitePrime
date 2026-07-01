import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// Import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideosSection from '../components/VideosSection'
import DiscographySection from '../components/DiscographySection'
import GigsSection from '../components/GigsSection'
import IntroSection from '../components/IntroSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

import {getGigs, getIndexPage, getLoading, getPosts, getVideos} from '../store/Root/RootReducer'


class IndexPage extends React.Component {
  render() {
    const {
      heroSection,
      aboutSection,
      gigsSection,
      discographySection,
      gallerySection,
    } = this.props.indexPage
    const { gigs, videos } = this.props

    if(!heroSection)
      return ''

    return(
      <div className="page-home">
        <Header image={heroSection.image} title={heroSection.title}/>
        <main className="content" id="page">

          <IntroSection
            title={aboutSection.title}
            description={aboutSection.description}
            image={aboutSection.image}/>
          <GigsSection
            gigs={gigs}
            {...gigsSection }/>
          <DiscographySection {...discographySection}/>
          <VideosSection videos={videos}/>
          <GallerySection {...gallerySection}/>
          <ContactSection/>

        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    indexPage: getIndexPage(state),
    gigs: getGigs(state),
    videos: getVideos(state),
    posts: getPosts(state),
  }
}

IndexPage.page = 'index'

export default connect(mapStateToProps)(IndexPage)
