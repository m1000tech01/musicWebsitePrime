import React from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-images';

import galleryImage from '../assets/images/gallery.png'
import gallerySecondImage from '../assets/images/gallery2.png'

import withLightBox from '../utility/withLightBox';

class GallerySection extends React.Component {
    render() {
        const {backgroundImage, gallery} = this.props;

        const LIGHT_BOX_IMAGES = gallery.map(image => {
            return {src: image};
        });

        const imageGalleryItems = gallery.map((image, index) => (
            <div key={index} className="col-sm-3">
                <div className="gallery style_prevu_kit">
                    <img className="gallery-image-space-placeholder" src={galleryImage} alt=""/>
                    <div className="overlay gallery-image-thumbnail">
                        <div className="popup-gallery">
                            <img src={image} onClick={() => this.props.openImageLightBox(index)}/>
                            <Lightbox
                                images={LIGHT_BOX_IMAGES}
                                isOpen={this.props.lightBoxIsOpen}
                                onClickPrev={this.props.onClickPrev}
                                onClickNext={this.props.onClickNext}
                                onClose={this.props.onClose}
                                currentImage={this.props.openLightBoxImage}
                                backdropClosesModal
                                preventScroll={false}
                            />
                        </div>
                    </div>
                </div>
            </div>));

        return (
            <div id="/#image" style={{backgroundImage: `url(${backgroundImage})`}} className="gallery_panel">
                <div className="container">
                    <div className="row">
                        <h2 className="blog_text wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                            IMAGE GALLERY
                        </h2>
                        <div className="col-xs-12 gallery_mg_gap">
                            <div className="row clearfix wow fadeInDown" data-wow-duration="700ms"
                                 data-wow-delay="300ms">
                                {imageGalleryItems}
                                <div className="col-sm-3">
                                    <div className="gallery style_prevu_kit">
                                        <img src={gallerySecondImage}/>
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

export default withLightBox(GallerySection);