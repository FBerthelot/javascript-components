const dsChip = (theme) => ({
    //change color to dark
    root:{
        border: "solid 1px "+theme.palette.border.main,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
    },
    clickable:{
        "&:hover":{
            backgroundColor: theme.palette.background.default
        }
    },
    avatar:{
        backgroundColor: theme.palette.background.default,
         color: theme.palette.text.primary
    }
});

export {dsChip}
