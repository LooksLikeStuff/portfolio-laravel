import { motion } from 'framer-motion'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin } from 'lucide-react'

const ContactSection = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь можно добавить логику отправки формы
    alert('Сообщение отправлено! (демо)')
  }

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="contact-section__title">
              Связаться со мной
            </h2>
            <div className="contact-section__title-underline" />
            <p className="contact-section__subtitle">
              Готов обсудить ваш проект или возможности сотрудничества
            </p>
          </motion.div>

          <Row className="g-5">
            {/* Contact info */}
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 className="contact-section__section-title">Контактная информация</h3>

                <div className="contact-section__info-cards">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card className="contact-section__info-card">
                      <Card.Body className="contact-section__info-card-body">
                        <div className="contact-section__info-icon">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <h6 className="contact-section__info-label">Email</h6>
                          <a
                            href={`mailto:${data?.email || 'thetroop3r1337@gmail.com'}`}
                            className="contact-section__info-link"
                          >
                            {data?.email || 'thetroop3r1337@gmail.com'}
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card className="contact-section__info-card">
                      <Card.Body className="contact-section__info-card-body">
                        <div className="contact-section__info-icon">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <h6 className="contact-section__info-label">Телефон</h6>
                          <a
                            href={`tel:${data?.phone || '+79158506935'}`}
                            className="contact-section__info-link"
                          >
                            {data?.phone || '+7 (915) 850-69-35'}
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card className="contact-section__info-card">
                      <Card.Body className="contact-section__info-card-body">
                        <div className="contact-section__info-icon">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <h6 className="contact-section__info-label">Локация</h6>
                          <span className="contact-section__info-text">{data?.location || 'Санкт-Петербург'}</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </div>

                {/* Action buttons */}
                <div className="contact-section__action-buttons">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href='/download' className="contact-section__action-btn contact-section__action-btn--primary">
                      <Download size={20} />
                      Скачать резюме
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="contact-section__action-btn contact-section__action-btn--outline"
                      href={`mailto:${data?.email || 'thetroop3r1337@gmail.com'}`}
                    >
                      <Mail size={20} />
                      Написать на почту
                    </Button>
                  </motion.div>
                </div>

                {/* Social links */}
                <div className="contact-section__social">
                  <h6 className="contact-section__social-title">Социальные сети</h6>
                  <div className="contact-section__social-links">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={data.social.github}
                      target="_blank"
                      className="contact-section__social-link"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Contact form */}
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <Card className="contact-section__form-card">
                  <Card.Body className="contact-section__form-body">
                    <h3 className="contact-section__form-title">Отправить сообщение</h3>

                    <Form onSubmit={handleSubmit}>
                      <Row className="g-3">
                        <Col sm={6}>
                          <Form.Group>
                            <Form.Label className="contact-section__form-label">Имя</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              className="contact-section__form-input"
                            />
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group>
                            <Form.Label className="contact-section__form-label">Email</Form.Label>
                            <Form.Control
                              type="email"
                              required
                              className="contact-section__form-input"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label className="contact-section__form-label">Тема</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              className="contact-section__form-input"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group>
                            <Form.Label className="contact-section__form-label">Сообщение</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              required
                              className="contact-section__form-textarea"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              type="submit"
                              className="contact-section__form-submit"
                            >
                              <Send size={20} />
                              Отправить сообщение
                            </Button>
                          </motion.div>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>

          {/* Footer */}
          <motion.div variants={itemVariants} className="contact-section__footer">
            <p className="contact-section__footer-text">
              © 2025 Данила Скворцов. Road to Silicon Valley
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactSection

