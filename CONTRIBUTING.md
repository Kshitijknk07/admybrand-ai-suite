# Contributing to ADmyBRAND AI Suite 🤝

Thank you for your interest in contributing to ADmyBRAND AI Suite! We welcome contributions from developers, designers, and community members who share our vision of democratizing AI-powered marketing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Submitting Changes](#submitting-changes)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)

## 🎯 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or bun
- Git
- A code editor (VS Code recommended)

### Setup

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/ai-suite.git
   cd ai-suite
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Run quality checks**
   ```bash
   npm run check-all
   ```

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `test/test-description` - Adding or updating tests

### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
feat(auth): add OAuth2 authentication
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
refactor(components): extract reusable hook
```

## 📏 Code Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` type - use proper interfaces
- Use strict mode in tsconfig.json

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop types and interfaces
- Implement proper error boundaries

### Styling

- Use Tailwind CSS for styling
- Follow our design system
- Ensure responsive design
- Maintain accessibility standards

### ESLint & Prettier

- All code must pass ESLint checks
- Use Prettier for code formatting
- Run `npm run lint:fix` before committing
- Maintain consistent code style

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for all new features
- Maintain test coverage above 80%
- Use descriptive test names
- Test both success and error cases

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and components
- Document complex business logic
- Keep README files updated
- Update API documentation when needed

### Component Documentation

- Document component props and usage
- Provide usage examples
- Include accessibility considerations
- Update storybook stories

## 📤 Submitting Changes

### Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, well-documented code
   - Add tests for new functionality
   - Update documentation as needed

3. **Run quality checks**

   ```bash
   npm run check-all
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use the PR template
   - Provide clear description of changes
   - Link related issues
   - Request reviews from maintainers

### PR Review Process

- All PRs require at least one review
- Address review comments promptly
- Maintainers will merge after approval
- CI/CD checks must pass

## 🐛 Issue Reporting

### Before Reporting

1. Check existing issues for duplicates
2. Search documentation for solutions
3. Try reproducing the issue locally

### Issue Template

Use our issue template and provide:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Environment details** (OS, browser, version)
- **Screenshots or videos** if applicable
- **Error messages** and stack traces

## 💡 Feature Requests

### Before Requesting

1. Check if the feature already exists
2. Review the roadmap and existing issues
3. Consider the impact on existing functionality

### Feature Request Template

- **Clear description** of the feature
- **Use case** and problem it solves
- **Proposed solution** or approach
- **Impact** on existing functionality
- **Mockups or examples** if applicable

## 🏷️ Labels

We use the following labels to categorize issues and PRs:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `priority: high` - High priority issues
- `priority: low` - Low priority issues
- `wontfix` - This will not be worked on

## 🎉 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor hall of fame
- Social media mentions

## 📞 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Discord**: Join our community server
- **Email**: contact@admybrand.ai
- **Documentation**: [docs.admybrand.ai](https://docs.admybrand.ai)

## 🙏 Thank You

Thank you for contributing to ADmyBRAND AI Suite! Your contributions help make AI-powered marketing accessible to businesses worldwide.

---

**Happy coding! 🚀**
