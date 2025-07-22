import { motion } from 'framer-motion'
import { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap'
import { ExternalLink, Github, Eye } from 'lucide-react'

const ProjectsSection = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState('all')

  const categories = {
    all: 'Все проекты',
    web: 'Веб-приложения',
    education: 'Образование',
    business: 'Бизнес',
    services: 'Сервисы',
    portfolio: 'Портфолио'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const filteredProjects = data?.filter(project =>
    filter === 'all' || project.type === filter
  ) || []

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Завершен': return 'success'
      case 'В разработке': return 'primary'
      default: return 'secondary'
    }
  }

  return (
    <section id="projects" className="projects-section bg-darker-custom">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section title */}
          <div className="text-center mb-5">
            <h2 className="projects-section__title">
              Мои проекты
            </h2>
            <div className="projects-section__title-underline" />
          </div>

          {/* Filter buttons */}
          <div className="projects-section__filters">
            {Object.entries(categories).map(([key, label]) => (
              <motion.div key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setFilter(key)}
                  className={`projects-section__filter-btn ${
                    filter === key
                      ? 'projects-section__filter-btn--active'
                      : 'projects-section__filter-btn--inactive'
                  }`}
                >
                  {label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="g-4">
              {filteredProjects.map((project, index) => (
                <Col key={project.id} lg={4} md={6}>
                  <motion.div variants={itemVariants}>
                    <Card
                      className="projects-section__card"
                      onClick={() => handleProjectClick(project)}
                    >
                      {/* Project image placeholder */}
                        <div className="projects-section__card-image">
                            <div className="projects-section__card-image-icon">
                                <img src={`/img/cases/${project.icon}`} alt={`${project.name} icon`}/>
                            </div>
                            <div className="projects-section__card-image-status">
                                <Badge
                                    bg={getStatusColor('Завершен')}
                                    className={`projects-section__status projects-section__status--${getStatusColor(project.status)}`}
                                >
                                    Завершен
                                </Badge>
                            </div>
                            <div className="projects-section__card-image-year">
                                {project.year}
                            </div>
                        </div>

                        <Card.Body className="projects-section__card-body">
                        <h5 className="projects-section__card-title">{project.name}</h5>
                        <p className="projects-section__card-description">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="projects-section__card-technologies">
                          {project.technologies?.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="projects-section__tech-badge"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies?.length > 3 && (
                            <span className="projects-section__tech-badge projects-section__tech-badge--more">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="projects-section__card-actions">
                          <Button className="projects-section__card-button">
                            <Eye size={16} />
                            Подробнее
                          </Button>
                          <div className="projects-section__card-links">
                            <a href={project.url} className="projects-section__card-link">
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="projects-section__empty">
              <div className="projects-section__empty-icon">🔍</div>
              <p>Проекты в данной категории не найдены</p>
            </div>
          )}
        </motion.div>
      </Container>

      {/* Project details modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="projects-section__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div>
              <div className="mb-3">
                <Badge
                  bg={getStatusColor(selectedProject.status)}
                  className={`projects-section__status projects-section__status--${getStatusColor(selectedProject.status)} me-2`}
                >
                  {selectedProject.status}
                </Badge>
                <Badge
                  bg="secondary"
                  className="projects-section__status projects-section__status--secondary"
                >
                  {selectedProject.year}
                </Badge>
              </div>

              <p className="mb-4">
                {selectedProject.description}
              </p>

              {/*<h6 className="mb-3">Основные возможности:</h6>*/}
              {/*<ul className="mb-4">*/}
              {/*  {selectedProject.features?.map((feature, idx) => (*/}
              {/*    <li key={idx} className="mb-1">{feature}</li>*/}
              {/*  ))}*/}
              {/*</ul>*/}

              <h6 className="mb-3">Технологии:</h6>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="projects-section__tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
            Закрыть
          </Button>
          <a href={selectedProject?.url} target="_blank" className="projects-section__card-button">
            <ExternalLink size={16} href={selectedProject?.url} />
            Открыть проект
          </a>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default ProjectsSection

