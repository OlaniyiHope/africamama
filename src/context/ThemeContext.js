import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  tokens: {},
});

export const themes = {
  dark: {
    bg: "#0c1315",
    bgScrolled: "rgba(12,19,21,0.97)",
    text: "#C9AB81",
    textMuted: "rgba(201,171,129,0.8)",
    border: "rgba(201,171,129,0.15)",
    borderFaint: "rgba(201,171,129,0.06)",
    borderSub: "rgba(201,171,129,0.08)",
    borderNav: "rgba(201,171,129,0.12)",
    dropdownBg: "#0c1315",
    panelBg: "#0c1315",
    mobileBg: "#0c1315",
    mobileOverlay: "rgba(0,0,0,0.5)",
    mobileSubBg: "rgba(0,0,0,0.2)",

    /* ── Page-level tokens (used outside the header) ── */
    pageBg: "#0c1315",
    cardBg: "#111d22",
    cardBgAlt: "#0f1d22",
    heading: "#C9AB81",
    body: "rgba(201,171,129,0.85)",
    inputBg: "#111d22",
    inputBorder: "rgba(201,171,129,0.2)",
    inputText: "#C9AB81",
    btnOutlineBorder: "#C9AB81",
    btnOutlineText: "#C9AB81",
    btnOutlineHoverBg: "#C9AB81",
    btnOutlineHoverText: "#0c1315",
    divider: "rgba(201,171,129,0.12)",
    tagline: "#C9AB81",
  },
  light: {
    bg: "#FAF6F1",
    bgScrolled: "rgba(250,246,241,0.97)",
    text: "#000",
    textMuted: "#000",
    border: "rgba(122,92,46,0.2)",
    borderFaint: "rgba(122,92,46,0.08)",
    borderSub: "rgba(122,92,46,0.1)",
    borderNav: "rgba(122,92,46,0.15)",
    dropdownBg: "#FAF6F1",
    panelBg: "#FAF6F1",
    mobileBg: "#FAF6F1",
    mobileOverlay: "rgba(0,0,0,0.3)",
    mobileSubBg: "rgba(122,92,46,0.05)",

    /* ── Page-level tokens (used outside the header) ── */
    pageBg: "#FAF6F1",
    cardBg: "#F2EBE0",
    cardBgAlt: "#EDE3D5",
    heading: "#4A3010",
    body: "rgba(74,48,16,0.85)",
    inputBg: "#F2EBE0",
    inputBorder: "rgba(122,92,46,0.3)",
    inputText: "#4A3010",
    btnOutlineBorder: "#7A5C2E",
    btnOutlineText: "#7A5C2E",
    btnOutlineHoverBg: "#7A5C2E",
    btnOutlineHoverText: "#FAF6F1",
    divider: "rgba(122,92,46,0.12)",
    tagline: "#7A5C2E",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // Apply data-theme attribute to <html> so CSS variables can react globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.background = themes[theme].pageBg;
    document.body.style.color = themes[theme].body;
    document.body.style.transition = "background 0.3s ease, color 0.3s ease";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, tokens: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Convenience hook
export const useTheme = () => useContext(ThemeContext);
