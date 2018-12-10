import {colors} from "@material-ui/core";

const dsGenericPalette = {
    type: "light",
    contrastThreshold: 3,
    tonalOffset: 0.2,
    common: {
        black: "#1f262a",
        white: "#FFFFFF"
    },
    primary: {
        main: "#007cb0",
        dark: "#005F87",
        light: "#009bdc",
    },
    secondary: {
        main: "#e57834",
        dark: "#bd5715",
        light: "#f57c30",
    },
    layout: {
        dark: "#404D56",
    },
    text: {
        primary: "#1f262a",
        secondary: "#404d56",
        hint: "#006f9e",
        disabled: "#91A3ae",
        contrastText: "#ffffff",
    },
    border: {
        main: "#D8DEE3"
    },
    valid: {
        main: "#13bd76",
    },
    error: {
        main: "#BD1330",
        light: "#e32646",
    },
    warning: {
        main: "#f6d62f",
    },
    background: {
        paper: "#ffffff",
        default: "#eff2f4",
    },
    confirmColor: {
        main: '#00a0e3'
    },
    publish: {
        main: colors.deepOrange[500]
    },
    enabled: {
        main: colors.green[400]
    },
    delete: {
        main: colors.red[600]
    },
    cancelButton: {
        main: '#676767'
    },
    publicationStatus: {
        published: {
            main: '#08D000'
        },
        modified: {
            main: '#FB9926'
        },
        notPublished: {
            main: colors.grey[900]
        },
        mandatoryLanguageUnpublishable: {
            main: '#F6D62F'
        },
        liveModified: {
            main: '#F6D62F'
        },
        liveOnly: {
            main: '#F6D62F'
        },
        conflict: {
            main: '#F6D62F'
        },
        mandatoryLanguageValid: {
            main: '#F6D62F'
        },
        deleted: {
            main: '#FB9926'
        },
        markedForDeletion: {
            main: '#CC0000'
        }
    },
    status: {
        add: "#8ce385",
        overwrite: '#e3a35b',
    }
};

export {dsGenericPalette}