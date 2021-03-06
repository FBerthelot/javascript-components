const dsTab = (theme) => ({
    root: {
        textTransform: "none",
        minHeight: "auto",
        minWidth: "unset!important",
        margin: "0 15px 0 0",
        opacity: 0.6
    },
    labelContainer: {
        paddingTop: "0!important",
        paddingRight: "0!important",
        paddingBottom: "2px!important",
        paddingLeft: "0!important"
    },
    selected:{
        opacity: 1
    }
});

const dsTabs = (theme) => ({
    root: {
        minHeight: "unset",
        padding: "0 40px"
    }
});

export {dsTab, dsTabs}

