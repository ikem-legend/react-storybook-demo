import React from 'react';

import WebpackLogo from '../images/webpack-logo.svg';
import { Button } from './Button';

export const App = () => {
  return (
    <>
      <h1>Webpack 5 React Starter</h1>
      <WebpackLogo />
      <Button primary size={'large'} label={'Button Blue'} />
    </>
  );
};
