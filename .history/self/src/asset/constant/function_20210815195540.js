export function func_fetch_data(
  API_URL,
  cb_setData,
  cb_setLoadingState,
  cb_setError
) {
  cb_setLoadingState(true);

  fetch(API_URL)
    .then((response) => {
      cb_setData(response.json());
    })
    .catch((error) => cb_setError(error));

  cb_setLoadingState(false);
}
