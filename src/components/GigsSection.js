import React from 'react'
import moment from 'moment'

class GigsSection extends React.Component {
  render() {
    const { title, description, image, gigs } = this.props
    return (
      <div style={{ backgroundImage: `url(${image})`}} className="giges">
        <div className="clearfix">
          <div className="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
            <div className="container">
              <div className="row clearfix">
                <div className="col-sm-12 col-md-7 col-lg-6" />
                <div className="col-sm-12 col-md-5 col-lg-6">
                  <h3 className="giges_text2">Gigs</h3>
                  <h2 className="comingsoon_text">
                    { title }
                  </h2>

                  <p className="comingsoon_text2">{ description }</p>

                  <div className="example">
                    {
                      gigs.slice(0, 2).map((gig, index) =>
                        <div key={index} style={{width: '100%'}} className="clearfix">
                          <div className="radio_box"><input id="radio1" type="radio" name="radio" /><label htmlFor="radio1"/></div>
                          <div className="radio_text_in"><label className="radio_text">{moment(gig.time).format('MMM D, Y - HH:mm')}<a href={gig.link} className="place" style={{ marginLeft: '20px'}}>{gig.place}</a></label></div>
                        </div>
                      )
                    }
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

export default GigsSection
