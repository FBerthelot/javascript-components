const dsToolBar = (theme) => ({
    root: {
        display: 'flex',
        '& h1': {
            flex: 1
        },
        '& button': {
            margin: 0
        }
    },
    gutters: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    },
    dense: {
        paddingLeft: theme.spacing.unit*2,
        paddingRight: theme.spacing.unit*2
    }
});

export { dsToolBar }
