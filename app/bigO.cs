using System;

namespace MyApp {
    internal class Program {
        static void findNemo(string[] array) {
          for (int i = 0; i < array.Length; i++) {
            Console.WriteLine(i);
            if (array[i] == "nemo") {
              Console.WriteLine("Found", array[i]);
            }
          }
        }
        static void compressFirstBox(int[] array) {
          Console.WriteLine(array[0]);
        }
        static void logFirstTwoBoxes(int[] array) {
          Console.WriteLine(array[0]);
          Console.WriteLine(array[1]);
        }
        static void nestedLoop(int[] array) {
          for (int i = 0; i < array.Length; i++) {
            for (int j = 0; j < array.Length; j++) {
              Console.WriteLine(array[i] + " " + array[j]);
            }
          }
        }
        static void printSumPairs(int[] nums) {
          Console.WriteLine("The numbers are: ");
          foreach(int num in nums) {
            Console.WriteLine(num);
          }
          Console.WriteLine("And their sums are: ");
          foreach(int num in nums) {
            foreach(int num2 in nums) {
              Console.WriteLine(num + num2);
            }
          }
        }
        static void Main(string[] args) {
            string[] nemo = {"nemo"};
            string[] everyone = {"dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"};
            int[] numOne = {1};
            int[] numTwo = {2, 3};
            int[] numThree = {4, 5, 6, 7, 8, 9};
            // compressFirstBox(numOne);
            // compressFirstBox(numTwo);
            // compressFirstBox(numThree);
            // findNemo(everyone);
            // Console.WriteLine("Hello World!");
            // logFirstTwoBoxes(numTwo);
            // logFirstTwoBoxes(numThree);
            // nestedLoop(numThree);
            // printSumPairs(numTwo);
        }
    }
}