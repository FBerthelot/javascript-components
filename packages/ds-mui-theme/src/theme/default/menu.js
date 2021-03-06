const dsMenu = (theme) => ({
    paper: {
        boxShadow: '1px 1px 3px 0px rgba(20, 20, 21, 0.49)',
        backgroundColor:theme.palette.background.paper
    }
});

const dsMenuItem = (theme) => ({
    root: {
        padding: "5px 17px",
        fontSize: "0.875rem",
        color: theme.palette.text.primary,
        "&:hover": {
            backgroundColor:theme.palette.background.default,
        }
    },
    selected:{
        backgroundColor: theme.palette.primary.main  + "!important",
        color: theme.palette.text.contrastText + "!important"
    }
});

export {dsMenu, dsMenuItem}
