# Web Fletcher

Internal design system configuration and management application.

## Technology Stack

- **Framework**: Next.js 15.1.3 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **AI Integration**: OpenAI API
- **Build Tool**: Turbopack (development)

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

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## Documentation

Additional project documentation:
- `web-fletcher-prd.md` - Product requirements document
