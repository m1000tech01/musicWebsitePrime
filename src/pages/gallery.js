import React from 'react';
import Lightbox from 'react-images';

// Import components
import Header from '../components/Header'
import Footer from '../components/Footer'

import {getGalleryPage} from '../store/Root/RootReducer'
import {connect} from 'react-redux'
import imageGallery from '../assets/images/image_gallery.png'

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightBoxIsOpen: false,
            openLightBoxImage: null
        };

        this.closeImageLightBox = this.closeImageLightBox.bind(this);
        this.navigateToPreviousLightBoxImage = this.navigateToPreviousLightBoxImage.bind(this);
        this.navigateToNextLightBoxImage = this.navigateToNextLightBoxImage.bind(this);
    }

    openImageLightBox(image) {
        this.setState({
            lightBoxIsOpen: true,
            openLightBoxImage: image
        })
    }

    closeImageLightBox() {
        this.setState({
            lightBoxIsOpen: false
        })
    }

    navigateToPreviousLightBoxImage() {
        this.setState({
            openLightBoxImage: this.state.openLightBoxImage - 1
        });
    }

    navigateToNextLightBoxImage() {
        this.setState({
            openLightBoxImage: this.state.openLightBoxImage + 1
        });
    }

    render() {
        const {gallery} = this.props.galleryPage;

        const LIGHT_BOX_IMAGES = gallery.map(item => {
            return {src: item.link};
        });

        const imageGalleryItems = gallery.map((item, index) => (
            <div key={index} className="col-sm-3">
                <div className="images_gallery style_prevu_kit">
                    <img src={item.link} alt={item.title}/>
                    <div title={item.title} className="images_overlay gallery-image-thumbnail" onClick={this.openImageLightBox.bind(this, index)}>
                        <div className="popup-gallery popup-gallery2">
                            <div className="images_overlay_text">
                                {item.title}
                                <span className="text1">Location : {item.location}</span>
                            </div>
                        </div>
                    </div>
                    <Lightbox
                        images={LIGHT_BOX_IMAGES}
                        isOpen={this.state.lightBoxIsOpen}
                        onClickPrev={this.navigateToPreviousLightBoxImage}
                        onClickNext={this.navigateToNextLightBoxImage}
                        onClose={this.closeImageLightBox}
                        currentImage={this.state.openLightBoxImage}
                        backdropClosesModal
                        preventScroll={false}
                    />
                </div>
            </div>));

        return (
            <div className="page-gallery">
                <Header banner_image={imageGallery}/>
                <main className="content" id="page">
                    <div className="video_contant wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">
                        <div className="container">
                            <div className="row clearfix">
                                <div className="col-sm-12">
                                    <div className="row top_mg_gap clearfix wow fadeInDown" data-wow-duration="700ms"
                                         data-wow-delay="300ms">

                                        {imageGalleryItems}

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
    };
};

export default connect(mapStateToProps)(Gallery)
