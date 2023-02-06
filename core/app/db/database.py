from sqlmodel import Session, create_engine

from app.models.transference_request import *
from app.models.medical_specialty import *
from app.models.medical_bed_type import *
from app.models.medical_bed import *
from app.models.patient import *
from app.models.emd_doctor import *
from app.models.doctor import *
from app.models.hospital import *


# PostgreSQL version:
USER = "postgres"
PASSWORD = "development"
HOST = "localhost"
PORT = 5432
DATABASE = "ptm"

CONNECTION_URL = f"postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}"
engine = create_engine(CONNECTION_URL, echo=True)


# SQLite version:
# sqlite_file_name = "STP.db"
# sqlite_url = f"sqlite:///{sqlite_file_name}"

# connect_args = {"check_same_thread": False}
# engine = create_engine(sqlite_url, echo=True, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
