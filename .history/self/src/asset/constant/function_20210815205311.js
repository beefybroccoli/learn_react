export function func_fetch_data(
  API_URL,
  cb_setData,
  cb_setLoadingState,
  cb_setError
) {
  debugger;
  cb_setLoadingState(true);
  debugger;
  cb_setData("(sample data)");
  fetch(API_URL)
    .then((response) => cb_setData(response))
    .catch((error) => cb_setError(error));
  cb_setLoadingState(false);
}
