const generateSkeletonRows = () => {
  let count = 0;
  const output = [];
  while (count < 10) {
    output.push({});
    count++;
  }

  return output;
};

export { generateSkeletonRows };
