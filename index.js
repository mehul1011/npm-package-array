function maxSubArraySum(arr) {
  n = arr.length;
  max_so_far = -Math.pow(10, 8);
  curr_max = 0;
  for (let i = 0; i < n; i++) {
    curr_max = curr_max + arr[i];
    if (curr_max > max_so_far) {
      max_so_far = curr_max;
    }
    if (curr_max < 0) {
      curr_max = 0;
    }
  }
  return max_so_far;
}

module.exports = maxSubArraySum;
