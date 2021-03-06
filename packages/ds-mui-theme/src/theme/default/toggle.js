const dsToggleButton = (theme) => ({
    root: {
        color: theme.palette.text.secondary,
        padding: "0 "+theme.spacing.unit *2+"px",
        textTransform: "none",
        margin: ""+theme.spacing.unit * 2+"px 0"
    },
    disabled: {
        color: theme.palette.text.disabled+'!important',
        '&:after':{
            backgroundColor: theme.palette.background.default,
            opacity: 1,
            zIndex: -1
        }
    },
    selected: {
        color: theme.palette.text.contrastText+'!important',
        backgroundColor: theme.palette.primary.main,
        '&:after':{
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            zIndex: -1
        }
    }
});


export {dsToggleButton}
