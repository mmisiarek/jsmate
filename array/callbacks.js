/*
 * Functions that can be passed to array functions (map, filter, etc) as callback
 */
function unique(el, index, array) {
  return array.indexOf(el) === index;
}

module.exports = {
  filter: { unique }
};
