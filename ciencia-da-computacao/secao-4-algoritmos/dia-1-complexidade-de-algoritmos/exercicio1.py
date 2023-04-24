# Dado um array de números de tamanho n, escreva um algoritmo que retorna true
# se há no array um número duplicado e false caso contrário.
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True
        previous_number = number

    return False


# Analise a solução abaixo e diga qual é a ordem de complexidade desse
# algoritmo para o melhor caso, pior caso e caso médio.
# def contains_duplicate(numbers):
#     numbers.sort()
#     previous_number = 'not a number'
#     for number in numbers:
#         if (previous_number == number):
#             return True
#         previous_number = number

#     return False


""" O algoritmo ordena o array independente de qualquer coisa, então
o seu pior caso, melhor caso e caso médio são, no mínimo,
complexidade do algoritmo de ordenação do Python. Vendo a documentação,
vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior
caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)"""
