# DIYBoardGames
目前设想需要以下几个模块：
1.图片处理模块：
       主要用于切割图片为正方形大小（并可以保存相对像素较高的图片，用于后续棋盘和棋子设计）
2.棋盘设计模块：
       棋盘为一个个正方形拼接，每一格拥有独立的棋盘属性（样式组、标志组、进行标识组、二维地址组）
3.棋子设计模块：
       棋子为一个个正方形拼接，每一格棋子拥有独立的棋子属性（样式组、标志组、进行标识组、二维地址组）
4.操作者设计模块：
        操作者拥有独立的操作者属性（样式组、标志组、进行标识组）
5.玩法设计模块：
       玩法模块目前暂未考虑清楚，暂时想到以下了内容：
               1）游戏必须拥有控制模块，控制模块判定当前操作者以及操作组，控制整个游戏进程。
               2）操作组指导操作者执行动作对棋盘、棋子、操作者的影响。
6.导入导出模块：
       希望棋类游戏模版作为文件形式保存，方便共享个解析（使用时可以有更小的加载起来启动游戏）

开源主要希望能够就图片素材大家共享，因为不同的棋类游戏可能设计玩法的模块交互完全不同，所以希望在迭代的过程中不断完善设计交互模块，以期待能够生成满足绝大多数已知的棋类游戏的设计，并能提供给棋类爱好者一个棋类游戏DIY的好工具。预计2019年底更新出第一版，只包含围棋、五子棋、跳棋、象棋、国际象棋或者类似玩法的项目。
