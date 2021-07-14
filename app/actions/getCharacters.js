import axios from 'axios';

const BASE_URL = `https://www.breakingbadapi.com`;

export const getCharacters = async (search) => {
    let result;
    let url = `${BASE_URL}/api/characters`;
    result = await axios.get(`${url}`)
    return result.data;
}