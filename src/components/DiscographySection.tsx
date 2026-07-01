import type { DiscographySection as DiscographySectionData } from '../content/types'

export default function DiscographySection({
  title,
  description,
  image,
  backgroundImage,
  spotifyLink,
  itunesLink,
  amazonLink,
}: DiscographySectionData) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="discography"
      id="music"
    >
      <div className="container">
        <div className="row">
          <div className="row clearfix">
            <div id="myCarousel" className="carousel vertical slide">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row-fluid">
                    <div className="col-sm-6 aline">
                      <img className="thumbnail" src={image ?? undefined} alt="" />
                    </div>
                    <div className="col-sm-6">
                      <h2 className="follow_us">Discography</h2>

                      <h4 className="saccharine_us_text">{title}</h4>

                      <p className="video_category">{description}</p>

                      <div className="discography_socials">
                        <h3 className="listen_text">Buy or Stream here</h3>

                        <ul className="discography_socials_icon ">
                          <li className="rss style_prevu_kit2">
                            <a href={spotifyLink ?? undefined} target="_blank" rel="noreferrer" />
                          </li>
                          <li className="music style_prevu_kit2">
                            <a href={itunesLink ?? undefined} target="_blank" rel="noreferrer" />
                          </li>
                          <li className="afe style_prevu_kit2">
                            <a href={amazonLink ?? undefined} target="_blank" rel="noreferrer" />
                          </li>
                        </ul>
                      </div>
                    </div>
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
