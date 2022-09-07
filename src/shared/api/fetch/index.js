// export const getDataJson = async (url, onSucces, onLoading, onError) => {
//   onLoading(true);
//   try {

//     const requestUrl = `${process.env.REACT_APP_SERVER_URL}/${url}`;
//     const response = await fetch(requestUrl);

//     if (!response.ok) {
//       onError(response.status);
//     }

//     const data = await response.json();

//     onSucces(data);
    
//   } catch(e) {
//     onError(e);
//   }
//   onLoading(false);
// }


// Попробовал переписать на промисы
export const getDataJson = (url, onSucces, onLoading, onError) => {
  onLoading(true);
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/${url}`;
  fetch(requestUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => onSucces(data))
    .catch(error => onError(error))
    .finally(() => onLoading(false))
}

export const postDataJson = (url, data, onSucces, onLoading, onError) => {
  onLoading(true);
  const requestUrl = `${process.env.REACT_APP_SERVER_URL}/${url}`;
  fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(() => onSucces())
    .catch(error => onError(error))
    .finally(() => onLoading(false))
}