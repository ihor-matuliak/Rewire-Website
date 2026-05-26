---
name: nextjs-vercel-deployment-optimization
description: Next.js deployment optimization for Vercel with mobile-first Tailwind CSS responsive strategies. Use when setting up deployment pipelines, optimizing build configurations, or implementing breakpoint-based responsive layouts with composition patterns and type-safe component architecture.
---

# Next.js Vercel Deployment & Tailwind Responsive Patterns

Production-ready Next.js deployment optimization and mobile-first responsive design patterns.

## When to Apply

- Setting up Vercel deployment pipelines with optimized build settings
- Implementing mobile-first responsive layouts with Tailwind CSS breakpoints
- Migrating from component prop drilling to composition patterns
- Establishing type-safe component architecture with discriminated unions

## Critical Rules

**Server Actions over API Routes**: Use Next.js 15 Server Actions for form submissions and data mutations instead of creating separate API endpoints.

```typescript
// WRONG - Separate API route
export async function POST(request: Request) {
  const data = await request.json()
  // Handle submission
}

// RIGHT - Server Action with 'use server'
async function submitForm(formData: FormData) {
  'use server'
  const email = formData.get("email") as string
  // Direct server-side processing
}
```

**Mobile-First Breakpoint Detection**: Use the 768px breakpoint as the mobile threshold, not viewport-based calculations.

```typescript
// WRONG - Viewport calculations
const isMobile = window.innerWidth <= 768

// RIGHT - Media query listener
const MOBILE_BREAKPOINT = 768
const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
```

**Tailwind Class Conflicts**: Always use `twMerge` with `clsx` to handle conflicting Tailwind classes properly.

```typescript
// WRONG - Class conflicts not resolved
import clsx from 'clsx'
className={clsx('bg-red-500', isActive && 'bg-blue-500')}

// RIGHT - Conflicts resolved with twMerge
import { cn } from '@/lib/utils'
className={cn('bg-red-500', isActive && 'bg-blue-500')}
```

## Key Patterns

### Mobile-First Responsive Hook

```typescript
import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
```

### Class Name Utility for Dynamic Styling

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage with responsive classes
function ResponsiveComponent({ isActive, className }) {
  return (
    <div className={cn(
      // Base mobile-first classes
      "px-4 py-2 text-sm",
      // Tablet and up
      "md:px-6 md:py-3 md:text-base",
      // Desktop and up  
      "lg:px-8 lg:py-4 lg:text-lg",
      // Conditional states
      isActive && "bg-blue-500 text-white",
      className
    )}>
      Content
    </div>
  )
}
```

### Type-Safe Component States

```typescript
type ButtonState =
  | { state: "idle"; disabled?: boolean }
  | { state: "loading" }
  | { state: "error"; message: string }
  | { state: "success" }
  | { state: "disabled"; reason: string }

interface SafeButtonProps {
  status: ButtonState
}

function SafeButton({ status }: SafeButtonProps) {
  const getButtonContent = () => {
    switch (status.state) {
      case "idle": return "Click me"
      case "loading": return "Loading..."
      case "error": return `Error: ${status.message}`
      case "success": return "Success!"
      case "disabled": return `Disabled: ${status.reason}`
    }
  }

  return (
    <button 
      disabled={status.state !== "idle"}
      className="px-4 py-2 md:px-6 md:py-3"
    >
      {getButtonContent()}
    </button>
  )
}
```

### Config Object Pattern for Complex Components

```typescript
interface FormConfig {
  display: {
    showHeader: boolean
    showFooter: boolean
  }
  state: {
    isLoading: boolean
    isError: boolean
  }
  style: {
    isDarkMode: boolean
    isCompact: boolean
  }
  validation: {
    showValidation: boolean
    isRequired: boolean
  }
}

function ConfiguredForm() {
  const formConfig: FormConfig = {
    display: { showHeader: true, showFooter: true },
    state: { isLoading: false, isError: false },
    style: { isDarkMode: false, isCompact: false },
    validation: { showValidation: true, isRequired: true }
  }

  return <FormCard config={formConfig} />
}
```

### Compound Component Architecture

```typescript
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

function ProductCard() {
  return (
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl lg:text-2xl">
          Premium Plan
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-2 md:space-y-4">
        <div className="text-2xl md:text-3xl font-bold">$29/month</div>
        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
          <li>✓ Unlimited projects</li>
          <li>✓ Advanced analytics</li>
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full py-2 md:py-3">Get Started</Button>
      </CardFooter>
    </Card>
  )
}
```

## Common Mistakes

- **Viewport-based mobile detection**: Use media query listeners instead of `window.innerWidth` calculations
- **Missing Tailwind class conflict resolution**: Always combine `clsx` with `tailwind-merge` via the `cn` utility
- **Prop drilling with complex state**: Use discriminated unions and config objects instead of multiple boolean props
- **Desktop-first responsive design**: Start with mobile classes, then add `md:` and `lg:` prefixes for larger screens
- **Separate API routes for simple forms**: Use Server Actions with `'use server'` directive for direct server-side processing