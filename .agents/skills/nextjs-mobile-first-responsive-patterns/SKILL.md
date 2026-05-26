---
name: nextjs-mobile-first-responsive-patterns
description: "Mobile-first responsive component patterns for Next.js. Use when building responsive layouts, managing mobile breakpoints, avoiding prop drilling, or implementing variant-based component APIs for mobile-optimized designs."
---

# Next.js Mobile-First Responsive Patterns

Component architecture patterns optimized for mobile-first responsive design in Next.js applications.

## When to Apply

- Building responsive components with mobile-first breakpoints
- Converting prop-heavy components to variant-based APIs
- Managing responsive state across component hierarchies
- Implementing compound components for flexible layouts

## Critical Rules

**Mobile Breakpoint Detection**: Always handle undefined state during hydration

```typescript
// WRONG - causes hydration mismatch
const isMobile = useIsMobile()
return isMobile ? <MobileView /> : <DesktopView />

// RIGHT - handle undefined state
const isMobile = useIsMobile()
if (isMobile === undefined) return <div>Loading...</div>
return isMobile ? <MobileView /> : <DesktopView />
```

**Class Name Conflicts**: Use cn() utility to prevent Tailwind conflicts

```typescript
// WRONG - classes can conflict
className={`px-4 ${isActive && 'px-6'} ${className}`}

// RIGHT - intelligent merging
className={cn("px-4", isActive && "px-6", className)}
```

**Boolean Prop Explosion**: Replace multiple booleans with variant pattern

```typescript
// WRONG - too many props
<Card isLoading={true} showHeader={false} isCompact={true} isDark={false} />

// RIGHT - single variant
<Card variant="loading" size="compact" />
```

## Key Patterns

### Mobile Breakpoint Hook

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

### Responsive Class Merging Utility

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage with responsive conditions
function ResponsiveCard({ isActive, className }) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-md font-medium",
        "sm:px-6 md:px-8", // responsive padding
        isActive && "bg-blue-500 text-white",
        className
      )}
    />
  )
}
```

### Variant-Based Component API

```typescript
type ButtonVariant = "default" | "destructive" | "outline" | "ghost"
type ButtonSize = "sm" | "default" | "lg" | "icon"

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  asChild?: boolean
}

// Usage
<Button variant="outline" size="sm">Mobile Action</Button>
<Button variant="ghost" size="icon">⚙</Button>
```

### Compound Components for Flexible Layouts

```typescript
function MobileCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Mobile-First Design</Card.Title>
        <Card.Description>Responsive component structure</Card.Description>
      </Card.Header>
      
      <Card.Content>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Mobile: stacked, Desktop: side-by-side */}
        </div>
      </Card.Content>
      
      <Card.Footer>
        <Button className="w-full sm:w-auto">Action</Button>
      </Card.Footer>
    </Card>
  )
}
```

### TypeScript Discriminated Unions for State Safety

```typescript
type ComponentState =
  | { state: "idle"; disabled?: boolean }
  | { state: "loading" }
  | { state: "error"; message: string }
  | { state: "success" }

interface ResponsiveButtonProps {
  status: ComponentState
  isMobile?: boolean
}

function ResponsiveButton({ status, isMobile }: ResponsiveButtonProps) {
  return (
    <button 
      disabled={status.state !== "idle"}
      className={cn(
        "px-4 py-2 rounded",
        isMobile ? "w-full text-sm" : "w-auto text-base"
      )}
    >
      {status.state === "loading" ? "Loading..." : "Submit"}
    </button>
  )
}
```

## Common Mistakes

- **Hydration mismatches**: Always handle undefined state in responsive hooks during SSR
- **Class conflicts**: Don't manually concatenate Tailwind classes; use cn() utility
- **Prop drilling**: Use Context API judiciously for deeply nested responsive state
- **Boolean prop explosion**: Replace with variant patterns when props exceed 3-4 booleans
- **Missing mobile-first**: Apply mobile styles first, then use responsive prefixes (sm:, md:)
- **Rigid layouts**: Use compound components instead of rigid prop-based configurations