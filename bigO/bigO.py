# translated to python

nemo = ['nemo']
everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']


def findNemo(array):
    for fish in array:
        if (fish == 'nemo'):
            print('Found NEMO!')

# findNemo(nemo)
# findNemo(everyone)

def compressFirstBox(boxes):
    print(boxes[0])

# compressFirstBox([2, 3, 4, 5])
# compressFirstBox([6, 7])
# compressFirstBox([8])

def logFirstTwoBoxes(boxes):
    print(boxes[0], boxes[1])

# logFirstTwoBoxes([1, 2])
# logFirstTwoBoxes([3, 4, 5, 6, 7, 8, 9, 10])

def nestedLoop(array):
    for i in array:
        for j in array:
            print(i, j)

# nestedLoop([1, 2, 3, 4])

def printSumPairs(nums):
    print("The numbers are: ")
    for num in nums:
        print(num)
    print("And their sums are: ")
    for num in nums:
        for num2 in nums:
            print(num + num2)

printSumPairs([1, 2])