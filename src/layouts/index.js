import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import {getLoading} from '../store/Root/RootReducer'



class TemplateWrapper  extends React.Component {
  render() {
    return(
      <div>

        <Helmet
          title="Jaz Mattu"
        />

        <div className="wrapper">
          <div className="page">
            { this.props.children }
          </div>
        </div>

      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
}



export default connect(mapStateToProps)(TemplateWrapper);
