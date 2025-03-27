'use client'

import {useEffect, useState} from 'react'
import type {ThemeProviderProps} from 'next-themes' // Import from root instead of /dist/types
import {ThemeProvider as NextThemesProvider} from 'next-themes'

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}