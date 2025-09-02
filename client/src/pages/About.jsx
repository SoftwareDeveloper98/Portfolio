import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      category: 'Backend',
      icon: Code,
      technologies: ['.NET Core', 'C#', 'Node.js', 'Express.js', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['SQL Server', 'MongoDB', 'Entity Framework', 'PostgreSQL', 'Redis']
    },
    {
      category: 'Mobile & Tools',
      icon: Smartphone,
      technologies: ['React Native', 'Docker', 'Azure', 'Git', 'CI/CD', 'Agile']
    }
  ]

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React and .NET Core. Mentored junior developers and implemented best practices.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using Angular and .NET. Collaborated with cross-functional teams to deliver high-quality solutions.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built responsive web applications using React and modern JavaScript. Worked closely with designers to implement pixel-perfect UIs.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience creating
            modern web applications. I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="text-gray-600 mb-4">
                My journey in software development began during my computer science studies, where I
                discovered my passion for creating digital solutions. Over the years, I've worked with
                startups and established companies, gaining experience in various technologies and methodologies.
              </p>
              <p className="text-gray-600 mb-4">
                I specialize in building scalable web applications using modern frameworks like React and Angular
                for the frontend, paired with robust backend solutions using .NET Core and Node.js. I'm particularly
                interested in clean architecture, performance optimization, and user experience.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Code className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={skill.category} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

