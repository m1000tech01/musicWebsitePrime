/* eslint-disable import/no-named-as-default */
import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

// Import template
import TeamplateWrapper from '../layouts/index'

// Import pages
import NotFoundPage from '../pages/404'
import IndexPage from '../pages/index'

class App extends React.Component {
  render() {
    return (
      <TeamplateWrapper>

        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route component={NotFoundPage} />
        </Switch>

      </TeamplateWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
