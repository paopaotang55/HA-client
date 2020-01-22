import { fetchGet } from './fetch';

export const getUsers = () => fetchGet('/users');

export const getUserInfo = data => fetchGet(`/users/${data}`);

export const getUserTodos = data => fetchGet(`/todos/${data}`);

export const getPosts = () => fetchGet('/posts');

export const getComments = data => fetchGet(`/getComments/${data}`);
