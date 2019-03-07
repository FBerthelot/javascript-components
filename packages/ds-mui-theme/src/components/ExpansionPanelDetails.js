import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanelDetails as MuiExpansionPanelDetails, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = () => ({
    root: {
        display: 'flex',
        padding: '8px 32px 32px'
    }
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, classes: {root, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
    )
});

/*
   Spread new classes into original component
 */
const ExpansionPanelDetails = withStyles(styles, {name: 'DsExpansionPanelDetails'})(
    ({variant, classes, ...props}) => (
        <MuiExpansionPanelDetails classes={getClasses({variant, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
ExpansionPanelDetails.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string
} : {};

/*
   Default Props
 */
ExpansionPanelDetails.defaultProps = {
};

ExpansionPanelDetails.displayName = 'DsExpansionPanelDetails';

export default ExpansionPanelDetails;
