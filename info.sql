create table words (
	id serial unique,
	word text not null,
	description text
);

create table sentences (
	id serial,
	sentence text not null,
	word_id int,
	foreign key (word_id) references words (id)
);