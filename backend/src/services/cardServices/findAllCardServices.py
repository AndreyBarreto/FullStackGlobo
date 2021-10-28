from domain.cardDomain import CardDomain
import json


class FindAllCard:
    def find(self, db, CardsModel):
        lista_cards = []
        cardObject = CardDomain.findAll(db, CardsModel)
        if cardObject == []:
            return {"error": "No cards Avaliable"}, 404
        for card in cardObject:
            lista_cards.append({"texto": card.texto, "id": card.id,"tags":card.tags.split(',')})
        return json.dumps(lista_cards)
