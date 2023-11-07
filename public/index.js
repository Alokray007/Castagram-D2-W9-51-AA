import { createMainContent, fetchImage } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
    reqImage();
    vote();
    comment();
    deleteBtn();
};

// First step to request new image
const reqImage = () => {
    const reqButton = document.createElement("button");
    reqButton.textContent = "New Image"
    reqButton.classList.add("get-image");
    const container = document.querySelector(".container");
    container.appendChild(reqButton);
    reqButton.addEventListener("click", () => {
        fetchImage();
        const count = document.getElementById("count");
        count.textContent = 0;
    })
}

// second step to update Popularity Score
const vote = () => {
    const voteCount = document.createElement("p");
    voteCount.innerHTML = "Popularity score: <span id='count'>0</span>";
    voteCount.id = "votecount";
    const container = document.querySelector(".container");
    container.appendChild(voteCount);
    const voteContainer = document.createElement("div");
    container.appendChild(voteContainer);
    const upVote = document.createElement("button");
    upVote.textContent = "Upvote";
    upVote.id = "upvote";
    upVote.style.marginRight = "20px";
    const downVote = document.createElement("button");
    downVote.textContent = "Downvote";
    downVote.id = "downvote";
    voteContainer.appendChild(upVote);
    voteContainer.appendChild(downVote);

    function updateCount() {
        const count = document.getElementById("count");
        upVote.addEventListener("click", () => {
            count.textContent++;
        })
        downVote.addEventListener("click", () => {
            count.textContent--;
        })
    }
    updateCount()
}

// third step to update comment
const comment = () => {
    const container = document.querySelector(".container");
    const commentContainer = document.createElement("div");
    commentContainer.id = "comm-container";
    commentContainer.style.margin = "20px";
    const commentLabel = document.createElement("label");
    commentLabel.for = "comment";
    commentLabel.textContent = "Comment: "
    const commentInput = document.createElement("input");
    commentInput.id = "comment";
    commentInput.placeholder = "Add a comment...";
    commentInput.style.marginRight = "20px";
    const submitComment = document.createElement("button");
    submitComment.textContent = "submit";
    container.appendChild(commentContainer);
    commentContainer.appendChild(commentLabel);
    commentContainer.appendChild(commentInput);
    commentContainer.appendChild(submitComment);

    const CommentList = document.createElement("ul");
    container.appendChild(CommentList);

    submitComment.addEventListener("click", ()=> {
        const addComment = document.createElement("li");
        addComment.textContent = commentInput.value;
        CommentList.appendChild(addComment);
        commentInput.value = "";
    })
}

// delete button
const deleteBtn = () => {
    const container = document.querySelector(".container");
    // const li = document.querySelector("li");
    const ul = document.querySelector("ul");
    const delFirst = document.createElement("button");
    delFirst.textContent = "Delete";
    const delAll = document.createElement("button");
    delAll.textContent = "Delete All";
    delAll.style.marginTop = "10px";
    container.appendChild(delFirst);
    container.appendChild(delAll);
    delFirst.addEventListener("click" , () => {
        ul.removeChild(ul.firstElementChild);
    })
    delAll.addEventListener("click" , () => {
        ul.innerHTML = "";
    });
}
