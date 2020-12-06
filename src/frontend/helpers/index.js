export const capitalize = (string) => {
  const firstChar = string.charAt(0)
  return firstChar.toUpperCase() + string.slice(1)
}
