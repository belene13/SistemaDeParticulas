class Particula {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.setMagula = random(-2, 2);
    
    this.tam = random(4, 12);
    this.vida = int(random(100, 300));
    this.estaMuerta = false;
    this.diam = random(2, 6);
    this.velAngula = random(-2, 2);

    // Color galaxia
    this.r = random(150, 255);
    this.g = random(100, 200);
    this.b = random(200, 255);
  }

  update() {

    this.pos.add(this.vel);
    this.vida -= 3;
    if (this.vida <= 0) this.estaMuerta = true;
  }


  display() {
    noStroke();

    this.diamFinal = map(this.vida, 0, 255, 0, this.tam);

    // Brillo grande (halo)
    fill(this.r, this.g, this.b, this.vida * 0.2);
    circle(this.pos.x, this.pos.y, this.tam * 4);

    // Brillo medio
    fill(this.r, this.g, this.b, this.vida * 0.5);
    circle(this.pos.x, this.pos.y, this.tam * 1.8);

    // Núcleo brillante
    fill(255, 255, 255, this.vida);
    circle(this.pos.x, this.pos.y, this.tam);
  }
}


