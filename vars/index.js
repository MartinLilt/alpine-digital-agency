export const cursorTypes = {
  default: "default",
  whiteCursor: "whiteCursor",
  accentCursor: "accentCursor",
  backgroundCursor: "backgroundCursor",
};

export const headerMap = {
  home: {
    path: "/",
    logoIcon: true,
    logoText: true,
    logoPath: "/",
    color: "var(--main-color)",
    menuPath: "/",
    cursor: cursorTypes.whiteCursor,
  },
  works: {
    path: "/works",
    logoIcon: true,
    logoText: false,
    logoPath: "/",
    color: "var(--accent-color)",
    menuPath: "",
    cursor: cursorTypes.accentCursor,
  },
  category: {
    path: "/works/#",
    logoIcon: false,
    logoText: false,
    logoPath: "/works",
    color: "var(--accent-color)",
    menuPath: "",
    cursor: cursorTypes.accentCursor,
  },
  about: {
    path: "/about",
    logoIcon: true,
    logoText: false,
    logoPath: "/",
    color: "var(--accent-color)",
    menuPath: "",
    cursor: cursorTypes.accentCursor,
  },
  modal: {
    path: "/",
    logoIcon: true,
    logoText: false,
    logoPath: "/",
    color: "var(--accent-color)",
    menuPath: "",
    cursor: cursorTypes.accentCursor,
  },
};
