angular.module('northfield').service('ProductService', function () {
  var img = function (s) { return 'https://picsum.photos/seed/' + s + '/400/300'; };
  var products = [
    { id: 1, name: 'Stoneware Mug',     cat: 'Kitchen', price: 18, img: img('mug'),    desc: 'Hand-glazed stoneware mug, holds 350 ml.' },
    { id: 2, name: 'Linen Tea Towel',   cat: 'Kitchen', price: 14, img: img('towel'),  desc: 'Washed linen that softens with every wash.' },
    { id: 3, name: 'Linen Throw',       cat: 'Textiles', price: 79, img: img('throw'), desc: 'Oversized throw in natural flax.' },
    { id: 4, name: 'Cushion Cover',     cat: 'Textiles', price: 32, img: img('cushion'), desc: '45 x 45 cm cover with hidden zip.' },
    { id: 5, name: 'Ceramic Table Lamp', cat: 'Lighting', price: 96, img: img('lamp'), desc: 'Warm ceramic base with a linen shade.' },
    { id: 6, name: 'Brass Desk Lamp',   cat: 'Lighting', price: 120, img: img('desklamp'), desc: 'Adjustable arm, solid brass finish.' },
    { id: 7, name: 'Snake Plant',       cat: 'Plants',  price: 28, img: img('snake'),  desc: 'Hardy, low-light plant in a clay pot.' },
    { id: 8, name: 'Trailing Pothos',   cat: 'Plants',  price: 22, img: img('pothos'), desc: 'Fast-growing trailing vine.' }
  ];
  this.all = function () { return products; };
  this.get = function (id) { return products.filter(function (p) { return p.id === id; })[0]; };
  this.categories = function () {
    var c = []; products.forEach(function (p) { if (c.indexOf(p.cat) < 0) c.push(p.cat); }); return c;
  };
});
