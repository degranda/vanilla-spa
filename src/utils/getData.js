const url = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiUrl = id ? `${url}${id}` : url;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log('Fetch Error', error);
    }
}

export default getData;