import React from 'react';
import Loader from 'react-loader-spinner';
import { StyledAppLoader, LoaderCenter } from './styles';

const AppLoader = () => (
  <StyledAppLoader>
    <LoaderCenter>
      <Loader type="Triangle" color="#00BFFF" height="100" width="100" />
    </LoaderCenter>
  </StyledAppLoader>
);

export default AppLoader;
