async function POST_API(Data, user_id, string_1, string_2) {
  const endpoint = ` https://striveschool-api.herokuapp.com/api/${string_1}/${user_id}/${string_2}`;
  /*   console.log(Data, "This is the data..."); */
  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
      },
      body: JSON.stringify(Data),
    });
    if (response.ok) {
      console.log("Your Data is Sucessfully Posted");
    }
  } catch (error) {
    return alert(error);
  }
}

export default POST_API;
