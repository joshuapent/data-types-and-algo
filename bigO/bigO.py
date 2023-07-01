# translated to python

nemo = ['nemo']
everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']


def findNemo(array):
    for fish in array:
        if (fish == 'nemo'):
            print('Found NEMO!')

findNemo(nemo)
findNemo(everyone)

