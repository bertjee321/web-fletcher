# Web Fletcher

A modern web application built with Next.js that provides design system configuration and management capabilities.

## Overview

Web Fletcher is a Next.js-based application that enables users to configure and customize design systems through an intuitive interface. The application leverages AI capabilities through OpenAI integration to assist with design decisions and content generation.

## Technology Stack

- **Framework**: Next.js 15.1.3 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **AI Integration**: OpenAI API
- **Build Tool**: Turbopack (development)

## Project Structure

```
web-fletcher/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── sessions/          # Session-related pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── design/           # Design system components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── lib/                  # Utility libraries
│   ├── constants/        # Application constants
│   ├── enums/            # TypeScript enumerations
│   ├── hooks/            # Custom React hooks
│   ├── models/           # Data models
│   └── utils/            # Utility functions
├── public/               # Static assets
└── server/              # Server-side code
    └── agents/          # AI agent implementations
```

## Key Features

- Design system configuration interface
- Style customization options:
  - Color scheme selection
  - Primary color configuration
  - Border radius settings
  - Typography/font selection
  - Spacing configuration
  - Tone/voice settings
- AI-powered design assistance
- Session management
- Real-time design preview

## Getting Started

### Prerequisites

- Node.js (version compatible with Next.js 15)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with required environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm start
```

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration (implied)
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## Current Status

### Completed

- Basic Next.js application structure with App Router
- Design system input components:
  - Color scheme selector
  - Primary color picker
  - Border radius configurator
  - Font/typography selector
  - Spacing controls
  - Tone selector
- OpenAI API integration foundation
- TypeScript type definitions
- Core UI component library
- Development environment setup
- Session management structure

### In Progress

- AI agent implementation for design recommendations
- Real-time design preview functionality
- Session persistence and retrieval through localStorage
- Component documentation

### To Do

- Complete AI agent integration for design suggestions
- Implement design system export functionality
- Add design preview/mockup generation
- Create comprehensive component documentation
- Add unit and integration tests
- Implement design history/versioning
- Add collaborative features
- Optimize performance and bundle size
- Implement design token generation
- Add support for custom design variables
- Create example templates/presets
- Create user accounts with authentication
- Create user onboarding flow
- Add error boundary implementations
- Develop API documentation
- Add rate limiting for API routes

## Contributing

This project follows standard Git workflow practices. Please ensure all code passes linting and type checking before submitting changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Documentation

Additional project documentation can be found in:
- `project-notes.md` - Development notes
- `web-fletcher-prd.md` - Product requirements document
