function pyramid(pattern, rows, inverted) {
  let result = "\n";

  const buildRow = (spaces, chars) => {
    return " ".repeat(spaces) + pattern.repeat(chars);
  };

  if (!inverted) {
    // Vertex facing upwards
    for (let i = 0; i < rows; i++) {
      const spaces = rows - i - 1;
      const chars = 2 * i + 1;
      result += buildRow(spaces, chars) + "\n";
    }
  } else {
    // Vertex facing downwards
    for (let i = rows - 1; i >= 0; i--) {
      const spaces = rows - i - 1;
      const chars = 2 * i + 1;
      result += buildRow(spaces, chars) + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 4, false))
