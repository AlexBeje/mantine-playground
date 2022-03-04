// Mantine
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
// React icons
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const iconSize = 18;

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
    >
      {dark ? (
        <SunIcon style={{ width: iconSize, height: iconSize }} />
      ) : (
        <MoonIcon style={{ width: iconSize, height: iconSize }} />
      )}
    </ActionIcon>
  );
}

export default ThemeToggle;
