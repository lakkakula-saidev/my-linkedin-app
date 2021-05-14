async function ValidateModal(Data) {
  console.log(Data);
  const valArray = Object.values(Data);
  const testing = valArray.filter((item) => item === "");
  console.log(testing.length > 0);
  return testing.length > 0;
}

export default ValidateModal;
