import React from 'react'

class IntroSection extends React.Component {
  render() {
    const { title, description, image } = this.props
    return (
      <div style={{ backgroundImage: `url(${image})`}} className="about wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
        <div className="container">
          <div className="row clearfix">
            <div className="col-sm-7">
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
