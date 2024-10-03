const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    console.log(data)

    document.getElementById('output').value = data
};

function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log(username, password);
}