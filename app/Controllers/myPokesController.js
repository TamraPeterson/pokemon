import { ProxyState } from "../AppState.js"
import { myPokesService } from "../Services/MyPokesService.js"



async function _drawMyPokes() {
  console.log('draw pokes triggered in controller')
  let template = ''
  ProxyState.myPokes.forEach(p => {
    template += p.ListTemplate
  })
  document.getElementById('myPokes').innerHTML = template
}

export class MyPokesController {
  constructor() {
    console.log('my pokes controller')
    ProxyState.on('myPokes', _drawMyPokes)
  }

  async savePoke() {
    try {
      await myPokesService.savePoke()
    } catch (error) {
      console.error(error)
    }
  }
}