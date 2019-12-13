import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', { username, password})
      .then(response => Promise.resolve(response.data))
      // .catch(error => console.error("error")) 
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => {
      console.log(response)
      return response.data})
  }
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

  handleUpload = (picture) => {
    return this.service.post('/upload', picture)
    .then(res => res.data)
    .catch(err => console.error(err))
  }

  handleUserPicUpload = (picture) => {
    return this.service.post('/uploadUserPic', picture)
    .then(res => res.data)
    .catch(err => console.error(err))
  }


  // upload = (picture) => {
  //   return this.service.post('/upload', picture)
  //   .then(res => Promise.resolve(res.data))
  //   .catch(error => console.error(error))
  // }

}

export default AuthService;