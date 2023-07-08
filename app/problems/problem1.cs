using System;

namespace MyApp {
    internal class Program {
        static void compArrays(int[] array1, int[] array2) {
          for (int i = 0; i < array1.Length; i++) {
            for (int j = 0; j < array1.Length; i++) {
              if (array1[i] != array2[j]) {
                break;
              } else {
                return true;
              }
            }
          }
          return false;
        }
        static void Main(string[] args) {
          int[] array1 = {1, 2, 3, 4};
          int[] array2 = {5, 6, 7, 8, 9};
          int[] array3 = {1, 9, 10};
          bool result = compArrays(array1, array2);
          Console.WriteLine(result);
        }
    }
}