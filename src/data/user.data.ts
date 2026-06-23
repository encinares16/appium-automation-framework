import {  Users } from "../interfaces/user.interface.ts"
import dotenv from 'dotenv'

dotenv.config()

export const validUser: Users = {
  username: process.env.STANDARD_USER || '',
  password: process.env.STANDARD_PASSWORD || ''
}