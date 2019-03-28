var photoClippingArea = {

    preload : function() {
        // 加载图片是必需的,这样以后我们可以创建基于他们的sprites。
        // 第一个参数是图像的别名
        // 第二个是文件的路径
        game.load.image('main_return', './img/main_return.png');
    },

    create: function () {
        // 添加一个精灵到你的游戏场景，这里的精灵将是游戏的标志
        // 参数为： 坐标X , 坐标Y ,图像名（见上图）
        // this.add.sprite(0, 0, 'menu');
		this.add.text(235, 350, "这是图片编辑区", { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
        this.add.button(10, 10, "main_return", this.ChangeStateToMenu(), this);
    },
	
	ChangeStateToMenu: function () {
	
	    // 状态更改为实际的游戏
	    this.state.start('menu');
	
	}

};