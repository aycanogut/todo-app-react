// breakpoints
const size = {
  xs: '320px',
  sm: '465px',
  md: '750px',
  lg: '1200px'
};

// media queries
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`
};

// color palette
const colors = {
  body: '#1d1d1d',
  check: '#AAD517',
  gradient: {
    white: '#fff', // 85%
    gray: '#e3e7f1' // 100%
  }
};

export default { size, device, colors };
