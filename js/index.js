console.log(
	"%c" +
		" __      __  ______   __  __   ______     " +
		"\n" +
		"/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
		"\n" +
		"\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
		"\n" +
		" \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
		"\n" +
		"  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
		"\n" +
		"   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
		"\n" +
		"    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
	"color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

const cancel_button = document.querySelector(".cancel_button");
const add_button = document.querySelector(".add_button");
const input_comment = document.querySelector(".input_comment");
const comment_list = document.querySelector(".comment-list");

add_button.addEventListener("click", () => {
	const list = document.createElement("li");
	const comment_item = document.createElement("div");
	const comment_author = document.createElement("div");
	const author_img = document.createElement("img");
	const text = document.createElement("span");
	const comment_content = document.createElement("div");

	comment_item.classList.add("comment-item");
	comment_author.classList.add("comment-author");
	comment_content.classList.add("comment-content");

	author_img.src = "./images/comment-author-icon.png";
	author_img.alt = "사용자 프로필 이미지";
	author_img.width = "24";
	author_img.height = "24";
	text.innerText = "방문자";
	comment_content.innerText = input_comment.value;

	comment_author.appendChild(author_img);
	comment_author.appendChild(text);
	comment_item.appendChild(comment_author);
	comment_item.appendChild(comment_content);
	list.appendChild(comment_item);
	comment_list.appendChild(list);

	alert("댓글이 등록되었습니다.");
});

cancel_button.addEventListener("click", () => {
	input_comment.value = "";
});
