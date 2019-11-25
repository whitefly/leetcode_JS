/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort(function (o1, o2) {
        return o1 - o2;
    });

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i - 1] === nums[i]) continue;


        for (let j = i + 1; j < nums.length; j++) {
            if (j !== i + 1 && nums[j - 1] === nums[j]) continue;
            const target2 = target - (nums[i] + nums[j]);
            let k = j + 1;
            let z = nums.length - 1;

            while (k < z) {
                let sum = nums[k] + nums[z];
                if (sum === target2) {
                    result.push([nums[i], nums[j], nums[k], nums[z]]);
                    k++;
                    z--;
                    while (i < z && nums[k - 1] === nums[k]) k++;
                    while (k < z && nums[z + 1] === nums[z]) z--
                } else if (sum < target2) {
                    k++;
                } else {
                    z--;
                }
            }

        }


    }
    return result;
};

// nums = [1, 0, -1, 0, -2, 2];
nums = [0, 0, 0, 0];
console.log(fourSum(nums, 0));
