export default function isFormInvalid(err) {
  return Object.keys(err).length > 0;
}
