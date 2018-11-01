-- The init file contains our whole db schema
create table movies (
    id SERIAL,
    title TEXT,
    description TEXT, 
    rating INTEGER
)