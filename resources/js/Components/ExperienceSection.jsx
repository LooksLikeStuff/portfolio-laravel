import { motion } from 'framer-motion'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const ExperienceSection = ({ data }) => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="experience" className="experience-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="experience-section__title">
              Опыт работы
            </h2>
            <div className="experience-section__title-underline" />
          </motion.div>

          <Row className="justify-content-center">
            <Col lg={10}>
              {data?.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="experience-section__item"
                >
                  <Card className="experience-section__card">
                    <Card.Body className="experience-section__card-body">
                      <Row className="align-items-start">
                        <Col md={3} className="mb-3 mb-md-0">
                          <div className="experience-section__meta">
                            <Badge
                              className={`experience-section__status ${
                                experience.end_date === null
                                  ? 'experience-section__status--current'
                                  : 'experience-section__status--completed'
                              }`}
                            >
                              {experience.end_date === null ? 'Текущая' : 'Завершена'}
                            </Badge>
                            <div className="experience-section__duration">
                              <Calendar size={16} className="me-1" />
                              {experience.start_date}
                              {experience.end_date
                                  ? ` - ${experience.end_date}`
                                  : ' - current date'
                              }
                            </div>
                          </div>
                        </Col>

                        <Col md={9}>
                          <div className="experience-section__header">
                            <div className="experience-section__company-info">
                              <h4 className="experience-section__company">{experience.company_name}</h4>
                              <h5 className="experience-section__position">{experience.job_title}</h5>
                            </div>
                            <div className="experience-section__location-info">
                              <div className="experience-section__location">
                                <MapPin size={16} className="me-1" />
                                {experience.location}
                              </div>
                              {experience.website && (
                                <a
                                  href={`https://${experience.website}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="experience-section__website"
                                >
                                  <ExternalLink size={14} className="me-1" />
                                  {experience.website}
                                </a>
                              )}
                            </div>
                          </div>

                          <p className="experience-section__description">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="experience-section__responsibilities">
                            <h6 className="experience-section__section-title">Основные задачи:</h6>
                            <ul className="experience-section__list">
                              {experience.tasks
                                  ? <li className="experience-section__list-item">{experience.tasks}</li>
                                  : ''
                              }
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="experience-section__technologies">
                            <h6 className="experience-section__section-title">Технологии:</h6>
                            <div className="experience-section__tech-list">
                              {experience.technologies?.map((tech, idx) => (
                                <motion.span
                                  key={idx}
                                  whileHover={{ scale: 1.05 }}
                                  className="experience-section__tech-badge"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </motion.div>
              )) || (
                <div className="experience-section__loading">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                  </div>
                  <p>Загрузка опыта работы...</p>
                </div>
              )}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default ExperienceSection

