import Company_logo from "./Image/Company_logo.png"
import { Switch } from "@mui/material";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

export default function Landing() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main" id={theme}>
        <div className="Navbar">
          <div>
            <img src={Company_logo} alt="Company Logo" className="logo" />
          </div>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>More</li>
            </ul>
          </div>
          <div className="button">
            <button className="login">Login</button>
            <Switch onChange={toggleTheme} checked={theme === "dark"} />
            <label className="theme">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
        <div className="content-main">
          <span className="h1">Get the </span>
          <span className="h2">right job</span> <br />
          <span className="h1">you deserve</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="search-section">
            <div className="section">
              <form>
                <input
                  type="text"
                  placeholder="Search job!"
                  className="search-bar"
                />
                <button className="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}