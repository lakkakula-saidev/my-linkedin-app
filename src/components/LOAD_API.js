async function LOAD_API(user_id, string_1, string_2) {
  const endpoint = ` https://striveschool-api.herokuapp.com/api/${string_1}/${user_id}/${string_2}`;
  let response;
  let isLoading;
  try {
    response = await fetch(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MjM2NTczNzksImV4cCI6MTYyNDg2Njk3OX0.Ca6eiVDE1TdO2u0OAs5NIlSfceE78PpbiBrStWjFMGE",
      },
    });
    if (response.ok) {
      response = await response.json();
      isLoading = true;
      console.log(response);
    }
  } catch (error) {
  } finally {
    return [response, isLoading];
  }
}

export default LOAD_API;
