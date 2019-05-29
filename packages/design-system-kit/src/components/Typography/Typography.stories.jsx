import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';

import {DSProvider} from '../../provider';
import Typography from './Typography.jsx';
import TypographyOld from './Typography.old.jsx';
import doc from './Typography.md';

const variantKnob = () => select('variant', [
    'iota',
    'p',
    'giga',
    'mega',
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zeta',
    'omega',
    'legal'
]);
const colorKnob = () => select('color', ['alpha', 'inherit', 'beta', 'gamma', 'invert']);
const childrenKnob = () => text('children', 'I am the one with knobs');
const gutterBottomKnob = () => boolean('gutterBottom', true);
const paragraphKnob = () => boolean('paragraph', true);
const noWrapKnob = () => boolean('noWrap', true);

storiesOf('Atoms', module)
    .addDecorator(withKnobs)
    .add(
        'Typography',
        () => (
            <DSProvider>
                <div>
                    <Typography
                    color={colorKnob()}
                    variant={variantKnob()}
                    gutterBottom={gutterBottomKnob()}
                    paragraph={paragraphKnob()}
                    noWrap={noWrapKnob()}
                    >
                        {childrenKnob()}
                    </Typography>

                    <TypographyOld
                    color={colorKnob()}
                    variant={variantKnob()}
                    gutterBottom={gutterBottomKnob()}
                    paragraph={paragraphKnob()}
                    noWrap={noWrapKnob()}
                    >
                        {childrenKnob()}
                    </TypographyOld>

                </div>

                <TypographyOld variant="giga" color="alpha">
                    Giga | 76
                </TypographyOld>
                <TypographyOld variant="mega" color="alpha">
                    Mega | 54
                </TypographyOld>
                <TypographyOld variant="alpha" color="beta">
                    Alpha | 36
                </TypographyOld>
                <TypographyOld variant="beta" color="beta">
                    Beta | 36
                </TypographyOld>
                <TypographyOld variant="gamma" color="beta">
                    Gamma | 20
                </TypographyOld>
                <TypographyOld variant="delta" color="beta">
                    Delta | 18
                </TypographyOld>
                <TypographyOld variant="epsilon" color="beta">
                    Epsilon | 16
                </TypographyOld>
                <TypographyOld variant="zeta" color="alpha">
                    Zeta | 14
                </TypographyOld>
                <TypographyOld variant="iota" color="beta">
                    Iota | 14
                </TypographyOld>
                <TypographyOld variant="omega" color="alpha">
                    Omega | 12
                </TypographyOld>
                <TypographyOld variant="caption" color="beta">
                    Caption | 12
                </TypographyOld>
                <TypographyOld variant="legal" color="alpha">
                    Legal | 11
                </TypographyOld>
                <TypographyOld variant="p" color="alpha">
                    P | 16
                </TypographyOld>
            </DSProvider>
        ),
        {notes: {markdown: doc}}
    );
