import { createAuthClient } from "better-auth/react"
export const {signIn, signUp, useSession, getSession, signOut} = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3000'
})