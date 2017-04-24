function cartesianProduct(arrays){
  if (arrays.length < 2) { return []; }
  return arrays.reduce((acc, val) => {
    return acc.map(x => {
      return val.map(y => {
        return x.concat(y)
      })
    }).reduce((a,v) => a.concat(v), []);
  }, [[]]);
}

module.exports = {
  cartesianProduct
};
