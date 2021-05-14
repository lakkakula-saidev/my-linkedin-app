async function LOAD_API(user_id, string_1, string_2) {
  const endpoint = ` https://striveschool-api.herokuapp.com/api/${string_1}/${user_id}/${string_2}`;
  let response;
  let isLoading;
  try {
    response = await fetch(endpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
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
