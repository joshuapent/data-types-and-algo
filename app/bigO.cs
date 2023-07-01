// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using System;

namespace MyApp // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void findNemo(string[] array)
        {
          for (int i = 0; i < array.Length; i++)
          {
            Console.WriteLine(i);
            if (array[i] == "nemo")
            {
              Console.WriteLine("Found", array[i]);
            }
          }
        }
        static void Main(string[] args)
        {
            string[] nemo = {"nemo"};
            string[] everyone = {"dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"};
            findNemo(everyone);
            Console.WriteLine("Hello World!");
        }
    }
}