export function fetch_data(API_URL, cb_setData, cb_setState, cd_setError) {
  fetch(API_URL)
    .then(() => cb_setState(true))
    .then((response) => {
      cb_setData(response.json());
    })
    .then(() => cb_setState(false))
    .catch((error) =>setError);
}
