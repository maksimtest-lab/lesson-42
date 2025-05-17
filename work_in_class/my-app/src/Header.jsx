import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
    };

    return (
        <header style={styles}>
            <h1>Layout Component</h1>
            <h2>Theme: {theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}