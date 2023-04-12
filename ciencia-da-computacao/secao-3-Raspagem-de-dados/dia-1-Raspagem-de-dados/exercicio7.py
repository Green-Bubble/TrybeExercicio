# Faça o cálculo de quantos livros publicados (STATUS = PUBLISH) temos em
# nosso banco de dados por categoria. Ordene-os de forma decrescente de acordo
# com a quantidade.

# ⚠️ Você pode utilizar agreggation framework para auxiliar neste exercício.

from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    for category in db.books.aggregate(pipelines):
        print(category["_id"], category["count"], sep=": ")
