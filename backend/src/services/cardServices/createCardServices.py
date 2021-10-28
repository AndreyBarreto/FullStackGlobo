from jsonschema import validate
from domain.cardDomain import CardDomain
from datetime import datetime


class CreateCard:
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

    def create(self, data, db, CardsModel):
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        data["created_at"] = now
        data["updated_at"] = now
        data['tags'] = ','.join(data['tags']).lower()

        return CardDomain.create(data, db, CardsModel)
