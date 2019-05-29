## Typography

### Links

- [ZeroHeight](https://zeroheight.com/32291d970/p/353a11/b/63d6e)


### Variants

none

### Props

- *align*: String['inherit', 'left', 'center', 'right', 'justify']
- *color*: String['inherit', 'alpha', 'beta', 'gamma', 'invert'] The color of the component. It supports those theme colors that make sense for this component.
- *component*: String|component The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component.
- *gutterBottom*: If `true`, the text will have a bottom margin.
- *paragraph*: If `true`, the text will have a bottom margin.
- *noWrap*: If `true`, the text will not wrap, but instead will truncate with an ellipsis.
- *variant*: String['giga', 'mega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'iota', 'omega', 'legal', 'p'] Applies the theme typography styles.
- *classes*: Override or extend the styles applied to the component. See [CSS API](#css-api) below for more details.
- *className*: String

### Examples

```jsx
      <Typography variant="giga" color="alpha">
          Giga | 76
      </Typography>
      <Typography variant="mega" color="alpha">
          Mega | 54
      </Typography>
      <Typography variant="alpha" color="beta">
          Alpha | 36
      </Typography>
      <Typography variant="beta" color="beta">
          Beta | 36
      </Typography>
      <Typography variant="gamma" color="beta">
          Gamma | 20
      </Typography>
      <Typography variant="delta" color="beta">
          Delta | 18
      </Typography>
      <Typography variant="epsilon" color="beta">
          Epsilon | 16
      </Typography>
      <Typography variant="zeta" color="alpha">
          Zeta | 14
      </Typography>
      <Typography variant="iota" color="beta">
          Iota | 14
      </Typography>
      <Typography variant="omega" color="alpha">
          Omega | 12
      </Typography>
      <Typography variant="caption" color="beta">
          Caption | 12
      </Typography>
      <Typography variant="legal" color="alpha">
          Legal | 11
      </Typography>
      <Typography variant="p" color="alpha">
          P | 16
      </Typography>
```
