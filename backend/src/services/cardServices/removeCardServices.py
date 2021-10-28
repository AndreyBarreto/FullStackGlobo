from domain.cardDomain import CardDomain


class RemoveCard:
    def remove(self, id, db, CardsModel):
        cardObject = CardDomain.remove(id, db, CardsModel)
        if cardObject:
            return {"id": id, "texto": cardObject.texto, "created_at": cardObject.created_at, "updated_at": cardObject.updated_at,"tags":cardObject.tags}, 200
        return {"error": "id not found"}, 404
