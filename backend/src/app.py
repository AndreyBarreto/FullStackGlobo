from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from domain.models import Models
import os
from flask_cors import CORS


####Services####

from services.cardServices import createCardServices
from services.cardServices import findAllCardServices
from services.cardServices import findCardServices
from services.cardServices import removeCardServices
from services.cardServices import updateCardServices
from services.cardServices import findByTagService


####Services####


####Instance Services####

CreateCard = createCardServices.CreateCard()
FindCard = findCardServices.FindCard()
RemoveCard = removeCardServices.RemoveCard()
UpdateCard = updateCardServices.UpdateCard()
findAllCard = findAllCardServices.FindAllCard()
FindByTagCard = findByTagService.FindByTagCard()


####Instance Services####


load_dotenv()

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql+psycopg2://{os.environ['POSTGRES_USER']}:{os.environ['POSTGRES_PASSWORD']}@{os.environ['POSTGRES_HOST']}/{os.environ['POSTGRES_NAME']}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

(CardsModel) = Models.generate(db)


@app.route("/cards/<id>")
def view_card(id):
    return FindCard.find(id, db, CardsModel)


@app.route("/cards")
def view_all_cards():
    return findAllCard.find(db, CardsModel)


@app.route("/cards", methods=['POST'])
def create_card():
    jsonIsInvalid = CreateCard.validateJson(request.json)
    if jsonIsInvalid:
        return jsonIsInvalid, 404
    response = CreateCard.create(request.json, db, CardsModel)
    return response, 200


@app.route("/cards/<id>", methods=['DELETE'])
def remove_card(id):
    return RemoveCard.remove(id, db, CardsModel)


@app.route("/cards/<id>", methods=['PUT'])
def update_card(id):
    jsonIsInvalid = UpdateCard.validateJson(request.json)
    if jsonIsInvalid:
        return jsonIsInvalid, 404
    return UpdateCard.update(id, request.json, db, CardsModel)


@app.route("/cards/<tag>/tags")
def view_cards_by_tag(tag):
    return FindByTagCard.find(db, CardsModel, tag)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333)
