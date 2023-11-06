export function handleInputChange(dataObject, setFunction, e) {
  const { id, value } = e.target;
  setFunction({
    ...dataObject,
    [id]: value,
  });
}
