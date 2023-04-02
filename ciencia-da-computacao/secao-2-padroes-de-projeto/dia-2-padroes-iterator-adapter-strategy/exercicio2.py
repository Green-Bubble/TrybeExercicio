# Dado o código de um baralho e suas cartas, você deve transformá-lo em um
# iterador sequencial que fornece as cartas em sua ordem tradicional,
# começando de <A de copas> até <K de paus>.

# class Carta:
#     def __init__(self, valor, naipe):
#         self.valor = valor
#         self.naipe = naipe

#     def __repr__(self):
#         return '<%s de %s>' % (self.valor, self.naipe)


# class Baralho:
#     naipes = 'copas ouros espadas paus'.split()
#     valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

#     def __init__(self):
#         self._cartas = [
#             Carta(valor, naipe)
#             for naipe in self.naipes
#             for valor in self.valores
#         ]

#     def __len__(self):
#         return len(self._cartas)

from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):  # é usado para imprimir a representação da carta
        return "<%s de %s>" % (self.valor, self.naipe)  # em formato de string.


class IteradorDoBaralho(Iterator):  # adicionei a class Iteradora
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):  # adicionei o Iterable
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):  # adicionei o __iter__
        return IteradorDoBaralho(self._cartas)

    def __str__(self) -> str:  # adicionei o __str__
        return f"{[carta for carta in self]}"
