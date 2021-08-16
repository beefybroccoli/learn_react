export function func_fetch_data(API_URL, cb_setData, cb_setState, cb_setError) {
  
    cb_setState(true);
    fetch(API_URL)
    .then(() => )
    .then((response) => {
      cb_setData(response.json());
    })
    .then(() => cb_setState(false))
    .catch((error) => cb_setError(error));
}
