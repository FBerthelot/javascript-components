const anthraciteLightButton = {
    "root": {
        "padding": "8px 15px",
        "textTransform": "none",
        "margin": "5px"
    },
    "contained": {
        "backgroundColor": "#d7dce0",
        "boxShadow": "0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
        "&:hover": {
            "backgroundColor":"#d1d7dc"
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
};

const anthraciteLightIconButton = {
    "root":{
        "boxShadow": "none"
    }
};

const anthraciteLightButtonBase = {
    "root": {}
};


export {anthraciteLightButton, anthraciteLightIconButton, anthraciteLightButtonBase}