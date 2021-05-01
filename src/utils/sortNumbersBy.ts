export function sortNumbersBy<T, K extends keyof T>(
  key: K,
  arr: T[],
  order: "asc" | "dsc" = "asc",
): T[] | undefined {
  if (typeof arr[0][key] !== "number") return arr

  const copyOfArray = [...arr].sort(
    (a: T, b: T) => Number(a[key]) - Number(b[key]),
  )

  return order === "dsc" ? copyOfArray.reverse() : copyOfArray
}
