import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { useContent } from '../content/ContentContext'
import imageGallery from '../assets/images/image_gallery.png'

export default function GalleryPage() {
  const { content } = useContent()
  const gallery = content?.galleryPage?.gallery ?? []

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = gallery.map((item) => ({ src: item.link ?? '' }))

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <div className="page-gallery">
      <Header banner_image={imageGallery} />
      <main className="content" id="page">
        <div
          className="video_contant wow fadeInDown"
          data-wow-duration="700ms"
          data-wow-delay="300ms"
        >
          <div className="container">
            <div className="row clearfix">
              <div className="col-sm-12">
                <div
                  className="row top_mg_gap clearfix wow fadeInDown"
                  data-wow-duration="700ms"
                  data-wow-delay="300ms"
                >
                  {gallery.map((item, i) => (
                    <div key={i} className="col-sm-3">
                      <div className="images_gallery style_prevu_kit">
                        <img src={item.link ?? undefined} alt={item.title ?? ''} />
                        <div
                          title={item.title ?? undefined}
                          className="images_overlay gallery-image-thumbnail"
                          onClick={() => openAt(i)}
                        >
                          <div className="popup-gallery popup-gallery2">
                            <div className="images_overlay_text">
                              {item.title}
                              <span className="text1">
                                Location : {item.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  )
}
