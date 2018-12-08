import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../themes/default';
import darkTheme from '../themes/dark';

export const AnniUILibProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

AnniUILibProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([defaultTheme, darkTheme]),
};

AnniUILibProvider.defaultProps = {
  theme: defaultTheme,
};
