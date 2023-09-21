def two_sum(nums, target):
  n = len(nums)
  for i in range(n - 1):
    for j in range(i + 1, n):
      if nums[i] + nums[j] == target:
        return [i, j]
    return []

    

nums = [1, 5, 9, 4, 10]
target = 5
print(two_sum(nums, target))