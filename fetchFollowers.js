const url = 'https://api.github.com/users/zainabturkmen/followers?per_page=100'

const fetchFollowers = async () => {
    const respone = await fetch(url);
    const data = await respone.json();
}

export default fetchFollowers
