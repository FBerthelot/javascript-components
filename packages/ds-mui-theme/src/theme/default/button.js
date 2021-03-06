const dsButton = (theme) => ({
    root: {
        color: theme.palette.text.secondary,
        padding: "10px "+theme.spacing.unit * 2+"px",
        textTransform: "none",
        margin: ""+theme.spacing.unit * 2+"px 0",
        letterSpacing: 1.1
    },
    disabled: {
        backgroundColor: theme.palette.border.main+'!important',
        color: theme.palette.text.disabled+'!important',
        cursor: "not-allowed!important",
        boxShadow: 'none!important',
        pointerEvents: "inherit!important"
    },
    label : {
    },
    fab: {
        boxShadow: "0px 5px 1px -4px rgba(38, 38, 38, 0.4)"
    },
    text: {
        padding: 0,
        boxShadow: "none",
        minHeight: "auto",
        minWidth: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    contained: {
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.layout.dark,
        boxShadow: theme.shadows[4],
        borderRadius: "1px",
        "&:hover": {
            backgroundColor: theme.palette.layout.main,
            boxShadow: theme.shadows[8],
        }
    },
    containedPrimary: {
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        }
    },
    containedSecondary: {
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        }
    },
    textPrimary: {
        color: theme.palette.text.hint,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    textSecondary: {
        color: theme.palette.text.hint,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    sizeSmall: {
        padding: "6px "+theme.spacing.unit * 2+"px",
    },
    sizeLarge: {
        padding: "17px "+theme.spacing.unit *2+"px",
    },
    fullWidth: {
        width: "100%"
    }

});

const dsIconButton =  (theme) => ({
    root:{
        boxShadow: "none",
         color: theme.palette.text.secondary
    },
    disabled: {
        backgroundColor:'transparent!important',
        color: theme.palette.text.disabled+'!important',
        cursor: "not-allowed!important",
        boxShadow: 'none!important',
        pointerEvents: "inherit!important"
    },
});

const dsButtonBase = (theme) => ({
    root: {
        boxShadow: "none"
    },
    disabled: {
        backgroundColor: theme.palette.border.main+'!important',
        color: theme.palette.text.disabled+'!important'
    }
});


export {dsButton, dsIconButton, dsButtonBase}
