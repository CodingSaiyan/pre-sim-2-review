update movies 
set title = ${title}, description = ${description}, rating = ${rating}
where id = ${id}
returning *;