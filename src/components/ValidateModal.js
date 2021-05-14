async function ValidateModal(Data) {
  /* 
  console.log(Data); */
  const valArray = Object.values(Data);
  const testing = valArray.filter((item) => item === "");
  console.log(testing.length);
  return testing.length < 6;
}

export default ValidateModal;
