import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'О себе' },
    { href: '#skills', label: 'Навыки' },
    { href: '#experience', label: 'Опыт' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Контакты' }
  ]

  return (
    <header className="header">
      <Container className="header__container">
        <nav className="header__navbar">
          <a href="#" className="header__logo">
            ДС
          </a>

          <ul className="header__nav">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="header__mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <ul className="header__nav header__nav--mobile">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="header__nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header

