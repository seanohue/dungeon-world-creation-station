export default function createId (name = '') {
  return name
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-')
}
