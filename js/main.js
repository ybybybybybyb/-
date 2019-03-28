var game;

// 创建一个新对象实例 600px 宽 450px 高:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// 第一个参数是我们的状态将如何被调用。
// 第二个参数是一个对象，该对象包含需要的状态函数方法
game.state.add('menu', menu);
game.state.add('photoClippingArea', photoClippingArea);
game.state.start('menu');
