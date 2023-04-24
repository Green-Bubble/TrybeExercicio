# Transforme o algoritmo criado no exercício 1 em recursivo.

def count_pairs(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_pairs(n-1)
    else:
        return count_pairs(n-1)
