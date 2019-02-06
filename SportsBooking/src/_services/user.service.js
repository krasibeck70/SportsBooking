import config from 'config';
import { authHeader } from '../_helpers';
import Axios from 'Axios';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = {
        username: username,
        password: password,
        deviceId: 'testid'
      }
      const configOptions = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

    return Axios.post(`${config.apiUrl}/auth/login`, requestOptions,configOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            user = {
                token: user.token
            }
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        headers: authHeader()
    };

    return Axios.post(`${config.apiUrl}/sportPlaces`,"", requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse).then((result) =>{
        var places = {};
        places = result;
        localStorage.setItem('places', JSON.stringify(places));
    });
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log(response);
    return new Promise((resolve,reject) => {
        const data = response.data;
        console.log()
        if (data.statusCode !== 200) {
            if (data.statusCode === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data.statusText && data.statusText) || data.statusText;
            reject(error);
        }

        resolve(data.result);
    })
}