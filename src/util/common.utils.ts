export class CommonUtils {
  static generate (start: number, end: number, step = 1): Array<number> {
    let index = -1
    let length = Math.max(Math.ceil((end - start) / (step)), 0) + 1
    const result = new Array(length)
    while (length--) {
      result[++index] = start
      start += step
    }
    return result
  }

  static exist (value: never): boolean {
    return value !== null && value !== undefined
  }
}
