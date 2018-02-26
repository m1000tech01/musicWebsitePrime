import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import './assets/css/vendor/bootstrap.min.css'
import './assets/css/vendor/magnific-popup.css'
import './assets/css/vendor/animate.min.css'
import './assets/css/client/font.css'
import './assets/css/client/menu.css'
import './assets/css/client/main.css'
import './assets/css/client/responsive.css'
import './assets/css/font-awesome.min.css'

import { getEntries } from './store/api'

import asyncComponent from './components/AsyncComponent'
import Provider from 'react-redux/es/components/Provider'
import {connect} from 'react-redux'
import {getLoading} from './store/Root/RootReducer'
import PropTypes from 'prop-types'

//const AsyncIndexPage = asyncComponent(() => import('./pages/index'))
// const AsyncGallery = asyncComponent(() => import('./pages/gallery'))
// const AsyncNotFound = asyncComponent(() => import('./pages/404'))

import IndexPage from './pages/index'
import GalleryPage from './pages/gallery'
import NotFound from './pages/404'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Helmet
              title="Jaz Mattu"
            />
            <div className="wrapper">
              <div className="page">
                <Switch>
                  <Route strict exact path="/" component={IndexPage} />
                  <Route strict exact path="/gallery" component={GalleryPage} />
                  <Route strict exact component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state)
  }
}

export default connect(mapStateToProps)(App);
