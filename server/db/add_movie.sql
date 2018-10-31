insert into movies (title, description, rating)
values (${title}, ${description}, ${rating})

returning *;