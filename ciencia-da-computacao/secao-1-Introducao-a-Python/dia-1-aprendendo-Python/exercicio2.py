# Calcule a média aritmética dos valores contidos em uma lista.
def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)
