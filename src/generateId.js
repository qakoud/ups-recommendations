export default generateId() {
  return Math.floor(Math.random() * Math.pow(10, 5)).toString() + Date.now().toString().slice(-10)
}
