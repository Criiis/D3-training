import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full max-w-screen-md mx-auto my-2 p-4 md:p-1 flex items-center justify-center">
      {/* Search bar */}
      <div className="w-5/12 flex items-center relative py-1 px-3 bg-gray-100 rounded-3xl border border-solid border-slate-400">
        <input
          type="text"
          placeholder="Find anything..."
          aria-label="Search components"
          className="block w-full text-base text-slate-900 placeholder-text-slate-500 bg-transparent border-none focus:outline-none sm:text-sm sm:leading-6"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          className="fill-slate-500 pointer-events-none"
        >
          <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z" />
        </svg>
      </div>

      {/* User profile */}
      <div className="relative flex flex-col justify-center">
        <input
          type="checkbox"
          name="light-switch"
          className="light-switch absolute inset-0 w-full h-full z-10 cursor-pointer opacity-0"
          checked={theme === "light"}
          onChange={() => {
            if (theme === "dark") {
              return setTheme("light");
            }
            return setTheme("dark");
          }}
        />
        <label className="relative cursor-pointer p-2" htmlFor="light-switch">
          {theme === "dark" ? (
            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
          ) : (
            <svg width={16} height={16} viewBox="0,0,16,16" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
          )}
          <span className="sr-only">Switch to light / dark version</span>
        </label>
      </div>
    </header>
  );
};

export default Header;
