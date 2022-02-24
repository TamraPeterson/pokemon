import { ProxyState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { sandboxApi } from "./AxiosService.js"



class MyPokesService {
  debugger
  async savePoke() {
    let poke = ProxyState.activePoke
    const res = await sandboxApi.post('', poke)
    console.log('savepoke', res.data)
    ProxyState.myPokes = [...ProxyState.myPokes, new Poke(res.data)]
  }
}
export const myPokesService = new MyPokesService()