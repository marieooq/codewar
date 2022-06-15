function lovefunc(flower1: number, flower2: number): boolean {
  // Do we love each other?
  let result: boolean;
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    result = false;
  } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    result = true;
  } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// better solution
// function lovefunc(flower1: number, flower2: number): boolean {
//   return flower1 % 2 != flower2 % 2;
// }
