# ProTranslate Setup Guide

## Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- PostgreSQL 14.0 or higher
- Redis 7.0 or higher
- Docker (optional, for containerized setup)

## Local Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/gadm664-max/ProTranslate.git
cd ProTranslate
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install mobile dependencies
cd mobile
npm install
cd ..
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### 4. Database Setup

#### Option A: Using Docker
```bash
# Start PostgreSQL and Redis
docker-compose up -d postgres redis

# Wait for services to be ready
sleep 10

# Run migrations
cd backend
npm run migrate
cd ..
```

#### Option B: Manual Installation

**PostgreSQL:**
```bash
# macOS with Homebrew
brew install postgresql
brew services start postgresql

# Create database
createdb protranslate
```

**Redis:**
```bash
# macOS with Homebrew
brew install redis
brew services start redis
```

**Run migrations:**
```bash
cd backend
npm run migrate
cd ..
```

### 5. API Keys Configuration

Get your API keys from:

1. **Google Cloud Translation**
   - Visit: https://cloud.google.com/translate
   - Create project and enable Translation API
   - Generate service account key
   - Add to `.env`: `GOOGLE_TRANSLATE_API_KEY`

2. **OpenAI API** (for Whisper)
   - Visit: https://platform.openai.com/api-keys
   - Create API key
   - Add to `.env`: `OPENAI_API_KEY`

3. **AWS** (for S3)
   - Create IAM user with S3 access
   - Add credentials to `.env`: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`

### 6. Start Development Servers

```bash
# All services (backend + frontend)
npm run dev

# Or individually:

# Backend only
cd backend
npm run dev

# Frontend only (in new terminal)
cd frontend
npm start

# Mobile only (in new terminal)
cd mobile
npm start
```

### 7. Verify Installation

```bash
# Test backend API
curl http://localhost:5000/health

# Test frontend
open http://localhost:3000
```

## Docker Setup

```bash
# Build all services
npm run docker:build

# Start all services
npm run docker:up

# View logs
docker-compose logs -f

# Stop services
npm run docker:down
```

## Database Migrations

```bash
cd backend

# Run migrations
npm run migrate

# Rollback last migration
npm run migrate:rollback

# Create new migration
npm run migrate:create migration_name
```

## Testing

```bash
# Run all tests
npm test

# Backend tests
cd backend && npm test && cd ..

# Frontend tests
cd frontend && npm test && cd ..

# Coverage report
npm run test:coverage
```

## Project Structure

```
ProTranslate/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── utils/
│   ├── tests/
���   ├── migrations/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── styles/
│   ├── public/
│   └── package.json
│
├── mobile/
│   ├── src/
│   ├── assets/
│   ├── app.json
│   └── package.json
│
└── docs/
    ├── ARCHITECTURE.md
    ├── API.md
    └── SETUP.md
```

## Troubleshooting

### Port Already in Use
```bash
# Backend (5000)
lsof -ti:5000 | xargs kill -9

# Frontend (3000)
lsof -ti:3000 | xargs kill -9

# PostgreSQL (5432)
lsof -ti:5432 | xargs kill -9
```

### Database Connection Error
```bash
# Check PostgreSQL status
pg_isready -h localhost -p 5432

# Check Redis status
redis-cli ping
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Read the [Architecture Documentation](./ARCHITECTURE.md)
2. Review the [API Documentation](./API.md)
3. Check out [Contributing Guidelines](../CONTRIBUTING.md)
4. Deploy to cloud platform

## Support

For issues or questions, please:
- Open a GitHub issue
- Check existing documentation
- Contact support@protranslate.dev
