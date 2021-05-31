function mergeClassNames(...classes) {
  let classList = [];
  for (let className of classes) {
    if (className.class && className.condition) classList.push(className.class);
  }
  const unifiedClass = classList.join(" ");
  return unifiedClass;
}

module.exports = mergeClassNames;
