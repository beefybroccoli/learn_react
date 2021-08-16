export function fetch_data(API_URL, cb_setData, cb_setState, cd_setError) {

    fetch(URL + login)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
}
