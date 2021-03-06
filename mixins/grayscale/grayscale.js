/**
 * GrayScale mixin
 */

var grayScale = function grayScale(value) {
  value = value || '0';
  var numRegex = /\d/gi;
  var numWithoutValue = /(?:\s|^)(\.?\d+\.?\d*)(?![^(]*\)|\w|%|\.)/gi;

  if (numRegex.test(value)) {
    value = value.replace(numWithoutValue, function(match) {
      return match + '%';
    });
  }

  return value;
};

/**
 * Result settings
 */

grayScale.result = {
  property: 'filter',
  value: 'grayscale({{ result }})',
};

/**
 * For which browsers is this mixin specified
 */

grayScale.vendors = ['webkit', 'moz', 'ms'];

/**
 * Export mixin
 */

module.exports = grayScale;
