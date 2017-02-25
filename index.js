'use strict';

function getVariants (email) {
  let str = email.split('@')[0];
  let ret = [];

  (function proc (str, buff, i, j, n) {
    if (i === n) {
      ret.push(buff + '@' + email.split('@')[1]);
      return;
    }

    buff = buff.substr(0, j) + str[i] + buff.substr(j + 1);
    proc(str, buff, i + 1, j + 1, n);
    buff = buff.substr(0, j) + '.' + str[i] + buff.substr(j + 2);
    proc(str, buff, i + 1, j + 2, n);
  })(str, str[0], 1, 1, str.length);

  return ret;
}

module.exports = getVariants;
