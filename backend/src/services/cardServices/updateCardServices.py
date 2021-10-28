from domain.cardDomain import CardDomain
from jsonschema import validate
from datetime import datetime


class UpdateCard:
    def validateJson(self, data):

        schema = {
            "type": "object",
            "additionalProperties": False,
            "required": ["texto", "tags"],
            "properties": {
                "texto": {
                    "type": "string"
                },
                "tags": {
                    "type": "array"
                },
            }
        }
        try:
            validate(data, schema)

        except Exception as e:
            return {"error": e.message}

    def update(self, id, data, db, CardsModel):
        data['updated_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        data['tags'] = ','.join(data['tags']).lower()

        cardObject = CardDomain.update(id, data, db, CardsModel)
        if cardObject:
            return {"id": id, "texto": cardObject.texto, "created_at": cardObject.created_at, "updated_at": cardObject.updated_at, "tags": cardObject.tags}, 200
        return {"error": "id not found"}, 404
