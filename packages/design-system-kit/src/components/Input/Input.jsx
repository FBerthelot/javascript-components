import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {InputBase, InputAdornment, withStyles} from '@material-ui/core';
import NumberFormat from 'react-number-format';

const styles = theme => {
    return {
        root: {
            borderRadius: '1px',
            background: theme.palette.ui.epsilon,
            border: `1px solid ${theme.palette.ui.omega}`,
            boxSizing: 'border-box',
            '&:hover:not($inputDisabled):not($focused):not($error):not($readOnly)': {
                border: `1px solid ${theme.palette.ui.zeta}`
            },
            fontSize: theme.typography.iota.fontSize,
            transitionDuration: '.3s',
            padding: '3px 0px 3px 12px'
        },
        focused: {
            border: `1px solid ${theme.palette.brand.alpha}`
        },
        readOnly: {
            background: theme.palette.ui.alpha,
            border: `1px solid ${theme.palette.ui.alpha}`
        },
        // Hack for disabled style as the default disabled style applies on both container AND input element.
        inputDisabled: {
            background: theme.palette.ui.epsilon,
            border: `1px solid ${theme.palette.ui.zeta}`,
            color: theme.palette.font.gamma
        },
        error: {
            border: `1px solid ${theme.palette.support.alpha}`
        },
        inputAdornedStart: {
            transitionDuration: '.3s'
        },
        inputAdornedStartFocus: {
            color: theme.palette.brand.alpha
        },
        inputAdornedStartError: {
            color: theme.palette.support.alpha
        },
        inputAdornedEndReadonly: {
            pointerEvents: 'none !important'
        }
    };
};

const InputCmp = React.forwardRef(({
    classes,
    disabled,
    error,
    onBlur,
    onFocus,
    readOnly,
    variant,
    ...others
}, ref) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = e => {
        onFocus(e);
        setFocus(true);
    };

    const handleBlur = e => {
        onBlur(e);
        setFocus(false);
    };

    const {icon, interactive} = variant;

    const {
        readOnly: readOnlyClass,
        inputDisabled,
        inputAdornedStart,
        inputAdornedStartFocus,
        inputAdornedStartError,
        inputAdornedEndReadonly,
        ...containerClasses
    } = classes;

    return (
        <InputBase
            ref={ref}
            classes={containerClasses}
            className={`${readOnly ? readOnlyClass : ''} ${
                disabled ? inputDisabled : ''
            }`}
            disabled={disabled}
            error={error}
            readOnly={readOnly}
            startAdornment={
                icon && (
                    <InputAdornment
                        className={`${inputAdornedStart} ${
                            !readOnly && focus ? inputAdornedStartFocus : ''
                        } ${!readOnly && error ? inputAdornedStartError : ''}`}
                        position="start"
                    >
                        {icon}
                    </InputAdornment>
                )
            }
            endAdornment={
                interactive && (
                    <InputAdornment
                        className={`${readOnly ? inputAdornedEndReadonly : ''}`}
                        position="end"
                    >
                        {interactive}
                    </InputAdornment>
                )
            }
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...others}
        />
    );
});

const ValueForwardInputCmp = React.forwardRef(({value, isInputControlled, ...others}, ref) => {
    return (
        <InputCmp
            ref={ref}
            value={isInputControlled ? value : undefined}
            defaultValue={!isInputControlled ? value : undefined}
            {...others}
        />
    );
});

ValueForwardInputCmp.propTypes = {
    isInputControlled: PropTypes.bool.isRequired,
    value: PropTypes.string
};

ValueForwardInputCmp.defaultProps = {
    value: undefined
};

const WrappedInputCmp = React.forwardRef(({decimalSeparator, decimalScale, type, ...others}, ref) => {
    if (type && type === 'number') {
        return (
            <NumberFormat
                ref={ref}
                isInputControlled={others.value !== undefined}
                customInput={ValueForwardInputCmp}
                decimalScale={decimalScale}
                decimalSeparator={decimalSeparator}
                {...others}
                />
        );
    }

    return <InputCmp ref={ref} {...others}/>;
});

InputCmp.defaultProps = {
    disabled: false,
    defaultValue: undefined,
    error: false,
    fullWidth: false,
    inputProps: {},
    id: undefined,
    name: undefined,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    readOnly: false,
    value: undefined,
    variant: {}
};

InputCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    defaultValue: PropTypes.string,
    // eslint-disable-next-line react/boolean-prop-naming
    disabled: PropTypes.bool,
    // eslint-disable-next-line react/boolean-prop-naming
    error: PropTypes.bool,
    // eslint-disable-next-line react/boolean-prop-naming
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    // eslint-disable-next-line react/boolean-prop-naming
    readOnly: PropTypes.bool,
    value: PropTypes.string,
    variant: PropTypes.shape({
        icon: PropTypes.node,
        interactive: PropTypes.node
    })
};

WrappedInputCmp.defaultProps = {
    decimalSeparator: '.',
    decimalScale: undefined,
    type: 'text'
};

WrappedInputCmp.propTypes = {
    decimalSeparator: PropTypes.string,
    decimalScale: PropTypes.number,
    type: PropTypes.string
};

export const Input = withStyles(styles)(WrappedInputCmp);

Input.displayName = 'Input';
