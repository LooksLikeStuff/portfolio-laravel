import { motion } from 'framer-motion'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { MapPin, Calendar, Mail, Phone } from 'lucide-react'

const AboutSection = ({ data }) => {
  if (!data) {
    return (
      <section id="about" className="about-section">
        <Container className="about-section__container">
          <div className="about-section__loading">
            Загрузка информации...
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="about" className="about-section">
      <Container className="about-section__container">
        <motion.h2 
          className="about-section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          О себе
        </motion.h2>

        <div className="about-section__content">
          <motion.div 
            className="about-section__image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-section__image">
              <img 
                src="/developer-icon.jpg" 
                alt="Developer with laptop"
                className="about-section__profile-image"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-section__info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="about-section__description">
              {data.description}
            </p>

            <div className="about-section__details">
              <div className="about-section__detail-item">
                <MapPin className="about-section__detail-item-icon" />
                <small className="about-section__detail-item-label">Локация</small>
                <span className="about-section__detail-item-value">{data.location}</span>
              </div>

              <div className="about-section__detail-item">
                <Calendar className="about-section__detail-item-icon" />
                <small className="about-section__detail-item-label">Возраст</small>
                <span className="about-section__detail-item-value">{data.age}</span>
              </div>

              <div className="about-section__detail-item">
                <Mail className="about-section__detail-item-icon" />
                <small className="about-section__detail-item-label">Email</small>
                <span className="about-section__detail-item-value">{data.email}</span>
              </div>

              <div className="about-section__detail-item">
                <Phone className="about-section__detail-item-icon" />
                <small className="about-section__detail-item-label">Телефон</small>
                <span className="about-section__detail-item-value">{data.phone}</span>
              </div>
            </div>

            <div className="about-section__actions">
              <Badge bg="primary" className="about-section__status-badge">
                Готов к работе
              </Badge>
              <Badge bg="success" className="about-section__status-badge">
                Свободен к сотрудничеству
              </Badge>
              <Badge bg="warning" className="about-section__status-badge">
                + лет опыта
              </Badge>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

