// Service modules export business/app logic such as managing tokens etc
// Often depend on API modules for making AJAX requests to the server

import * as usersAPI from './users-api'

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    
   // TODO return user from token instead
    localStorage.setItem('token', token)
    return getUser()
}

export function getToken() {
    const token = localStorage.getItem('token')
    if (!token) return null;
    // Obtain payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT exp is expressed in seconds, no ms
    if(payload.exp * 1000 < Date.now()){
        localStorage.removeItem('token');
        return null
    }
    return token
}

export function getUser(){
    const token = getToken();
    // If there is a token, return the user in the
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    localStorage.removeItem('token')
}

export function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
}