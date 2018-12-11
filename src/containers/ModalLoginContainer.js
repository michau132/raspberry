import React, { Component } from 'react';
import styled from 'styled-components';
import ModalLogin from '../components/ModalLogin';
import CloseBtn from '../components/CloseBtn';

const ModalLoginStyles = styled.div`
  position: absolute;
  z-index: 5;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(14, 1, 3, 0.7);
  text-align: center;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  padding: 40px;
  color: #292d2f;
  min-height: 300px;
  
  @media (max-width: 420px) {
    width: 320px;
    padding: 15px;
    padding-top: 40px;
  }
`;


class ModalLoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue: '',
      error: null,
      loading: false,
      userSended: false,
      fetchError: null,
    };
  }

  updateValue = (event) => {
    const inputName = `${event.target.type}Value`;
    this.setState({
      [inputName]: event.target.value,
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { emailValue, passwordValue } = this.state;
    if (!emailValue.length || !passwordValue.length) {
      this.setState({
        error: true,
      });
      return;
    }

    const userData = {
      login: emailValue,
      password: passwordValue,
    };
    this.setState({
      loading: true,
    });

    fetch('http://recruitment-api.pyt1.stg.jmr.pl/login', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        redirect: 'follow',
        mode: 'no-cors',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          loading: false,
          userSended: true,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          fetchError: err,
        });
      });
  }

  closeModal = (e) => {
    const { history } = this.props;
    if (e.target.id === 'emptyField') {
      history.push({ pathname: '/', state: { modal: false } });
    }
  }

  render() {
    return (
      <ModalLoginStyles onClick={this.closeModal} id="emptyField">
        <LoginWrapper onClick={this.closeModal}>
          <CloseBtn />
          <ModalLogin
            {...this.state}
            onFormSubmit={this.onFormSubmit}
            updateValue={this.updateValue}
          />
        </LoginWrapper>
      </ModalLoginStyles>
    );
  }
}


export default ModalLoginContainer;
