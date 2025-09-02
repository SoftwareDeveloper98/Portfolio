import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://localhost:7000/api/projects')
        setProjects(response.data)
      } catch (err) {
        console.error('Error fetching projects:', err)
        // Fallback to mock data if API is not available
        setProjects([
          {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with React frontend and .NET backend',
            imageUrl: 'https://via.placeholder.com/400x250',
            demoUrl: 'https://demo.example.com',
            sourceUrl: 'https://github.com/example/ecommerce',
            technologies: 'React,ASP.NET Core,Entity Framework,SQL Server'
          },
          {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates',
            imageUrl: 'https://via.placeholder.com/400x250',
            demoUrl: 'https://tasks.example.com',
            sourceUrl: 'https://github.com/example/taskmanager',
            technologies: 'React,SignalR,ASP.NET Core,MongoDB'
          },
          {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather monitoring dashboard with interactive charts',
            imageUrl: 'https://via.placeholder.com/400x250',
            demoUrl: 'https://weather.example.com',
            sourceUrl: 'https://github.com/example/weather',
            technologies: 'React,Chart.js,Weather API,Tailwind CSS'
          }
        ])
        setError('Using demo data - API not available')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading projects...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
              {error}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex space-x-2">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                  {project.sourceUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

