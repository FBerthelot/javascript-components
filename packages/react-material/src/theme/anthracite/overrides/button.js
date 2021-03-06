const anthraciteButton = (theme) => ({
    "root": {
        "padding": "8px 15px",
        "textTransform": "none",
        "margin": "5px"
    },
    "contained": {
        "boxShadow": "0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
        "&:hover": {
        }
    },
    "fab": {
        "boxShadow": "0px 5px 1px -4px rgba(38, 38, 38, 0.4)"
    },
    "text": {
        "padding": 0,
        "boxShadow": "none",
        "minHeight": "auto",
        "minWidth": "auto",
        "&:hover": {
            "backgroundColor": "transparent"
        }
    },
    "textPrimary": {
        "&:hover": {
            "backgroundColor": "transparent"
        }
    },
    "textSecondary": {
        "&:hover": {
            "backgroundColor": "transparent"
        }
    }
});

const anthraciteIconButton =  (theme) => ({
    "root":{
        "boxShadow": "none"
    }
});

const anthraciteButtonBase = (theme) => ({
    "root": {}
});


export {anthraciteButton, anthraciteIconButton, anthraciteButtonBase}