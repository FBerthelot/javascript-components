import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import PropTypes from 'prop-types';
import {dsGenericTheme, JahiaDesignSystemKitTheme} from '../theme';

export const DSProvider = ({children}) => {
    return (
        <MuiThemeProvider theme={dsGenericTheme}>
            <ThemeProvider theme={JahiaDesignSystemKitTheme}>
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

DSProvider.propTypes = {
    children: PropTypes.node.isRequired
};
