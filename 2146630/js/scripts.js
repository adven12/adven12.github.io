let comments = [];
let flag = false;
// loadComments();

document.getElementById('comment-add').onclick = function(){
	event.preventDefault();   // блок события обновления 
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name: commentName.value,
		body: commentBody.value,
		time: Date.now()/1000
	} 

    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);

    saveComments();   // функция сохранения  
    showComments();   // Вывод комментариев 

	// console.log(comment);

}

document.onkeydown  = function(event){
		 // console.log(event);
	if(event.code == 'ControlLeft' || event.code == 'ControlRight') {flag = true;}
	if(event.code == 'Enter' && flag){
		flag = false;
	event.preventDefault();   // блок события обновления 
		let commentName = document.getElementById('comment-name');
		let commentBody = document.getElementById('comment-body');

		let comment = {
			name: commentName.value,
			body: commentBody.value,
			time: Date.now()/1000
		} 

	    commentName.value = '';
	    commentBody.value = '';
	    comments.push(comment);

	    saveComments();   // функция сохранения  
	    showComments();   // Вывод комментариев 

	} 

}



function saveComments(){
	localStorage.setItem('comments', JSON.stringify(comments)); 
}
function loadComments(){
	if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	showComments();
}
function showComments(){
	let commentField = document.getElementById('comment_field');
	let out = '';
	comments.forEach(function(item){
        out = out + `<p class="text-left style-comment-name"><b>Гость</b></p>`;
        out = out + `<p class="text-left style-comment-time">${timeConverter(item.time)}</p>`;
        out = out + `<p class="text-left style-comment-body">${item.body}</p>`;
	});
	commentField.innerHTML = out;
}
function timeConverter(UNIX_timestamp){
	let a = new Date(UNIX_timestamp * 1000);
	let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
	let year = a.getFullYear();
	let month = months[a.getMonth()];
	let date = a.getDate();
	let time = date + ' ' + month + ' ' + year;
	return time;
}






