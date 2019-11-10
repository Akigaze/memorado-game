export const fill = (array, filler, start = 0, end = array.length) => {
  if (typeof filler === "function") {
    let result = Array.from(array);
    for (let i = start; i < end; i++) {
      result[i] = filler(i);
    }
    return result;
  }
  return array.fill(filler, start, end);
};
