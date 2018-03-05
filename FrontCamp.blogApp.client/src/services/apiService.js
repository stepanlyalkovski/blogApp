import fetch from 'cross-fetch';

class ApiService {
  getBlogs() {
    return fetch('/api/blogs/')
      .then(res => {
        ApiService.ensureSuccessStatusCode(res);

        return res.json();
      });
  }

  getBlog(id) {
    return fetch(`/api/blogs/${id}`)
      .then(res => {
        ApiService.ensureSuccessStatusCode(res);

        return res.json();
      });
  }

  addPost(post, token) {
    return fetch('/api/blogs/',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'authorization': `bearer ${token}`
        },
        body: JSON.stringify(post)
      })
      .then(res => {
        return;
      });
  }

  register(user) {
    return fetch("/api/register",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      .then(res => {
        ApiService.ensureSuccessStatusCode(res);
        return res.json();
      });
  }

  login(user) {
    return fetch("/api/login/",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then(res => {
        ApiService.ensureSuccessStatusCode(res);
        return res.json();
      });
  }

  static ensureSuccessStatusCode(res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
  }
}

export default new ApiService();