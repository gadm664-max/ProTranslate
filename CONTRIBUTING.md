# Contributing to ProTranslate

We're excited to have you contribute to ProTranslate! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and professional in all interactions. We are committed to providing a welcoming and inspiring community for all.

## Getting Started

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Process

### Before Starting

1. Check existing issues to avoid duplicates
2. Discuss major changes in an issue first
3. Set up local development environment (see [SETUP.md](./docs/SETUP.md))

### Coding Standards

#### JavaScript/TypeScript
- Use ESLint configuration from the project
- Format code with Prettier
- Use TypeScript for type safety
- Write meaningful variable/function names

```bash
# Check linting
npm run lint

# Auto-fix
npm run lint:fix
```

#### Git Commit Messages
- Use clear, descriptive messages
- Start with a verb: `Add`, `Fix`, `Update`, `Remove`
- Keep it concise but informative

Examples:
- `Add real-time translation feature`
- `Fix WebSocket connection issue`
- `Update documentation for API endpoints`

### Branch Naming
- Feature: `feature/description`
- Bug fix: `bugfix/description`
- Documentation: `docs/description`
- Hotfix: `hotfix/description`

## Pull Request Process

### Before Submitting

1. **Update documentation** - Update README.md and relevant docs
2. **Add tests** - Write tests for new features
3. **Run tests** - Ensure all tests pass: `npm test`
4. **Check linting** - Fix any linting issues: `npm run lint:fix`
5. **Update CHANGELOG** - Document your changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Related Issue
Fixes #(issue number)

## Testing
- [ ] I have tested locally
- [ ] I have added tests for new features
- [ ] All tests pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] No new warnings generated
- [ ] Code is self-documented where needed
```

## Testing Guidelines

### Unit Tests
```bash
cd backend
npm test -- --watch
```

### Integration Tests
```bash
cd backend
npm run test:integration
```

### Coverage Requirements
- Aim for 80%+ code coverage
- New features should have tests

## Documentation

### When to Update Docs
- API changes
- New features
- Configuration changes
- Installation process changes

### Locations
- API endpoints: `docs/API.md`
- Architecture: `docs/ARCHITECTURE.md`
- Setup: `docs/SETUP.md`
- README.md for overview changes

## Issue Reporting

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Screenshots/logs if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case and benefits
- Potential implementation approach
- Mockups/examples if helpful

## Code Review Process

Our team will review your PR as soon as possible. We may:
- Request changes
- Ask questions about your implementation
- Suggest improvements

Please address all feedback promptly.

## Performance Considerations

- Minimize database queries
- Cache frequently used data
- Optimize API response times
- Use async/await for I/O operations
- Profile code for bottlenecks

## Security

- Never commit secrets or API keys
- Validate all user inputs
- Use prepared statements for SQL
- Follow OWASP guidelines
- Report security issues privately to security@protranslate.dev

## Project Structure

Familiarize yourself with:
- Backend: `backend/src/` structure
- Frontend: `frontend/src/` components
- Tests: Corresponding `tests/` directories
- Migrations: Database structure in `backend/migrations/`

## Questions?

- Check [Discussions](https://github.com/gadm664-max/ProTranslate/discussions)
- Review existing PRs and issues
- Email: dev@protranslate.dev

## Recognition

Contributors will be:
- Listed in README.md
- Mentioned in release notes
- Added to contributors page

Thank you for contributing to ProTranslate! 🚀
