'use strict';

function makeIfoOd(invalid) {
  return (expression, callback) => {
    let result;
    if (!invalid) {
      if (!callback) {
        expression();
        result = true;
      } else if (result = expression()) {
        callback();
      }
    }
    return {
      od: makeIfoOd(result)
    };
  };
}
const ifo = makeIfoOd(false);
module.exports = ifo;
