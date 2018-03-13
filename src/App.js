import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import {I18nextProvider } from 'react-i18next';
//import {i18next } from 'i18next';
//import i18n from './i18n';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{t('Welcome to React')}</h2>
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>english</button>
          <button onClick={() => changeLanguage('hi-IN')}>Hindi</button>
          <button onClick={() => changeLanguage('mr-IN')}>Marathi</button>
        
        </div>
        <br/>
        <div className="App-intro">
          
          <Trans>
           Welcome To Compumatrice Pune
          </Trans>
        </div>
        <div>{t('will be added automatically to locize.')}</div>
      </div>
    );
  }
}

export default translate('translations')(App);


