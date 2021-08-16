export function fetch_data(API_URL, cb_setData, cb_setState, cd_setError) {

    fetch(API_URL)
    .then((response) => {
        response.json();
        )}
    .then()
    .then(() => setLoading(false))
    .catch(setError);
}