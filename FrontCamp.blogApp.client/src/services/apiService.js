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

  static ensureSuccessStatusCode(res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
  }
}

export default new ApiService();