# Crie uma função que receba um número inteiro N e retorne o somatório de
# todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será
# 15

# Dica: a função sum já existe nativamente no Python!
def summation(limit):
    return sum(range(1, limit + 1))

# OU
# def summation(limit):
#     total = 0
#     for number in range(1, limit + 1):
#         total += number
#     return total
