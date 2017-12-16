function validatePIN (pin) {
  res = /^(\d){4}\b|^(\d){6}\b/g.test(pin);
  return res;
}