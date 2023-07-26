// Service modules export business/app logic such as managing tokens etc
// Often depend on API modules for making AJAX requests to the server

import * as usersAPI from './users-api'
export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
   // TODO return user from token instead
    return token
}