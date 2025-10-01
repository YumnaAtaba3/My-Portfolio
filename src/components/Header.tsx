import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

/* ---------------- Reusable Components ---------------- */
interface NavItemProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
}
const NavItem: React.FC<NavItemProps> = ({ label, id, onClick, className }) => (
  <button
    onClick={() => onClick(id)}
    className={`text-muted-foreground hover:text-foreground transition-colors duration-300 relative group ${className}`}
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
  </button>
);

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}
const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="circle-primary p-2 hover-glow transition-all duration-300"
  >
    {theme === "dark" ? (
      <Sun className="w-5 h-5 text-white" />
    ) : (
      <Moon className="w-5 h-5 text-white" />
    )}
  </button>
);

/* ---------------- Main Header Component ---------------- */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo (only visible on desktop) */}
          <div
            className="hidden md:block text-2xl font-bold gradient-text cursor-pointer hover-scale"
            onClick={() => scrollToSection("hero")}
          >
            Yumna
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.id} {...item} onClick={scrollToSection} />
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-6 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  {...item}
                  onClick={scrollToSection}
                  className="text-left py-2"
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
