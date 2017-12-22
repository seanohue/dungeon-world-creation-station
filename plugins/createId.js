export default function createId (name = '') {
  return name
    .split(' ')
    .map(String.prototype.toLowerCase.call)
    .join('-')
}
