import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import Tour from '../../../models/Tour'
export const authOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials) {
                const tour = await Tour.findOne({name: credentials.name, password: credentials.password})
                if(tour) {
                    const user = {
                        id: tour.id,
                        name: tour.name,
                    }
                      return user
                }
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
          session.user = token  // Setting token in session
          return session
        },
      },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)