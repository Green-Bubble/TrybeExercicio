# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).

def count_pairs(n):
    numero_de_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares
