/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (map.has(num)) {
                return [map.get(num), i]
            } else {
                map.set(target - num, i);
            }
        }
    }
;

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));