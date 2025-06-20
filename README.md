# Next.js Application

A modern full-stack web application built with Next.js 15 for the frontend and NestJS for the backend API.

## 🚀 Tech Stack

### Frontend (Next.js)
- **Framework**: Next.js 15.3.3 with Turbopack
- **UI Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Theming**: Next Themes
- **Notifications**: Sonner

### Backend (NestJS)
- **Framework**: NestJS
- **Platform**: Express.js
- **Language**: TypeScript

## 📁 Project Structure

```
project-root/
├── app/                          # Next.js App Router
├── components/                   # React Components
│   ├── ui/                      # UI Components (Radix UI based)
│   ├── LogoutButton.tsx
│   ├── newUserForm.tsx
│   ├── taskCreatorForm.tsx
│   ├── taskEditorForm.tsx
│   ├── taskItems.tsx
│   ├── taskListControls.tsx
│   └── userLoginForm.tsx
├── lib/                         # Utility libraries
├── providers/                   # Context providers
├── public/                      # Static assets
├── schema/                      # Zod schemas
├── types/                       # TypeScript type definitions
└── backend files...             # NestJS backend structure
```

## 🛠 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-name>
```

### 2. Install dependencies

```bash
# Install frontend dependencies
npm install

# If you have a separate backend directory
cd backend
npm install
cd ..
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:



### 4. Run the development servers

#### Start the backend (NestJS)
```bash
# If backend is in a separate directory
cd backend
npm run start:dev

# If backend is in the same project
npm run backend:dev
```

#### Start the frontend (Next.js)
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 📝 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm run start:dev` - Start NestJS in development mode
- `npm run build` - Build NestJS application
- `npm run start:prod` - Start production server

## 🎨 UI Components

The project uses a custom UI component library built on top of Radix UI primitives:

- **Forms**: Login, User Registration, Task Creator/Editor
- **Interactive Elements**: Buttons, Dialogs, Select dropdowns
- **Layout**: Collapsible sections, Labels
- **Feedback**: Toast notifications with Sonner

## 🔧 Key Features

### Authentication
- User login and registration forms
- Logout functionality
- Form validation with Zod schemas

### Task Management
- Task creation and editing
- Task list with controls
- Task item management

### Modern Development Experience
- **Turbopack**: Fast development builds
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **React Query**: Server state management
- **React Hook Form**: Performant forms with easy validation

