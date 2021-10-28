class Models:
    def generate(db):
        class Cards(db.Model):
            __tablename__ = 'cards'
            id = db.Column(db.BigInteger, primary_key=True)
            texto = db.Column(db.String())
            tags = db.Column(db.String())
            created_at = db.Column(db.DateTime())
            updated_at = db.Column(db.DateTime())

        db.create_all()
        return (Cards)
