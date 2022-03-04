// React
import { useEffect } from "react";

// Mantine
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
// React icons
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const [colorSchemeLocalStorage, toggleColorSchemeLocalStorage] =
    useLocalStorageValue({
      key: "color-scheme",
      defaultValue: "dark",
    });
  const dark = colorSchemeLocalStorage === "dark";
  
  const { toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    colorSchemeLocalStorage === "dark"
      ? toggleColorScheme("dark")
      : toggleColorScheme("light");
  }, [colorSchemeLocalStorage]);

  function toggleTheme() {
    dark
      ? toggleColorSchemeLocalStorage("light")
      : toggleColorSchemeLocalStorage("dark");
  };

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleTheme()}
    >
      {dark ? (
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}
