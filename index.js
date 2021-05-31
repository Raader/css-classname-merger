/**
 * merges given classes according to conditions
 * @param  {...{name:string,condition:boolean}} classes
 * @returns {string} unified class name
 */
function mergeClassNames(...classes) {
  if (classes.length <= 0) return "";
  let classList = [];
  for (let classWrap of classes) {
    if (classWrap.name && classWrap.condition) classList.push(classWrap.name);
    else if (typeof classWrap === "string") classList.push(classWrap);
  }
  const unifiedClass = classList.join(" ");
  return unifiedClass;
}

/**
 * fail safe switch between classes
 * @param {number | boolean} index
 * @param {...string} classNames
 * @returns {string} class name
 */
function switchClassNames(index, ...classNames) {
  if (typeof index === "boolean") index = index ? 1 : 0;
  const className = classNames[index];
  if (!className) return "";
  return className;
}

module.exports = { mergeClassNames, switchClassNames };
