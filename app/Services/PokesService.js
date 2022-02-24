import { ProxyState } from "../AppState.js"
import { pokesApi } from "./AxiosService.js"
import { Poke } from '../Models/Poke.js'
class PokesService {
  async getPokes() {
    const res = await pokesApi.get()
    console.log(res.data, 'at pokesservice')
    ProxyState.pokes = res.data.results
  }
  async getActivePoke(name) {
    const res = await pokesApi.get(name)
    console.log('getactivepoke', res.data)
    ProxyState.activePoke = new Poke(res.data)
    console.log(ProxyState.activePoke)
  }
}

export const pokesService = new PokesService()