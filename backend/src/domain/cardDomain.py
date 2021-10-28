class CardDomain:

    def create(data, db, CardsModel):
        objectDB = CardsModel(**data)
        db.session.add(objectDB)
        db.session.commit()
        return data

    def find(id, db, CardsModel):
        cardObject = db.session.query(CardsModel).filter(
            CardsModel.id == id).first()

        return cardObject

    def remove(id, db, CardsModel):
        cardObject = db.session.query(CardsModel).filter(
            CardsModel.id == id).first()
        if cardObject:
            db.session.delete(cardObject)
            db.session.commit()
            return cardObject
        return None

    def update(id, data, db, CardsModel):
        cardObject = db.session.query(CardsModel).filter(
            CardsModel.id == id).first()
        if cardObject:
            cardObject.texto = data['texto']
            cardObject.updated_at = data['updated_at']
            cardObject.tags = data['tags']
            db.session.add(cardObject)
            db.session.commit()
            return cardObject

        return None

    def findAll(db, CardsModel):
        cardObject = db.session.query(CardsModel).all()
        return cardObject

    def findByTag(db, CardsModel, tag):
        cardObject = db.session.query(CardsModel).filter(
            CardsModel.tags.like(f'%{tag}%')).all()
        return cardObject
