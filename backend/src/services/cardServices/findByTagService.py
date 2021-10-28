from domain.cardDomain import CardDomain
import json


class FindByTagCard:
    def find(self, db, CardsModel, tag):
        lista_cards = []
        cardObject = CardDomain.findByTag(db, CardsModel, tag)
        if cardObject == []:
            return {"error": "No cards with this tag Avaliable"}, 404
        for card in cardObject:
            lista_cards.append(
                {"texto": card.texto, "id": card.id, "tags": card.tags.split(',')})
        return json.dumps(lista_cards)
