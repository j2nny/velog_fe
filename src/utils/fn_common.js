//날짜 yyyymmdd 형식
export const dayString = (date) => {
  return date.getFullYear() + ("0" + (1 + date.getMonth())).slice(-2) + ("0" + date.getDate()).slice(-2)
}
