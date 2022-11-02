
class GameFinished extends Phaser.Scene {
    constructor() {
        super("GameFinished");

    }

    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        }); 
        this.load.image('opening', 'assets/openingScene.png');
        //this.load.spritesheet('restart', 'assets/Button/button8.png', {frameWidth: 265,frameHeight: 85});
    }

    create() {
        this.add.image(240, 135, 'opening').setScale(1);
        //var btnRestart = this.add.sprite(310, 200, "restart").setScale(0.5).setDepth(50).setInteractive();
        this.radiomessage = 'Congratulations! You have finished the Whole Game! Thank you for Playing Our Game!\n Hope you Enjoy it!\nYou have Spent: '+playerSurvivalDay+'Days to finished the Whole Game!\nHope you can use less day to finished the game next time! See you!\nGame Developers:\nEvonna\nEdmund\nZita'
         
        this.dialogBox = this.createTextBox(this, 35, 20, {
                            wrapWidth: 300,
                            fixedWidth: 290,
                            fixedHeight:210,
                        })
                            .start(this.radiomessage, 50)
                            .setScrollFactor(0)
                            .setDepth(30)
        
        /*
        var textArea = this.rexUI.add.textArea({
                x: 110,
                y: 60,
                width: 200,
                height: 100,
                background: this.rexUI.add.roundRectangle(0, 0, 2, 5, 5, COLOR_PRIMARY),
                // text: this.add.text(),
                text: this.rexUI.add.BBCodeText(),
                // textMask: false,
                slider: {
                    track: this.rexUI.add.roundRectangle(0, 0, 10, 5, 5, 0x260e04),
                    thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 7, 0x7b5e57),
                },
                // scroller: true,
            })
            .layout();
            //.drawBounds(this.add.graphics(), 0xff0000);
        textArea
            .setText(this.radiomessage)
            .setAlpha(0.9);
        */
    }


createTextBox(scene, x, y, config) {
    var wrapWidth = GetValue(config, 'wrapWidth', 0);
    var fixedWidth = GetValue(config, 'fixedWidth', 0);
    var fixedHeight = GetValue(config, 'fixedHeight', 0);
    var textBox = scene.rexUI.add.textBox({
            x: x,
            y: y,

            background: scene.rexUI.add.roundRectangle(0, 0, 1, 1,20, COLOR_PRIMARY)
                .setStrokeStyle(2, COLOR_LIGHT),

            icon: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, COLOR_DARK),

            text: this.getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

            action: scene.add.image(0, 0, 'nextPage').setTint(COLOR_LIGHT).setVisible(false),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
                icon: 10,
                text: 10,
            }
        })
        .setOrigin(0)
        .layout();

    textBox
        .setInteractive()
        /*
        .on('pointerdown', function () {
            if (this.isTyping) {
                this.stop(true);
            }
            if (this.isLastPage && !this.isTyping) {
                level = 0;
                playerSurvivalDay = 1;
                prop_list = [[],[]];
                scene.scene.start("Menu");
                scene.scene.stop();
                return true;
            }
            var icon = this.getElement('action').setVisible(true);
            this.resetChildVisibleState(icon);
            icon.y -= 30;
            var tween = scene.tweens.add({
                targets: icon,
                y: '+=30', // '+=100'
                ease: 'Bounce', // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 500,
                repeat: 0, // -1: infinity
                yoyo: false
            });
        }, textBox)
    //.on('type', function () {
    //})
    */
    return textBox;
}

getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,
        fontSize: '15px',
        //fontFamily:'bitmapFont',
        wrap: {
            mode: 'word',
            width: wrapWidth
        },
        maxLines: 13
    }).setResolution(1)
}       
    
    
    
}