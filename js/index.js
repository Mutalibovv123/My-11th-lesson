const wrapper = document.querySelector('#wrapper');
const button = document.querySelector("#button");

function createBlock(value) {
    return `
        <div class="block">
            <h3>${value.name || value.email || value.body || 'No Name'}</h3>
            <h3>${value.email || 'No Email'}</h3>
            <span>${value.id || 'No ID'}</span>
        </div>`;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error("API not found for users");
        })
        .then(data => {
            data.forEach(element => {
                let card = createBlock(element);
                wrapper.innerHTML += card;
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            console.log("Request to users completed.");
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error("API not found for comments");
        })
        .then(data => {
            data.forEach(element => {
                let card = createBlock(element);
                wrapper.innerHTML += card;
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            console.log("Request to comments completed.");
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error("API not found for all comments");
        })
        .then(data => {
            data.forEach(element => {
                let card = createBlock(element);
                wrapper.innerHTML += card;
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            console.log("Request to all comments completed.");
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error("API not found for posts");
        })
        .then(data => {
            data.forEach(element => {
                let card = createBlock(element);
                wrapper.innerHTML += card;
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            console.log("Request to posts completed.");
        });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error("API not found for single post");
        })
        .then(data => {
            let card = createBlock(data); 
            wrapper.innerHTML += card;
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            console.log("Request to single post completed.");
        });
});

button && button.addEventListener('click', function(event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        throw new Error("API not found for single post");
    })
    .then(data => {
        let card = createBlock(data); 
        wrapper.innerHTML += card;
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        console.log("Request to single post completed.");
    });

})
