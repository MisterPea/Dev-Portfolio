import {useEffect, useState} from 'react';

/**
 * Hook that manages the reading and setting of dark/light theme.
 * @returns {Array} Returns a function that can toggle the data-theme and the current theme.
 */
export default function useTheme(){
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const darkPreference = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const darkPreferenceString = darkPreference ? 'dark' : 'light';
    
    const localThemePreference = localStorage.getItem('theme');
    // set localStorage theme if there is none
    if (!localThemePreference) {
      localStorage.setItem('theme', darkPreferenceString);
      document.documentElement.setAttribute('data-theme', darkPreferenceString);
      setTheme(darkPreferenceString)
    } else {
      document.documentElement.setAttribute('data-theme', localThemePreference);
      setTheme(localThemePreference)
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme);
  }
  return [toggleTheme, theme]
}