import random


"""
import words from ("words.py")
picked = random.choice(words)

print(picked)

guess = input("Enter a letter")

if(guess in picked):
    print("Right Letter")
else:
    print("Wrong Letter")

print(picked)
"""

words = ["python", "nigeria", "coding"]

def get_word():
    random.choice(words)

def my_name_printer():
    print("Emmanuel")


print("Your slip is ready!")
my_name_printer()