/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../components/MainPage';
import NotFoundPage from '../components/NotFoundPage';
import ModalLoginContainer from './ModalLoginContainer';

class ModalSwitch extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        modal: PropTypes.bool.isRequired,
      }),
    }).isRequired,
  }

  // eslint-disable-next-line react/destructuring-assignment
  previousLocation = this.props.location;


  componentDidUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP'
      && (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }


  render() {
    const { location, history } = this.props;
    if (history.action === 'POP' && location.pathname === '/login') {
      location.state = { modal: true };
    }
    const isModal = !!(
      location.state
      && location.state.modal
    );
    return (
      <Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            path="/"
            exact
            component={MainPage}
          />
          <Route
            path="/login"
            exact
            component={MainPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
        {
          isModal ? (<Route path="/login" component={ModalLoginContainer} />) : null
        }
      </Fragment>
    );
  }
}

export default ModalSwitch;
