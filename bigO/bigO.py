# translated to python

nemo = ['nemo']
everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']


def findNemo(array):
    for nemo, index in array:
        print(index)
        if (nemo == 'nemo'):
            print('Found NEMO!')

findNemo(nemo)

