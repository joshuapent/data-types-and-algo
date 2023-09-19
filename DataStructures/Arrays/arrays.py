strings = ['a', 'b', 'c', 'd']

strings.append('e')
strings.pop()
strings.insert(0, 'x')

# print(strings)

class Objects:
    def __init__(self, name):
        self.name = name

new_object = Objects("buic")

# print(new_object.name)

class Array:
  def __init__(self):
    self.length = 0
    self.data = {}
  def get(self, index):
     return self.data[index]
  def push(self, item):
     self.data[self.length] = item
     self.length+=1
     return self.length
  def pop(self):
    del self.data[self.length-1]
    self.length-=1 
    return 
  def delete(self, index):
     item = self.data[index]
     self.shift_items(index)
  def shift_items(self, index):
    for item in self.data:
      self.data[index] = self.data[index+1]
      index+=1
    del self.data[self.length-1]
    self.length-=1

 
new_array = Array()
new_array.push('hi')
new_array.push('you')
new_array.pop()
new_array.pop()
# print(new_array.data, new_array.length)

def reverse_string(string):
  if type(string) == type(''):
    new_string = ''
    idx = len(string)
    for letter in string:
      print(letter)
      new_string += string[idx-1]
      idx-=1
    return new_string

print(reverse_string('there'))

def merge_sorted_arrays(arr1, arr2):
  array = arr1 + arr2
  array2 = []
  for num in array:
    if array2 == []:
      array2[0] = num
    elif num > array2[len(array2)]:
      
      array2[len(array2)]

merge_sorted_arrays([1, 6], [2, 9])