document.addEventListener('DOMContentLoaded', function() {
const blogList = document.getElementById('blog-list');

fetch('./data/posts.json')
.then(response => response.json())
.then(posts => {
posts.forEach(post => {
const postElement = document.createElement('div');
// manipulate postElement to show the content of the blog post with the specific style defined for it
postElement.classList.add("blogPost");
postName = document.createElement('h2');
postContent = document.createElement('p');
postName.insertAdjacentText("afterbegin", post.post);
postContent.insertAdjacentText("afterbegin", post.content);
postElement.append (postName);
postElement.append (postContent);
blogList.append(postElement);
//add postElement as a child to blog list
});
})
.catch(error => console.error('Error loading blog posts:', error));
});