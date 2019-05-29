import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import PropTypeConstants from '../PropTypesConstants';

import {fontFace} from './nunito';

import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '@global': {...fontFace},
        ...theme.typography.root
    },

    ...Object.keys(theme.typography)
        .filter(key => key !== 'root')
        .reduce((typo, key) => {
            return {
                ...typo,
                [key]: theme.typography[key]
            };
        }, {})
}));

const usrColorStyles = makeStyles(theme => ({
    inherit: {
        color: 'inherit'
    },
    alpha: {
        color: theme.palette.font.alpha
    },
    beta: {
        color: theme.palette.font.beta
    },
    gamma: {
        color: theme.palette.font.gamma
    },
    invert: {
        color: theme.palette.invert.beta
    }
}));

const Typography = ({children, variant, color}) => {
    const classes = useStyles();
    const colorClasses = usrColorStyles();

    return (
        <p
        className={classnames(classes.root, classes[variant], colorClasses[color])}
        >
            {children}
        </p>
    );
};

Typography.propTypes = {
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    children: PropTypes.node.isRequired,
    color: PropTypeConstants.TextColors,
    variant: PropTypeConstants.TextVariants

//    Classes: PropTypes.object,
//    className: PropTypes.string,
//    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
//    gutterBottom: PropTypes.bool,
    // headlineMapping: PropTypes.object,
    // internalDeprecatedVariant: PropTypes.bool,
    // noWrap: PropTypes.bool,
    // paragraph: PropTypes.bool,
};

Typography.defaultProps = {
    align: undefined,
    color: 'alpha',
    variant: 'iota'

    // Align: undefined,
    // classes: undefined,
    // gutterBottom: undefined,
    // headlineMapping: undefined,
    // noWrap: undefined,
    // paragraph: undefined,
};

Typography.displayName = 'DsTypography';

export default Typography;
