/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(function (o1, o2) {
        return o1 - o2;
    });

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i - 1] === nums[i]) continue;
        const target = -nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (i < k && nums[j - 1] === nums[j]) j++;
                while (j < k && nums[k + 1] === nums[k]) k--
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));