import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const SkillsSection = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('backend')

  // Функция для получения иконки технологии
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      'RabbitMQ': 'https://www.rabbitmq.com/img/logo-rabbitmq.svg',
      'Elasticsearch': 'https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt6ae3d6980b5fd629/5bbca1d1af3a954c36f95ed3/logo-elastic-elasticsearch-lt.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg'
    }
    
    return iconMap[skillName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
  }

  // Исправляем условие проверки данных
  if (!data) {
    return (
      <section id="skills" className="skills-section">
        <Container className="skills-section__container">
          <div className="skills-section__loading">
            Загрузка навыков...
          </div>
        </Container>
      </section>
    )
  }

  const categories = [
    { key: 'backend', label: 'Backend', icon: <Database size={20} /> },
    { key: 'frontend', label: 'Frontend', icon: <Globe size={20} /> },
    { key: 'mobile', label: 'Mobile', icon: <Smartphone size={20} /> },
    { key: 'tools', label: 'Tools', icon: <Code size={20} /> }
  ]

  // Исправляем доступ к данным навыков
  const currentSkills = data[activeCategory] || []

  return (
    <section id="skills" className="skills-section">
      <Container className="skills-section__container">
        <motion.h2 
          className="skills-section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Навыки и технологии
        </motion.h2>

        <motion.div 
          className="skills-section__categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.key}
              className={`skills-section__category-btn ${
                activeCategory === category.key 
                  ? 'skills-section__category-btn--active' 
                  : 'skills-section__category-btn--inactive'
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="skills-section__content">
          <motion.div 
            className="skills-section__list"
            key={activeCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skills-section__item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skills-section__item-header">
                  <span className="skills-section__item-name">{skill.name}</span>
                  <span className="skills-section__item-percentage">{skill.level}%</span>
                </div>
                <div className="skills-section__progress">
                  <motion.div 
                    className="skills-section__progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="skills-section__visualization"
            key={`${activeCategory}-viz`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {currentSkills.slice(0, 8).map((skill, index) => {
              const angle = (index * 360) / Math.min(currentSkills.length, 8)
              const radius = 150
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              
              return (
                <motion.div
                  key={skill.name}
                  className="skills-section__skill-circle"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={getSkillIcon(skill.name)}
                    alt={skill.name}
                    className="skills-section__skill-circle-icon"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                  <div style={{ display: 'none', fontSize: '1.5rem' }}>⚙️</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection

