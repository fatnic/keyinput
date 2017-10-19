const keycodes = {
  "down" : 37,
  "up" : 38,
  "left" : 39,
  "right" : 40,
}

for (let num = 48; num < 58; num++) { keycodes[String.fromCharCode(num)] = num }
for (let alpha = 65; alpha < 91; alpha++) { keycodes[String.fromCharCode(alpha).toLowerCase()] = alpha }

console.log(keycodes)

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