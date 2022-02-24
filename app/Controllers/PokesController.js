import { pokesService } from "../Services/PokesService.js"
import { Pop } from "../Utils/Pop.js"
import { ProxyState } from "../AppState.js"

async function _getPokes() {
  try {
    await pokesService.getPokes()
  } catch (error) {
    Pop.toast(error.message, 'error in controller')
    console.error(error)
  }
}

function _drawPokes() {
  console.log('drawing pokes')
  let template = ''
  ProxyState.pokes.forEach(p => template += `<li class="selectable" onclick="app.pokesController.getActivePoke('${p.name}')">${p.name}</li>`)
  document.getElementById('pokesList').innerHTML = template
}

function _drawActivePoke() {
  let poke = ProxyState.activePoke
  if (poke.name) {
    document.getElementById('active-poke').innerHTML = ProxyState.activePoke.Template
  } else {
    document.getElementById('active-poke').innerText = 'poke a poke'
  }
}


export class PokesController {
  constructor() {
    ProxyState.on('pokes', _drawPokes)
    ProxyState.on('activePoke', _drawActivePoke)
    _getPokes()
  }

  async getActivePoke(name) {
    try {
      await pokesService.getActivePoke(name)
    } catch (error) {
      Pop.toast(error.message, 'error')
      console.error(error)
    }
  }
}