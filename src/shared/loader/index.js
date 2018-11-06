import React from 'react';
import Loader from 'react-loader-spinner';
import './index.css';

const AppLoader = () => (
  <div className="Loader">
    <div className="Loader-center">
      <Loader type="Triangle" color="#00BFFF" height="100" width="100" />
    </div>
  </div>
);

export default AppLoader;
