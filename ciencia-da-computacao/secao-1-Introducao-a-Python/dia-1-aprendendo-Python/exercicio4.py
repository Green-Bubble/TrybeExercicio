# Crie uma função que receba uma lista de nomes e retorne o nome com
# a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".
# Uma dica: Utilize a função len() para verificar o tamanho do nome.
def get_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name
