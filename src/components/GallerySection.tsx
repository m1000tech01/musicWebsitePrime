import { useState } from 'react'
import { Link } from 'react-router'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import galleryImage from '../assets/images/gallery.png'
import gallerySecondImage from '../assets/images/gallery2.png'

interface GallerySectionProps {
  backgroundImage?: string | null
  gallery: string[]
}

export default function GallerySection({
  backgroundImage,
  gallery,
}: GallerySectionProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = gallery.map((src) => ({ src }))

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <div
      id="image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="gallery_panel"
    >
      <div className="container">
        <div className="row">
          <h2
            className="blog_text wow fadeInDown"
            data-wow-duration="700ms"
            data-wow-delay="300ms"
          >
            IMAGE GALLERY
          </h2>
          <div className="col-xs-12 gallery_mg_gap">
            <div
              className="row clearfix wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              {gallery.map((image, i) => (
                <div key={i} className="col-sm-3">
                  <div className="gallery style_prevu_kit">
                    <img
                      className="gallery-image-space-placeholder"
                      src={galleryImage}
                      alt=""
                    />
                    <div className="overlay gallery-image-thumbnail">
                      <div className="popup-gallery">
                        <img src={image} onClick={() => openAt(i)} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-sm-3">
                <div className="gallery style_prevu_kit">
                  <img src={gallerySecondImage} alt="" />
                  <div className="overlay">
                    <p className="overlay_text">
                      <Link to="/gallery">
                        MORE
                        <br /> photos
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  )
}
