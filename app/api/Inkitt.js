export default {

  getChapterOne: () => {
    let url = 'https://cap_america.inkitt.de/1/stories/106766/chapters/1';
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => { throw(error) });
  },

};