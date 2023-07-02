array1 = [1, 2, 3, 4]
array2 = [5, 6, 7, 8, 9]
array3 = [1, 9, 10]

def compArrays(arrayA, arrayB):
    for num1 in arrayA:
       for num2 in arrayB:
           if num1 != num2:
              break
           else: 
              return True
    return False 

result = compArrays(array1, array3)
print(result)
