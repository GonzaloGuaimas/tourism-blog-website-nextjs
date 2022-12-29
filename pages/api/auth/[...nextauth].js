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
                const tour = await Tour.findOne({name: credentials.name})
                if(credentials.password === tour.password) {
                    return {
                        user: {
                            userName: tour.name
                        }
                    }
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)