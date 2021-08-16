export function func_fetch_data(API_URL, cb_setData, cb_setState, cb_setError) {
  cb_setState(true);

  fetch(API_URL)
    .then((response) => {
      cb_setData(response.da);
    })
    .catch((error) => cb_setError(error))
    .finally(() => {
      cb_setState(false);
    });
}