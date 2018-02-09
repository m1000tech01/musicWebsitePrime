import React from 'react'

// Import components
import Header from '../components/Header'
import Footer from '../components/Footer'

import { getGalleryPage } from '../store/Root/RootReducer'
import {connect} from 'react-redux'
import imageGallery from '../assets/images/image_gallery.png'

class Gallery extends React.Component {
  render() {
    const { gallery } = this.props.galleryPage
    return (
      <div className="page-gallery">
        <Header banner_image={imageGallery}/>
        <main className="content" id="page" >
          <div className="video_contant wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
            <div className="container">
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="row top_mg_gap clearfix wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">

                    {
                      gallery.map((item, index) => (
                        <div key={index} className="col-sm-3">
                          <div className="images_gallery style_prevu_kit">
                            <img src={item.link} />
                            <div className="images_overlay">
                              <div className="popup-gallery popup-gallery2">
                                <a href={item.link} title={item.title}>
                                  <div className="images_overlay_text">
                                    {item.title}
                                    <span className="text1">Location : {item.location}</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    galleryPage: getGalleryPage(state)
  }
}

export default connect(mapStateToProps)(Gallery)
