export const pokesApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 5000
})

export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tamra/pokemon',
  timeout: 5000
})