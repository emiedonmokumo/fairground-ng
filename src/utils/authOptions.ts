import connectDB from '@/config/db';
import User from '@/models/User';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials: any) {
                // 1. Connect to database
                await connectDB();
                // 2. Check if user exists
                const user = await User.findOne({ email: credentials.email });
                // 3. If user exists, then check password
                if (!user) {
                    throw new Error('Invalid email or password');
                    return null;
                }
                // 4. Return null if user not found or password is invalid
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error('Invalid email or password');
                    return null;
                }

                return user;
            },
        }),
    ],
    callbacks: {
        // Invoked on successful signin
        async signIn({ profile, account }) {
            const { provider }: any = account;
            
            if (provider == "credentials" ) return true;

            const { email, name, picture }: any = profile;
            // 1. Connect to database
            await connectDB();
            // 2. Check if user exists
            const userExists = await User.findOne({ email });
            // 3. If not, then add user to database
            if (!userExists) {
                // Truncate user name if too long
                const username = name.slice(0, 20);

                await User.create({
                    email: email,
                    username,
                    image: picture,
                });
            }
            // 4. Return true to allow sign in
            return true;
        },
        // Modifies the session object
        async session({ session }: { session: any }) {
            // 1. Get user from database
            const user = await User.findOne({ email: session.user.email });
            // 2. Assign the user id to the session
            session.user.id = user._id.toString();
            // 3. return session
            return session;
        },
    },
    pages: {
        signIn: '/auth/login',
    },
};