import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ChevronDown, Download, Mail } from 'lucide-react'

const HeroSection = ({ data }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = data?.name || 'Данила Скворцов'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-section__background" />
      
      <Container className="hero-section__content">
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="hero-section__title">
                <span className="gradient-text">
                  {displayText}
                </span>
                <motion.span
                  className="hero-section__title--typing"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                >
                  |
                </motion.span>
              </h1>

              <motion.h2 
                className="hero-section__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {data?.title || 'Fullstack разработчик'}
              </motion.h2>

              <motion.p 
                className="hero-section__description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                {data?.description || 'Создаю современные веб-приложения с использованием передовых технологий'}
              </motion.p>

              <motion.div 
                className="hero-section__buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
              >
                <a href="#contact" className="hero-section__button">
                  <Mail size={20} />
                  Связаться со мной
                </a>
                <a href="/resume.pdf" className="hero-section__button hero-section__button--outline">
                  <Download size={20} />
                  Скачать резюме
                </a>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <button 
        className="hero-section__scroll-indicator"
        onClick={scrollToAbout}
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

export default HeroSection

