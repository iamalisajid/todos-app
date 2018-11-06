import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import Header from '../viewes/App/Header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('light theme', () => (
    <BrowserRouter>
      <Header themeValue={true} />
    </BrowserRouter>
  ))
  .add('dark theme', () => (
    <BrowserRouter>
      <Header themeValue={false} />
    </BrowserRouter>
  ))
  .add('with knobs', () => (
    <BrowserRouter>
      <Header themeValue={boolean('Theme Mode', true)} />
    </BrowserRouter>
  ));
