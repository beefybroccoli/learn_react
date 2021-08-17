export function func_fetch_data(
  API_URL,
  cb_setData,
  cb_setLoadingState,
  cb_setError
) {
  
  cb_setLoadingState(true);

  cb_setData("(sample data)");
  try{
    fetch(API_URL)
      .then((response) => cb_setData(response))
      .catch((error) => cb_setError(error));
  }catch()

  finally{

    cb_setLoadingState(false);
  }
}

export function get_stateLoading(stateLoading) {
  if (stateLoading === null) {
    console.log("case null, stateLoading = ", stateLoading);
    return "null";
  } else if (stateLoading === true) {
    console.log("case true, stateLoading = ", stateLoading);
    return "stateLoading = true";
  } else if (stateLoading === false) {
    console.log("case false, stateLoading = ", stateLoading);
    return "stateLoading = false";
  } else {
    console.log("case unknown, stateLoading = ", stateLoading);
    return "stateLoading = unknown";
  }
}
