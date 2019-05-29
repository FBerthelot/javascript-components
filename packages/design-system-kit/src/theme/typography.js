export const ourTypography = {
    root: {
        fontFamily: 'Nunito Sans, sans-serif',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        textTransform: 'none'
    },
    // Display sizes
    giga: {
        fontSize: 76,
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    mega: {
        fontSize: 54,
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    // Normal sizes
    alpha: {
        fontSize: 36,
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    beta: {
        fontSize: 28,
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    gamma: {
        fontSize: 20,
        fontWeight: 300,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    delta: {
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    epsilon: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    zeta: {
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    iota: {
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    omega: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '1.25'
    },
    // Extra sizes
    legal: {
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '1.5'
    },
    p: {
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '1.5'
    }
};

export const typography = {
    root: {
        fontFamily: 'Nunito Sans, sans-serif',
        light: 300,
        regular: 400,
        semiBold: 600,
        fontSize: '16px',
        fontWeight: 400,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    },
    fontFamily: 'Nunito Sans, sans-serif',
    h1: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '96px',
        fontWeight: 300,
        letterSpacing: '-1.5px',
        lineHeight: '1'
    },
    h2: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '60px',
        fontWeight: 300,
        letterSpacing: '-0.5px',
        lineHeight: '1'
    },
    h3: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '48px',
        fontWeight: 400,
        lineHeight: '1.04'
    },
    h4: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '34px',
        fontWeight: 400,
        letterSpacing: '0.25px',
        lineHeight: '1.17'

    },
    h5: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '1.33'
    },
    h6: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: '0.15px',
        lineHeight: '1.60'
    },
    subtitle1: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '0.15px',
        lineHeight: '1.75'
    },
    subtitle2: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '0.10px',
        lineHeight: '1.57'
    },
    body1: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        letterSpacing: '0.44px',
        lineHeight: '1.50'
    },
    body2: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '0.25px',
        lineHeight: '1.50'
    },
    button: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '1.35px',
        lineHeight: '1.50',
        textTransform: 'none'
    },
    caption: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.2px',
        lineHeight: '1.66'
    },
    overline: {
        fontFamily: 'Nunito Sans, sans-serif',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: '2.66',
        textTransform: 'none'
    },
    ...Object
        .keys(ourTypography)
        .filter(key => key !== 'root')
        .reduce((typo, currentTypo) => {
            return {
                ...typo,
                [currentTypo]: {
                    ...ourTypography[currentTypo],
                    ...ourTypography.root
                }
            };
        }, {})
};
