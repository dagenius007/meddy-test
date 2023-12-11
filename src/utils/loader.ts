const generateSkeletonRows = () => {
  let count = 0;
  const output = [];
  while (count < 20) {
    output.push({});
    count++;
  }

  return output;
};

export { generateSkeletonRows };
