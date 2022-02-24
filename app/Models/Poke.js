export class Poke {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites.other['official-artwork'].front_default
    this.height = data.height
  }

  get Template() {
    return `
  <h4 class="text-center">${this.name}</h4>
          <p><img src="${this.img}" alt=""></p>
          <p>height: ${this.height} inches or feet... unclear</p>

          <button class="btn btn-danger text-warning" onclick="app.myPokesController.savePoke()">Poke This Poke</button>
        `
  }

  get ListTemplate() {
    return `
    <li>${this.name}</li>`
  }
}