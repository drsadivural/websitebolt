/**
 * Theme configuration constants
 */
export const theme = {
  colors: {
    primary: '#3d84ff',
    secondary: '#ff3d7f',
    background: {
      start: '#1a1a1a',
      end: '#2d2d2d'
    },
    text: {
      primary: '#ffffff',
      body: '#e0e0e0'
    }
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease'
  }
} as const;