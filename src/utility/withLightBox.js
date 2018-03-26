import React from 'react';

const withLightBox = (Component) => {
    return class LightBoxEnabledGallery extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                lightBoxIsOpen: false,
                openLightBoxImage: null
            };

            this.openImageLightBox = this.openImageLightBox.bind(this);
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
            return (
                <Component {...this.props}
                           lightBoxIsOpen={this.state.lightBoxIsOpen}
                           openLightBoxImage={this.state.openLightBoxImage}
                           onClickPrev={this.navigateToPreviousLightBoxImage}
                           onClickNext={this.navigateToNextLightBoxImage}
                           openImageLightBox={this.openImageLightBox}
                           onClose={this.closeImageLightBox}/>
            );
        }
    };
};

export default withLightBox;
