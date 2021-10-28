from domain.cardDomain import CardDomain


class FindCard:
    def find(self, id, db, CardsModel):
        cardObject = CardDomain.find(id, db, CardsModel)
        if cardObject == None:
            return {"error": "id not found"}, 404

        return {"id": id, "texto": cardObject.texto, "created_at": cardObject.created_at, "updated_at": cardObject.updated_at, "tags": cardObject.tags}, 200
