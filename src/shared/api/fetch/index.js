export const getDataJson = async (url, onSucces, onLoading, onError) => {
  onLoading(true);
  try {

    const requestUrl = `${process.env.REACT_APP_SERVER_URL}/${url}`;
    const response = await fetch(requestUrl);

    if (!response.ok) {
      onError(response.status);
    }

    const data = await response.json();

    onSucces(data);
    
  } catch(e) {
    onError(e);
  }
  onLoading(false);
}