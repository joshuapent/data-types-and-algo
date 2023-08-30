strings = ['a', 'b', 'c', 'd']

strings.append('e')
strings.pop()
strings.insert(0, 'x')

print(strings)

class Objects:
    def __init__(self, name):
        self.name = name

new_object = Objects("buic")

print(new_object.name)

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


new_array = Array()
new_array.push('hi')
new_array.push('you')
new_array.pop()
new_array.pop()
print(new_array.data, new_array.length)

