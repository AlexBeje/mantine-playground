// React
import { useState } from 'react';
// Mantine
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

function Theme({ children }) {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }} withGlobalStyles>
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default Theme;
