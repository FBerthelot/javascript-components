import React from 'react';
import {Typography as MuiTypography, withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import PropTypeConstants from './PropTypesConstants';

let styles = theme => ({
    root: {},
    noWrap: {},
    gutterBottom: {},
    paragraph: {},

    giga: theme.typography.giga,
    mega: theme.typography.mega,
    alpha: theme.typography.alpha,
    beta: theme.typography.beta,
    gamma: theme.typography.gamma,
    delta: theme.typography.delta,
    epsilon: theme.typography.epsilon,
    zeta: theme.typography.zeta,
    iota: theme.typography.iota,
    omega: theme.typography.omega,
    colorInherit: {
        color: 'inherit'
    },
    colorAlpha: {
        color: 'blue'
    },
    colorBeta: {
        color: 'red'
    },
    colorGamma: {
        color: 'green'
    }
});

const getClasses = ({variant, color, classes: {root, noWrap, gutterBottom, paragraph, ...myClasses}}) => ({
    root: classnames(
        root,
        myClasses[variant],
        myClasses['color' + _.capitalize(color)]
    ),
    noWrap,
    gutterBottom,
    paragraph
});

const Typography = withStyles(styles, {name: 'DsTypography'})(
    ({variant, color, classes, ...props}) => (
        <MuiTypography classes={getClasses({variant, color, classes})} {...props}/>
    )
);

Typography.propTypes = process.env.NODE_ENV !== 'production' ? {
    /**
     * Set the text-align on the component.
     */
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object,

    /**
     * @ignore
     */
    className: PropTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypeConstants.TextColor,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it maps the variant to a good default headline component.
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

    /**
     * If `true`, the text will have a bottom margin.
     */
    gutterBottom: PropTypes.bool,

    /**
     * We are empirically mapping the variant property to a range of different DOM element types.
     * For instance, subtitle1 to `<h6>`.
     * If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` property.
     * The default mapping is the following:
     */
    headlineMapping: PropTypes.object,

    /**
     * A deprecated variant is used from an internal component. Users don't need
     * a deprecation warning here if they switched to the v2 theme. They already
     * get the mapping that will be applied in the next major release.
     *
     * @internal
     */
    internalDeprecatedVariant: PropTypes.bool,

    /**
     * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
     */
    noWrap: PropTypes.bool,

    /**
     * If `true`, the text will have a bottom margin.
     */
    paragraph: PropTypes.bool,

    /**
     * Applies the theme typography styles.
     * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
     */
    variant: PropTypes.oneOf(['giga', 'mega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'iota', 'omega'])

} : {};

Typography.defaultProps = {
    align: undefined,
    classes: undefined,
    color: 'alpha',
    gutterBottom: undefined,
    headlineMapping: undefined,
    noWrap: undefined,
    paragraph: undefined,
    variant: 'iota'
};

Typography.displayName = 'DsTypography';

export default Typography;
