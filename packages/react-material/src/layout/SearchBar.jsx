import React from 'react';
import {Icon, IconButton, Input, InputAdornment, withStyles} from '@material-ui/core';
import {Close, Search} from '@material-ui/icons';
import {translate} from 'react-i18next';

const styles = theme => ({
    root: {
        backgroundColor : theme.palette.primary.light,
        minWidth: '350px',
        height: '44px',
        lineHeight: '40px',
        borderRadius: '3px',
        boxShadow: 'inset 1px 1px 1px 0 rgba(38, 38, 38, 0.3)',
        '& button:disabled': {
            color: 'whitesmoke'
        }
    },
    rootFocus: {
        minWidth: '350px',
        height: '44px',
        lineHeight: '40px',
        borderRadius: '3px',
        backgroundColor : '#fff',
        boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.4)'
    },
    input: {
        transitionProperty: 'width',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: '0ms',
        color: 'whitesmoke'
    },
    searchIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        opacity: 0.87
    },
    closeIcon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        opacity: 0.87
    }
});

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClear = this.onClear.bind(this);
        this.state = {
            focus: false
        }
    }

    handleChange(event) {
        // Let the handler deal with the change only when the user has paused changing the filter text for a second.
        event.persist();
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function() {
            this.props.onChangeFilter(event.target.value)
        }.bind(this), 1000);
    }

    onClear() {
        this.inputSearchBar.value = '';
        this.props.onChangeFilter('');
    }

    onFocus() {
        this.setState({
            focus: true
        });
        this.props.onFocus();
    }

    onBlur() {
        this.setState({
            focus: false
        });
        this.props.onBlur();
    }

    render() {

        const { classes,t, placeholderLabel } = this.props;

        return (
            <Input classes={{root: (this.state.focus ? classes.rootFocus : classes.root), input: (this.state.focus ? null : classes.input)}}
                   onChange={this.handleChange}
                   onBlur={this.onBlur}
                   onFocus={this.onFocus}
                   disableUnderline={true}
                   type={'text'}
                   inputRef={(input) => {this.inputSearchBar = input;}}
                   placeholder={placeholderLabel || t('label.searchPlaceholder')}
                   startAdornment={
                       <InputAdornment position={'start'} classes={{root: classes.searchIcon}}>
                           <IconButton disabled>
                               <Search/>
                           </IconButton>
                       </InputAdornment>}
                   endAdornment={
                       this.state.focus ?
                           <InputAdornment position={'end'} classes={{root: classes.closeIcon}}>
                               <IconButton onClick={this.onClear}>
                                   <Icon><Close/></Icon>
                               </IconButton>
                           </InputAdornment> : null}
                   style={this.props.style}
            />
        )
    }
}

SearchBar = withStyles(styles, {name:'DxSearchBar'})(translate('react-material')(SearchBar));

export {SearchBar};
