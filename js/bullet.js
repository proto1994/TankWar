const BULLET_SIZE = 6;

class Bullet extends Drawable {
  constructor(game, spec) {
    super();
    this.game = game;

    this._x = spec.x;
    this._y = spec.y;
    this._dir = spec.dir;
    this._power = spec.power;
    this._tank = spec.tank;

    // 根据power确定速度
    var velocity = this._power * 2;

    // 根据方向参数确定x和y的速度
    switch (this._dir) {
      case DIR_UP:
        this._vx = 0;
        this._vy = -velocity;
        break;
      case DIR_DOWN:
        this._vx = 0;
        this._vy = +velocity;
        break;
      case DIR_LEFT:
        this._vx = -velocity;
        this._vy = 0;
        break;
      case DIR_RIGHT:
        this._vx = +velocity;
        this._vy = 0;
        break;
    }
  }

  getTank() { return this._tank; }

  update() {
    this._x += this._vx;
    this._y += this._vy;
  }

  draw() {
    GameImage.drawImage(this.game.context,
      'bullet' + DIR_NAMES[this._dir],
      this._x, this._y,
      BULLET_SIZE, BULLET_SIZE);
  }
}
