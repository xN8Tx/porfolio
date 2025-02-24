const LightTheme = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      suppressHydrationWarning
    >
      <circle cx="15.9998" cy="16" r="5.33333" stroke="#222222" />
      <path d="M16 10.6667V5.33334" stroke="#222222" />
      <path d="M16 26.6667V21.3333" stroke="#222222" />
      <path d="M12.2288 12.2283L8.45752 8.45703" stroke="#222222" />
      <path d="M23.5422 23.5421L19.771 19.7708" stroke="#222222" />
      <path d="M21.3332 16L26.6665 16" stroke="#222222" />
      <path d="M5.33317 16L10.6665 16" stroke="#222222" />
      <path d="M19.7712 12.2283L23.5425 8.45703" stroke="#222222" />
      <path d="M8.45777 23.5421L12.229 19.7708" stroke="#222222" />
    </svg>
  );
};

export { LightTheme };
