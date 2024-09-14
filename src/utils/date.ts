/**
 * 格式化日期为YYYY-MM-DD
 **/
export const formatDate = (date: Date): string => {
  const year: number = date.getFullYear()
  const month: number = date.getMonth() + 1
  const day: number = date.getDate()
  return (
    year.toString() +
    "-" +
    (month.toString().length === 1 ? "0" : "") +
    month +
    "-" +
    day
  )
}
