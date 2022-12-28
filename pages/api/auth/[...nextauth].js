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
                console.log(credentials)
                console.log(credentials.name)
                const tour = await Tour.findOne({name: credentials.name})
                console.log(tour)
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