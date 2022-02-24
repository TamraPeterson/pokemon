import { MyPokesController } from "./Controllers/myPokesController.js";
import { PokesController } from "./Controllers/PokesController.js";

class App {

  pokesController = new PokesController()
  myPokesController = new MyPokesController()
}

window["app"] = new App();
