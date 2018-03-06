import React from 'react'
import YouTube from 'react-youtube'

class VideosSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedId: '4kE3zstaOlk'
    }

    this.changeVideo = this.changeVideo.bind(this)
  }

  changeVideo(selectedId) {
    this.setState({selectedId})
  }

  render() {
    const { changeVideo } = this
    const { selectedId } = this.state
    const { videos } = this.props

    return(
      <div id="/#video" className="video m_hide">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-6">
              <div className="row clearfix wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                <div className="col-xs-1 col-sm-1 col-md-6" />
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <h2 className="video_text">
                    Videos
                  </h2>

                  <ul className="video_category">
                    {
                      videos.map((video, index) => {
                        return (<li key={index}><span data-toggle="tab" onClick={() => {changeVideo(video.link)}} className="category_icon">{ video.title }</span></li>)
                      })
                    }
                  </ul>

                </div>
              </div>
            </div>

            <div className="col-xs-6">
              <div className="tab-content wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                <div className="video_paces video-container-homepage tab-pane fade in active"><YouTube videoId={selectedId} /></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default VideosSection