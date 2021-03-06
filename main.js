/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Nel file js avete un array di oggetti che rappresentano ciascun post.
Ogni post contiene le informazioni necessarie per stampare la relativa card:
id del post (numero progressivo da 1 a n),
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.

Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS

1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/


const app = new Vue({
	el: '#container',
	data: {
		arrLikedIds: [1, 3],
		arrPosts: [
			{
				 "id": 1,
				 "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
				 "media": "https://unsplash.it/600/300?image=171",
				 "author": {
					  "name": "Phil Mangione",
					  "image": "https://unsplash.it/300/300?image=15"
				 },
				 "likes": 80,
				 "created": "2021-06-25"
			},
			{
				 "id": 2,
				 "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
				 "media": "https://unsplash.it/600/400?image=112",
				 "author": {
					  "name": "Sofia Perlari",
					  "image": "https://unsplash.it/300/300?image=10"
				 },
				 "likes": 120,
				 "created": "2021-09-03"
			},
			{
				 "id": 3,
				 "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
				 "media": "https://unsplash.it/600/400?image=234",
				 "author": {
					  "name": "Chiara Passaro",
					  "image": "https://unsplash.it/300/300?image=20"
				 },
				 "likes": 78,
				 "created": "2021-05-15"
			},
			{
				 "id": 4,
				 "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
				 "media": "https://unsplash.it/600/400?image=24",
				 "author": {
					  "name": "Luca Formicola Giovanni",
					  "image": null
				 },
				 "likes": 56,
				 "created": "2021-04-03"
			},
			{
				 "id": 5,
				 "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
				 "media": "https://unsplash.it/600/400?image=534",
				 "author": {
					  "name": "Alessandro Sainato",
					  "image": "https://unsplash.it/300/300?image=29"
				 },
				 "likes": 95,
				 "created": "2021-03-05"
			}
	  ]
	},
	methods: {
		getInitials(name) {
			return name.split(' ').reduce((initials, namePart) => initials += namePart[0], '');
		},
		dateFromIsoToItalian(strDate) {
			// 2022-10-25
			return strDate.split('-').reverse().join('/');
		},
		toggleLike(post) {
			if (this.arrLikedIds.includes(post.id)) {
				this.arrLikedIds.splice(this.arrLikedIds.indexOf(post.id), 1);
				post.likes--;
			} else {
				this.arrLikedIds.push(post.id);
				post.likes++;
			}
		}
	}
});