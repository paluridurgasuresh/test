const fetch_cached = () => {
    if(!localStorage.users){
        axios.get('https://reqres.in/api/users')
        .then(response => {
            localStorage.users = JSON.stringify(response.data.data);
        })
        .catch(error => console.error(error));

    }
   
};

fetch_cached();