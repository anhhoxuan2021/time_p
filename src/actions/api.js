import Axios from 'axios';

	const apiUrl = 'http://592cf3a0e06a4a00113ceac9.mockapi.io/api/v1/book';

  export function getBookId(bookId) {
    return Axios.get(apiUrl + '/' +bookId)
      .then(response => response.data)
      .catch(error => {
        throw(error);
      });
  }
