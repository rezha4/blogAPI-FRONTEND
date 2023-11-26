fetch("http://localhost:3000/posts")
.then(function(res) {
    return res.json();
})
.then(function(res) {
    res.forEach(re => {
        const title = document.createElement("h3");
        const post = document.createElement("p");
        const author = document.createElement("p");
        const timestamp = document.createElement("p");
        title.textContent = re.title;
        post.textContent = re.post;
        author.textContent = `Written by: ${re.author}`;
        timestamp.textContent = `Date: ${re.timeStamp}`;

        const div = document.createElement("div");
        div.appendChild(title)
        div.appendChild(post)
        div.appendChild(author)
        div.appendChild(timestamp)
        const postDiv = document.querySelector("div.posts");
        postDiv.appendChild(div)
    })
})

