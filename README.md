# Full-Stack Portfolio Solution

A modern, production-ready full-stack portfolio application built with React (frontend) and .NET 8 Web API (backend). This solution demonstrates best practices in modern web development with a clean architecture, responsive design, and seamless integration between frontend and backend.

## 🌟 Features

### Frontend (React SPA)
- **Modern React 18** with functional components and hooks
- **Responsive Design** with Tailwind CSS and shadcn/ui components
- **React Router** for client-side routing with lazy loading
- **Framer Motion** for smooth animations and transitions
- **Axios & React Query** for efficient API communication
- **Mobile-First Design** with responsive navigation
- **Professional UI Components** using shadcn/ui library

### Backend (.NET 8 Web API)
- **RESTful API** with full CRUD operations
- **Entity Framework Core** with SQL Server integration
- **JWT Authentication** for secure API access
- **CORS Configuration** for cross-origin requests
- **Swagger/OpenAPI** documentation
- **Clean Architecture** with proper separation of concerns
- **Error Handling** with structured responses

### DevOps & Deployment
- **Seamless Launch Scripts** for both platforms
- **Concurrent Development** with hot reload
- **Production-Ready** configuration
- **Cross-Platform** compatibility (Windows, macOS, Linux)

## 🏗️ Project Structure

```
fullstack-portfolio/
├── client/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   └── Navbar.jsx      # Navigation component
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── About.jsx       # About page
│   │   │   ├── Projects.jsx    # Projects showcase
│   │   │   └── Contact.jsx     # Contact form
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css             # Global styles
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
├── server/                     # .NET Backend
│   └── PortfolioAPI/
│       ├── Controllers/
│       │   └── ProjectsController.cs
│       ├── Data/
│       │   └── PortfolioDbContext.cs
│       ├── Models/
│       │   └── Project.cs
│       ├── Properties/
│       │   └── launchSettings.json
│       ├── Program.cs
│       ├── appsettings.json
│       └── PortfolioAPI.csproj
├── package.json                # Root package.json for scripts
├── start.sh                    # Linux/macOS startup script
├── start.bat                   # Windows startup script
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm
- **.NET 8 SDK**
- **SQL Server** or **SQL Server LocalDB**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start the application**
   
   **Option 1: Using npm script (Recommended)**
   ```bash
   npm start
   ```
   
   **Option 2: Using startup scripts**
   ```bash
   # Linux/macOS
   ./start.sh
   
   # Windows
   start.bat
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: https://localhost:7000
   - Swagger UI: https://localhost:7000/swagger

## 🛠️ Development

### Frontend Development

```bash
cd client
pnpm run dev --host
```

The React development server will start with hot reload enabled.

### Backend Development

```bash
cd server/PortfolioAPI
dotnet run
```

The .NET API will start with automatic recompilation on file changes.

### Database Setup

The application uses Entity Framework Code First approach. The database will be automatically created when you first run the API.

**Connection String** (in `appsettings.json`):
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=PortfolioDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"
  }
}
```

## 📱 Pages & Features

### Home Page
- Hero section with call-to-action
- Technology showcase
- Social media links
- Responsive design with animations

### About Page
- Professional biography
- Technical skills categorized by domain
- Work experience timeline
- Interactive skill cards

### Projects Page
- Dynamic project showcase from API
- Project filtering and search
- External links to demos and source code
- Responsive grid layout

### Contact Page
- Contact form with validation
- Contact information display
- Social media integration
- Form submission handling

## 🔧 API Endpoints

### Projects API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all active projects |
| GET | `/api/projects/{id}` | Get project by ID |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/{id}` | Update existing project |
| DELETE | `/api/projects/{id}` | Soft delete project |

### Example Project Model

```json
{
  "id": 1,
  "title": "E-Commerce Platform",
  "description": "Full-stack e-commerce solution with React frontend and .NET backend",
  "imageUrl": "https://example.com/image.jpg",
  "demoUrl": "https://demo.example.com",
  "sourceUrl": "https://github.com/example/repo",
  "technologies": "React,ASP.NET Core,Entity Framework,SQL Server",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z",
  "isActive": true
}
```

## 🎨 Styling & UI

### Tailwind CSS Configuration
- Custom color palette
- Responsive breakpoints
- Dark mode support (ready)
- Animation utilities

### shadcn/ui Components
- Button, Card, Input, Textarea
- Badge, Label, Navigation
- Consistent design system
- Accessible components

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interfaces

## 🔐 Security Features

### JWT Authentication
- Secure token-based authentication
- Configurable token expiration
- Bearer token validation

### CORS Configuration
- Cross-origin request handling
- Configurable allowed origins
- Secure headers

### Input Validation
- Model validation on API endpoints
- Client-side form validation
- SQL injection prevention

## 🚀 Deployment

### Frontend Deployment
```bash
cd client
pnpm run build
```

The build output will be in the `client/dist` directory.

### Backend Deployment
```bash
cd server/PortfolioAPI
dotnet publish -c Release
```

### Environment Configuration

**Production appsettings.json:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "YOUR_PRODUCTION_CONNECTION_STRING"
  },
  "JwtSettings": {
    "SecretKey": "YOUR_SECURE_SECRET_KEY",
    "Issuer": "YourProductionIssuer",
    "Audience": "YourProductionAudience"
  }
}
```

## 📊 Performance Optimizations

### Frontend
- Code splitting with React Router
- Lazy loading of components
- Image optimization
- Bundle size optimization with Vite

### Backend
- Entity Framework query optimization
- Response caching
- Async/await patterns
- Efficient database queries

## 🧪 Testing

### Frontend Testing
```bash
cd client
pnpm run test
```

### Backend Testing
```bash
cd server/PortfolioAPI
dotnet test
```

## 🔧 Configuration

### Environment Variables

**Frontend (.env):**
```
VITE_API_BASE_URL=https://localhost:7000
```

**Backend (appsettings.json):**
```json
{
  "JwtSettings": {
    "SecretKey": "YourSecretKey",
    "ExpirationInMinutes": 60
  }
}
```

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm start` | Start both frontend and backend |
| `npm run start:client` | Start only frontend |
| `npm run start:server` | Start only backend |
| `npm run build` | Build frontend for production |
| `npm run install:all` | Install all dependencies |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Port conflicts:**
- Frontend default: 5173
- Backend default: 7000 (HTTPS), 5000 (HTTP)

**Database connection issues:**
- Ensure SQL Server LocalDB is installed
- Check connection string in appsettings.json
- Verify database permissions

**CORS errors:**
- Check CORS configuration in Program.cs
- Verify frontend URL in allowed origins

**Build errors:**
- Clear node_modules and reinstall
- Check .NET SDK version compatibility
- Verify all dependencies are installed

### Getting Help

- Check the GitHub Issues page
- Review the API documentation at `/swagger`
- Ensure all prerequisites are installed

---

**Built with ❤️ using React and .NET**

*Last updated: January 2025*

