import React from 'react'

class IntroSection extends React.Component {
  render() {
    const { title, description, image } = this.props
    return (
      <div id="/#about" style={{ backgroundImage: `url(${image})`}} className="about wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h2 className="about_text">
                { title }
              </h2>

              <p className="about_text2">{ description }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection
