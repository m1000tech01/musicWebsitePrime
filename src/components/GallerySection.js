import React from 'react'
import { Link } from 'react-router-dom'

import galleryImage from '../assets/images/gallery.png'
import gallerySecondImage from '../assets/images/gallery2.png'

class GallerySection extends React.Component {
  render() {
    const { backgroundImage, gallery } = this.props
    return (
      <div style={{backgroundImage: `url(${backgroundImage})`}} className="gallery_panel" id="image">
        <div className="container">
          <div className="row">
            <h2 className="blog_text wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
              IMAGE GALLERY
            </h2>
            <div className="col-xs-12 gallery_mg_gap">
              <div className="row clearfix wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">

                {
                  gallery.map((image, index) => (
                    <div key={index} className="col-sm-3">
                      <div className="gallery style_prevu_kit">
                        <img src={galleryImage} alt="" />
                        <div className="overlay">
                          <div className="popup-gallery">
                            <a href={image} title="Alternative EP Cover 1"><img src={image} /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }

                <div className="col-sm-3">
                  <div className="gallery style_prevu_kit">
                    <img src={gallerySecondImage} />
                    <div className="overlay">
                      <p className="overlay_text"><Link to="/gallery">MORE<br/> photos</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GallerySection