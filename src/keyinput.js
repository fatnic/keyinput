const keycodes = {
  "left" : 37,
  "up" : 38,
  "right" : 39,
  "down" : 40
}

for(let i = 65; i < 91; i++) { keycodes[String.fromCharCode(i)] = i }

class KeyInput {

  constructor() {
    this._pressed = {}

    window.addEventListener('keyup', (e) => {
      this.onKeyUp(e)
    }, false)

    window.addEventListener('keydown', (e) => {
      this.onKeyDown(e)
    }, false)
  }
  
  onKeyUp(e) { delete this._pressed[e.keyCode] }
  onKeyDown(e) { this._pressed[e.keyCode] = true }

  isDown(key) { return this._pressed[keycodes[key]] }

}

if (typeof module != 'undefined' && module.exports) module.exports = KeyInput