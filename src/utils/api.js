const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substring(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const fetchAllPosts = () => (
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
);

export const fetchPostsByCategory = (category) => (
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
);

export const fetchCategories = () => (
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(res => res.categories)
);

export const fetchPost = (id) => (
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())
);

export const fetchPostComments = (id) => (
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())
)

export const addPost = (body) => (
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
)

export const deletePost = (id) => (
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json())
)

export const editPost = (id, body) => (
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
)

export const deleteComment = (id) => (
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json())
)

export const addComment = (body) => (
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
)

export const editComment = (id, body) => (
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
)

export const fetchComment = (id) => (
    fetch(`${api}/comments/${id}`, {
        headers
    }).then(res => res.json())
);