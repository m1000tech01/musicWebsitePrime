import React from 'react';

export default (Component) => {
    return class LightBoxEnabledGallery extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                lightBoxIsOpen: false,
                currentlyOpenLightBoxImage: null
            };

            this.openImageLightBox = this.openImageLightBox.bind(this);
            this.closeImageLightBox = this.closeImageLightBox.bind(this);
            this.navigateToPreviousLightBoxImage = this.navigateToPreviousLightBoxImage.bind(this);
            this.navigateToNextLightBoxImage = this.navigateToNextLightBoxImage.bind(this);
        }

        openImageLightBox(image) {
            this.setState({
                lightBoxIsOpen: true,
                currentlyOpenLightBoxImage: image
            })
        }

        closeImageLightBox() {
            this.setState({
                lightBoxIsOpen: false
            })
        }

        navigateToPreviousLightBoxImage() {
            this.setState({
                currentlyOpenLightBoxImage: this.state.currentlyOpenLightBoxImage - 1
            });
        }

        navigateToNextLightBoxImage() {
            this.setState({
                currentlyOpenLightBoxImage: this.state.currentlyOpenLightBoxImage + 1
            });
        }

        render() {
            return (
                <Component {...this.props}
                           lightBoxIsOpen={this.state.lightBoxIsOpen}
                           currentlyOpenLightBoxImage={this.state.currentlyOpenLightBoxImage}
                           onClickPrev={this.navigateToPreviousLightBoxImage}
                           onClickNext={this.navigateToNextLightBoxImage}
                           openImageLightBox={this.openImageLightBox}
                           onClose={this.closeImageLightBox}/>
            );
        }
    };
};
