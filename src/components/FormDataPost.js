async function FormDataPost(Data, user_id, _id, string_1, string_2) {
  const endpoint = ` https://striveschool-api.herokuapp.com/api/${string_1}/${user_id}/${string_2}/${_id}/picture`;
  /*   console.log(Data, "This is the data..."); */
  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZTllNDYxOWU1ZDAwMTUxZjhmNzkiLCJpYXQiOjE2MjA2MzQwODUsImV4cCI6MTYyMTg0MzY4NX0.LVFiiWvC5hj_tkyYlnYiUZd9DafCRH7foRwmjGXSjPM",
      },
      body: Data,
    });
    if (response.ok) {
      console.log("Your File is posted");
    }
  } catch (error) {
    return alert(error);
  }
}

export default FormDataPost;
