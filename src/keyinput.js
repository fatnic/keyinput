class KeyInput {

  constructor() {
    this._keycodes = {}
    this._pressed = {}

    window.addEventListener('keyup', (e) => {
      this.onKeyUp(e)
    }, false)

    window.addEventListener('keydown', (e) => {
      this.onKeyDown(e)
    }, false)

  }

  async init() {
    this._keycodes = await fetch('./keycodes.json').then(res => res.json())
    console.log(this._keycodes)
  }
  
  onKeyUp(e) { delete this._pressed[e.keyCode] }
  onKeyDown(e) { this._pressed[e.keyCode] = true }

  isDown(key) { return this._pressed[this._keycodes[key]] }

}