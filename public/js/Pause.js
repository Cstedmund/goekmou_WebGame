var HowtoPlayText1;
var HowtoPlayText2;
var HowtoPlayText3;
class Pause extends Phaser.Scene {
    constructor() {
        super("Pause");

    }

    preload() {
        //this.load.image('opening','assets/openingScene.png');
        this.load.image('box', 'assets/box.png');
        this.load.spritesheet('btnRes', 'assets/Button/button2.png', {
            frameWidth: 265,
            frameHeight: 85
        });
        this.load.spritesheet('btnHelp', 'assets/Button/button5.png', {
            frameWidth: 265,
            frameHeight: 85
        });


        this.load.image('box2', 'assets/HowToPlay/box.png');
        this.load.image('WASD', 'assets/HowToPlay/WASD.png');
        this.load.image('Mouse', 'assets/HowToPlay/Mouse.png');
        this.load.image('SpaceBar', 'assets/HowToPlay/SpaceBar.png');
        this.load.image('KeyZ', 'assets/HowToPlay/KeyZ.png');

    }

    create() {
        var box = this.add.image(240, 135, 'box2').setDepth(1);
        box.visible = false;
        var resumeBox = this.add.image(250, 130, 'box').setDepth(20).setAlpha(0.5).setScale(0.8);
        var btnRes = this.add.sprite(250, 70, 'btnRes').setScale(0.6).setInteractive().setDepth(20);
        var btnHelp = this.add.sprite(250, 140, "btnHelp").setScale(0.6).setInteractive().setDepth(20);
        var btnBack = this.add.sprite(270, 230, "btnBack").setScale(0.3).setInteractive().setDepth(2);
        var btnNext = this.add.sprite(370, 230, "btnNext").setScale(0.3).setInteractive().setDepth(2);
        var btnExit = this.add.sprite(410, 28, 'exit').setScale(1).setInteractive().setDepth(2);
        var WASD = this.add.sprite(130, 80, 'WASD').setScale(0.5).setInteractive().setDepth(1);
        var Mouse = this.add.sprite(130, 170, 'Mouse').setScale(0.5).setInteractive().setDepth(1);
        var KeyZ = this.add.sprite(130, 80, 'KeyZ').setScale(0.5).setInteractive().setDepth(1);
        var SpaceBar = this.add.sprite(130, 170, 'SpaceBar').setScale(0.45).setInteractive().setDepth(1);
        var protect = this.add.image(225, 85, 'protect').setScale(0.1).setDepth(30);
        var goggle = this.add.image(260, 85, 'goggles').setScale(0.1).setDepth(30);
        var alcohol = this.add.image(295, 85, 'alcohol').setScale(0.1).setDepth(30);
        var protect2 = this.add.image(125, 55, 'protect').setScale(0.1).setDepth(30);
        var toiletPaper1 = this.add.image(205, 55, 'toiletpaper').setScale(0.1).setDepth(30);
        var protect3 = this.add.image(85, 120, 'protect').setScale(0.1).setDepth(30);
        var toiletPaper2 = this.add.image(85, 150, 'toiletpaper').setScale(0.1).setDepth(30);
        var rice1 = this.add.image(125, 55, 'Rice').setScale(0.1).setDepth(30);
        var cupnoodle1 = this.add.image(205, 55, 'cupnoodle').setScale(0.1).setDepth(30);
        var rice2 = this.add.image(85, 120, 'Rice').setScale(0.1).setDepth(30);
        var cupnoodle2 = this.add.image(85, 150, 'cupnoodle').setScale(0.1).setDepth(30);
        var spray1 = this.add.image(245, 55, 'spray').setScale(0.1).setDepth(30);
        var spray2 = this.add.image(285, 120, 'spray').setScale(0.1).setDepth(30);
        var mic = this.add.image(95, 55, 'microphone').setScale(0.1).setDepth(30);
        var cam = this.add.image(125, 55, 'webCam').setScale(0.1).setDepth(30);
        var pad = this.add.image(160, 55, 'SanitaryPad').setScale(0.1).setDepth(30);
        btnBack.visible = false;
        btnNext.visible = false;
        WASD.visible = false;
        Mouse.visible = false;
        KeyZ.visible = false;
        SpaceBar.visible = false;
        protect.visible = false;
        goggle.visible = false;
        alcohol.visible = false;
        protect2.visible = false;
        protect3.visible = false;
        toiletPaper1.visible = false;
        toiletPaper2.visible = false;
        rice1.visible = false;
        rice2.visible = false;
        cupnoodle1.visible = false;
        cupnoodle2.visible = false;
        spray1.visible = false;
        spray2.visible = false;
        mic.visible = false;
        cam.visible = false;
        pad.visible = false;
        btnRes.visible = true;
        btnHelp.visible = true;

        HowtoPlayText1 = this.add.text(185, 50, "Use WASD key to control \nthe main character").setDepth(30);
        HowtoPlayText2 = this.add.text(185, 130, "Left-click on props icon \nto use props\nHold down the middle \nbutton to drag props \nand set position").setDepth(30);
        HowtoPlayText3 = this.add.text(75, 50, "How to play:\nYou are required to visit two \ndestinations to collect the props \nand complete the mission\nThere are 14 missions in this game\nExtra props will be randomly generate in the map for you to use\nWarning \nYou cannot expose in the virus environment for too long \nYou must return home in 3 minutes.").setDepth(30);
        HowtoPlayText1.visible = false;
        HowtoPlayText2.visible = false;
        HowtoPlayText3.visible = false;
        this.input.on('pointerover', this.pointerOverEvent, this);
        this.input.on('pointerout', this.pointeroutEvent, this);


btnNext.on('pointerdown', function (event) {
            pageNo += 1;
            if (pageNo == 0) {
                WASD.visible = true;
                Mouse.visible = true;
                HowtoPlayText1.setText("Use WASD key to control \nthe main character");
                HowtoPlayText2.setText("Left-click on props icon \nto use props\nHold down the middle \nbutton to drag props \nand set position");
            } else if (pageNo == 1) {
                HowtoPlayText1.setText("Z key to enter the \nbuilding");
                HowtoPlayText2.setText("Space bar for switching \nthe mode to covered mode \nor uncovered mode");
                WASD.visible = false;
                Mouse.visible = false;
                KeyZ.visible = true;
                SpaceBar.visible = true;
                btnBack.visible = true;

            } else if (pageNo == 2) {
                HowtoPlayText3.setText("How to play:\nYou are required to visit two \ndestinations to collect the props \nand complete the mission\nThere are 14 missions in this game\nExtra props will be randomly \ngenerate in the map for you to use\nWarning \nYou cannot expose in the \nvirus environment for too long \nYou must return home in 3 minutes.").setDepth(30);
                HowtoPlayText1.visible = false;
                HowtoPlayText2.visible = false;
                KeyZ.visible = false;
                SpaceBar.visible = false;
                HowtoPlayText3.visible = true;
            } else if (pageNo == 3) {
                HowtoPlayText3.setText("How to use the props\n\nYou can click \t\t\t \t\t\t \t\t\t to open \n\nthe protective shield\n\nOne-use per each stage for each type \nof items").setDepth(30);
                protect.visible = true;
                goggle.visible = true;
                alcohol.visible = true;
            } else if (pageNo == 4) {
                HowtoPlayText3.setText("There are 3 levels of the protective \ncover\nUse 1 type of props for level 1 \nprotective cover(green)\n\n2 types of props for level 2 \nprotective cover(blue)\n\n3 type of props for level 3 \nprotective cover(red)\n").setDepth(30);
                protect.visible = false;
                goggle.visible = false;
                alcohol.visible = false;
            } else if (pageNo == 5) {
                HowtoPlayText3.setText("Use \t\t\t and \t\t\t to distract the \n\nenemies \n\n\t\t\t: affect large area. \n\n\t\t\t: affect small area. \n\nOne-use per each stage for each type \nof items.").setDepth(30);
                protect2.visible = true;
                protect3.visible = true;
                toiletPaper1.visible = true;
                toiletPaper2.visible = true;
            } else if (pageNo == 6) {
                HowtoPlayText3.setText("You can use the \t\t\t for slow down \n\nthe zombie’s speed for 8 seconds.\n\nYou can only use the \t\t\t again when \n\nthe slow down effect is over").setDepth(30);
                spray1.visible = true;
                spray2.visible = true;
                protect2.visible = false;
                protect3.visible = false;
                toiletPaper1.visible = false;
                toiletPaper2.visible = false;
            } else if (pageNo == 7) {
                HowtoPlayText3.setText("Use \t\t\t and \t\t\t to increase the \n\ncovered mode time. \n\n\t\t\t: 10 seconds. \n\n\t\t\t: 5 seconds. \n\nOne-use per each stage for each \n\ntype of items.").setDepth(30);
                rice1.visible = true;
                rice2.visible = true;
                cupnoodle1.visible = true;
                cupnoodle2.visible = true;
                spray1.visible = false;
                spray2.visible = false;
            } else if (pageNo == 8) {
                HowtoPlayText3.setText("\t\t\t \t\t\t \t\t\t are collectible with \n\nno functionality.").setDepth(30);
                rice1.visible = false;
                rice2.visible = false;
                cupnoodle1.visible = false;
                cupnoodle2.visible = false;
                mic.visible = true;
                cam.visible = true;
                pad.visible = true;
                            }
            else if (pageNo == 9) {
                HowtoPlayText3.setText("Zombie:\n\nThere are 3 types of zombies\n\t1) Spitting\n\t2) Sneezing\n\t3) Pooping\n\nZombies cannot enter the grass ground").setDepth(30);
                mic.visible = false;
                cam.visible = false;
                pad.visible = false;
                btnNext.visible = false;
            }

        });

        btnBack.on('pointerdown', function (event) {
            pageNo -= 1;
            if (pageNo == 0) {
                WASD.visible = true;
                Mouse.visible = true;
                HowtoPlayText1.visible = true;
                HowtoPlayText2.visible = true;
                KeyZ.visible = false;
                SpaceBar.visible = false;
                btnBack.visible = false;
                HowtoPlayText1.setText("Use WASD key to control \nthe main character");
                HowtoPlayText2.setText("Left-click on props icon \nto use props\nHold down the middle \nbutton to drag props \nand set position");
            } else if (pageNo == 1) {
                HowtoPlayText1.setText("Z key to enter the \nbuilding");
                HowtoPlayText2.setText("Space bar for switching \nthe mode to covered mode \nor uncovered mode");
                WASD.visible = false;
                Mouse.visible = false;
                HowtoPlayText1.visible = true;
                HowtoPlayText2.visible = true;
                HowtoPlayText3.visible = false;
                KeyZ.visible = true;
                SpaceBar.visible = true;
                btnBack.visible = true;
            } else if (pageNo == 2) {
                HowtoPlayText3.setText("How to play:\nYou are required to visit two \ndestination to collect the props \nand complete the mission\nExtra props will be randomly \ngenerate in the map for you to use\nWarning \nYou cannot expose in the \nvirus environment for too long \nYou must return home in 3 minutes.").setDepth(30);
                HowtoPlayText1.visible = false;
                HowtoPlayText2.visible = false;
                KeyZ.visible = false;
                SpaceBar.visible = false;
                protect.visible = false;
                goggle.visible = false;
                alcohol.visible = false;
                HowtoPlayText3.visible = true;
            } else if (pageNo == 3) {
                HowtoPlayText3.setText("How to use the props\n\nYou can click \t\t\t \t\t\t \t\t\t to open \n\nthe protective shield\n\nOne-use per each stage for each type \nof items").setDepth(30);
                protect.visible = true;
                goggle.visible = true;
                alcohol.visible = true;
            } else if (pageNo == 4) {
                HowtoPlayText3.setText("There are 3 levels of the protective \ncover\nUse 1 type of props for level 1 \nprotective cover(green)\n\n2 types of props for level 2 \nprotective cover(blue)\n\n3 type of props for level 3 \nprotective cover(red)\n").setDepth(30);
                protect.visible = false;
                goggle.visible = false;
                alcohol.visible = false;
                protect2.visible = false;
                protect3.visible = false;
                toiletPaper1.visible = false;
                toiletPaper2.visible = false;
            } else if (pageNo == 5) {
                HowtoPlayText3.setText("Use \t\t\t and \t\t\t to distract the \n\nenemies \n\n\t\t\t: affect large area. \n\n\t\t\t: affect small area. \n\nOne-use per each stage for each type \nof items.").setDepth(30);
                spray1.visible = false;
                spray2.visible = false;
                protect2.visible = true;
                protect3.visible = true;
                toiletPaper1.visible = true;
                toiletPaper2.visible = true;
            } else if (pageNo == 6) {
                HowtoPlayText3.setText("You can use the \t\t\t for slow down \n\nthe zombie’s speed for 8 seconds.\n\nYou can only use the \t\t\t again when \n\nthe slow down effect is over").setDepth(30);
                spray1.visible = true;
                spray2.visible = true;
                protect2.visible = false;
                protect3.visible = false;
                toiletPaper1.visible = false;
                toiletPaper2.visible = false;
                rice1.visible = false;
                rice2.visible = false;
                cupnoodle1.visible = false;
                cupnoodle2.visible = false;
            } else if (pageNo == 7) {
                HowtoPlayText3.setText("Use \t\t\t and \t\t\t to increase the \n\ncovered mode time. \n\n\t\t\t: 10 seconds. \n\n\t\t\t: 5 seconds. \n\nOne-use per each stage for each \n\ntype of items.").setDepth(30);
                rice1.visible = true;
                rice2.visible = true;
                cupnoodle1.visible = true;
                cupnoodle2.visible = true;
                spray1.visible = false;
                spray2.visible = false;
                mic.visible = false;
                cam.visible = false;
                pad.visible = false;
                            }
            else if (pageNo == 8) {
                HowtoPlayText3.setText("\t\t\t \t\t\t \t\t\t are collectible with \n\nno functionality.").setDepth(30);
                rice1.visible = false;
                rice2.visible = false;
                cupnoodle1.visible = false;
                cupnoodle2.visible = false;
                mic.visible = true;
                cam.visible = true;
                pad.visible = true;
                btnNext.visible = true;
                       }

        });


        btnHelp.on('pointerdown', function (event) {
            btnRes.visible = false;
            btnHelp.visible = false;
            box.visible = true;
            btnExit.visible = true;
            WASD.visible = true;
            Mouse.visible = true;
            HowtoPlayText1.visible = true;
            HowtoPlayText2.visible = true;
            btnBack.visible = false;
            btnNext.visible = true;
            resumeBox.visible = false;
        },this);

        btnRes.on('pointerdown', function (event) {
            // add new
            resumeBox.visible = false;
            btnRes.visible = false;
            if (playerMap == 1)
                this.scene.resume('Game');
            if (playerMap == 2)
                this.scene.resume('Game2');
            this.scene.stop('Pause');
        }, this);

        btnExit.on('pointerdown', function (event) {
            box.visible = false;
            btnExit.visible = false;
            WASD.visible = false;
            Mouse.visible = false;
            KeyZ.visible = false;
            SpaceBar.visible = false;
            HowtoPlayText1.visible = false;
            HowtoPlayText2.visible = false;
            HowtoPlayText3.visible = false;
            btnBack.visible = false;
            btnNext.visible = false;
            WASD.visible = false;
            Mouse.visible = false;
            KeyZ.visible = false;
            SpaceBar.visible = false;
            protect.visible = false;
            goggle.visible = false;
            alcohol.visible = false;
            protect2.visible = false;
            protect3.visible = false;
            toiletPaper1.visible = false;
            toiletPaper2.visible = false;
            rice1.visible = false;
            rice2.visible = false;
            cupnoodle1.visible = false;
            cupnoodle2.visible = false;
            spray1.visible = false;
            spray2.visible = false;
            mic.visible = false;
            cam.visible = false;
            pad.visible = false;
            resumeBox.visible = true;
            btnRes.visible = true;
            btnHelp.visible = true;
            pageNo = 0;
        });

    }

    pointerOverEvent(pointer, targets) {
        this.btnOver(pointer, targets);
    }

    pointeroutEvent(pointer, targets) {
        this.btnout(pointer, targets);
    }

    btnOver(pointer, targets) {
        targets[0].setFrame(1);
    }
    btnout(pointer, targets) {
        targets[0].setFrame(0);
    }

}