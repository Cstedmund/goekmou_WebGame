//=========================================Game Control variable==============================

var playerSurvivalDay = 1;
var level = 13;
var missionIsComplete = false;
var requirement = 0;
var pageNo = 0;
var playerMap = 0;
var changeMessage = false;

var destination1IsOpen = false;
var destination2IsOpen = false;

var HowtoPlayText1;
var HowtoPlayText2;
var HowtoPlayText3;
var propsName = ["protect", "toiletpaper","alcohol","goggles","Rice","cupnoodle","spray","webCam","microphone","SanitaryPad"] ;
var prop;
var props;
var propsText;
propsText = new Array(); // props number
var prop_list = [[],[]];
var prop_icon = new Array();
var prop_list_backup = [[],[]]; // addnew
class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    preload() {
        
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'js/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });  
        
        this.load.image('opening', 'assets/openingScene.png');
        this.load.spritesheet('btnStart', 'assets/Button/button.png', {
            frameWidth: 265,
            frameHeight: 85
        });
        this.load.spritesheet('btnHelp', 'assets/Button/button5.png', {
            frameWidth: 265,
            frameHeight: 85
        });
        this.load.spritesheet('btnBack', 'assets/Button/button6.png', {
            frameWidth: 265,
            frameHeight: 85
        });
        this.load.spritesheet('btnNext', 'assets/Button/button7.png', {
            frameWidth: 265,
            frameHeight: 85
        });
        this.load.spritesheet('exit', 'assets/Button/exit.png', {
            frameWidth: 17,
            frameHeight: 12
        });

        this.load.image('protect', 'assets/Props/protect.png');
        this.load.image('toiletpaper', 'assets/Props/toiletpaper.png');
        this.load.image('alcohol', 'assets/Props/alcohol.png');
        this.load.image('goggles', 'assets/Props/goggles.png');
        this.load.image('Rice', 'assets/Props/Rice.png');
        this.load.image('cupnoodle', 'assets/Props/cupnoodle.png');
        this.load.image('spray', 'assets/Props/spray.png');
        this.load.image('webCam', 'assets/Props/webCam.png');
        this.load.image('microphone', 'assets/Props/microphone.png');
        this.load.image('SanitaryPad', 'assets/Props/SanitaryPad.png');

        this.load.image('box', 'assets/HowToPlay/box.png');
        this.load.image('WASD', 'assets/HowToPlay/WASD.png');
        this.load.image('Mouse', 'assets/HowToPlay/Mouse.png');
        this.load.image('SpaceBar', 'assets/HowToPlay/SpaceBar.png');
        this.load.image('KeyZ', 'assets/HowToPlay/KeyZ.png');
    }

    create() {
        missionIsComplete = false;
        requirement = 0;  
        destination1IsOpen = false;
        destination2IsOpen = false;   
        //this.add.text(20,20, "I am Menu");
        this.add.image(240, 135, 'opening').setScale(1);
        var box = this.add.image(240, 135, 'box').setDepth(1);
        box.visible = false;
        var btnStart = this.add.sprite(310, 110, "btnStart").setScale(0.2).setInteractive();
        var btnHelp = this.add.sprite(310, 130, "btnHelp").setScale(0.2).setInteractive();
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
        btnStart.setName('btnStart');
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

        var textBox = this.add.text(100, 100, 'Press WASD keys to move\nPress Space Bar to wear the carton box', {
                font: "14px monospace",
                fill: "#ffffff",
                padding: {
                    x: 10,
                    y: 8
                },
                backgroundColor: "#000000",
            })
            .setDepth(1)
            .setAlpha(0.9);
        btnExit.visible = false;
        textBox.visible = false;

        var textBox1 = this.add.text(395, 50, 'Survival\n  Day\n   ' + playerSurvivalDay, {
                font: "12px monospace",
                fill: "#000000",
                padding: {
                    x: 10,
                    y: 8
                },
                backgroundColor: "",
            })
            .setDepth(1)
            .setAlpha(0.9)
            .setResolution(1);
        this.displayLevel = level+1;
        var textBox2 = this.add.text(10, 230, 'You are in Mission: ' + this.displayLevel, {
                font: "14px monospace",
                fill: "#ffffff",
                padding: {
                    x: 10,
                    y: 8
                },
                backgroundColor: "#000000",
            })
            .setDepth(1)
            .setAlpha(0.6);
        
        if(level == 0){
            this.radiomessage = "GGC radio 1: Dear Citizens!! The government just announced that ”GG la, our country is under the coronavirus attacks. Many people got infected and turned into Zombies. Our Chief Executive, still having a meeting in another country and she made a video recording to citizens: ”Just believe in your government then you will be good!! I will stay in another country and you have to take care of yourself! Remember to wear masks and do not stay outside for too long!! Be safe!”.";
        }else if(level == 1){
            this.radiomessage = "GGC radio 1: Dear Citizen!! Many countries stop exporting toilet paper to our city because it is one of the ingredients for making masks. A shortage of toilet paper supply may happen very soon. Please use as little toilet paper as possible. I suggest you use your finger instead of the toilet paper.";
        }else if(level == 2){
            this.radiomessage = "GGC radio 1: A research shows that alcohol-based hand sanitizer can fight against the virus effectively. You can use an alcohol-based hand sanitizer to protect yourself if you are under the attack of the zombies!! ";
        }else if(level == 3){
            this.radiomessage = "GGC radio 1: Professor Ho Tung had discovered that people can be infected when their eyes are contacted with viruses. Therefore it is better to wear goggles to protect yourself from being infected.";
        }else if(level == 4){
            this.radiomessage = "GGC radio 1: The main rice supplier just announced that their country is having an insect disaster. Most of the rice is eaten by peats. There will be no rice imported to the city anymore. Food shortage might happen very soon!!";
        }else if(level == 5){
            this.radiomessage = "GGC radio 1: Food shortage problem is getting worse! Many people start to buy some alternative food such as cup-noodles. I also have to buy cup-noodles la. Bye bye!!";
        }else if(level == 6){
            this.radiomessage = "GGC radio 1: Emergency!!!! The virus has become stronger now. Professor Ho Dong said that disinfectant alcohol spray will be our last weapon. However, you cannot buy this spray in the town. If you want to buy it, you can try your luck in the city.";
        }else if(level == 7){
            this.radiomessage = "GGC radio 1: Many companies have applied the home office policy. Most of the IT stores have already sold out all their Web Cameras. I hope you also have the web camera in your home for keeping your job. Goodluck!";
        }else if(level == 8){
            this.radiomessage = "GGC radio 1: Forgot to tell you. Microphone is also needed for the home office. So remember to go to buy a microphone to keep your job!! Goodluck!!";
        }else if(level == 9){
            this.radiomessage = "GGC radio 1: Your wife’s M is coming. Go to buy some sanitary pads as soon as possible!!! There are not many in the market because sanitary pad materials can also be used to make masks.";
        }else if(level == 10){
            this.radiomessage = "GGC radio 1: Zombies become more horrible. You have to buy more masks!! Remember to be safe and put on more protection when you go outside!!";
        }else if(level == 11){
            this.radiomessage = "GGC radio 1: Virus is uncontrollable. Professor Kappa recommends citizens to buy more weapons and protective materials. ";
        }else if(level == 12){
            this.radiomessage = "GGC radio 1: Good news! Finally we have cup noodles and toilet paper supply again! You could go to buy them. Say goodbye to water wash pat pat and fingers.";
        }else if(level == 13){
            this.radiomessage = "GGC radio 1: I know many citizens might have already adapted to the current situation. However, that does not mean that you are safe. You still have to keep fighting for what you want and love!! For your family, be prepared!";
        }
        
        
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
        

        HowtoPlayText1 = this.add.text(185, 50, "Use WASD key to control \nthe main character").setDepth(30);
        HowtoPlayText2 = this.add.text(185, 130, "Left-click on props icon \nto use props\nHold down the middle \nbutton to drag props \nand set position").setDepth(30);
        HowtoPlayText3 = this.add.text(75, 50, "How to play:\nYou are required to visit two \ndestinations to collect the props \nand complete the mission\nThere are 14 missions in this game\nExtra props will be randomly generate in the map for you to use\nWarning \nYou cannot expose in the virus environment for too long \nYou must return home in 3 minutes.").setDepth(30);
        HowtoPlayText1.visible = false;
        HowtoPlayText2.visible = false;
        HowtoPlayText3.visible = false;
        this.input.on('pointerdown', this.pointerEvent, this);
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
                HowtoPlayText3.setText("How to play:\nYou are required to visit two \ndestinations to collect the props \nand complete the mission\nThere are 14 missions in this game\nExtra props will be randomly \ngenerate in the map for you to use\nWarning \nYou cannot expose in the \nvirus environment for too long \nYou must return home in 3 minutes.").setDepth(30);
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
            box.visible = true;
            btnExit.visible = true;
            WASD.visible = true;
            Mouse.visible = true;
            HowtoPlayText1.visible = true;
            HowtoPlayText2.visible = true;
            btnBack.visible = false;
            btnNext.visible = true;
            textBox1.visible = false;
            textBox2.visible = false;
        });

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
            textBox1.visible = true;
            textBox2.visible = true;
            pageNo = 0;
        });

    }


    pointerEvent(pointer, targets) {
        this.btnClick(pointer, targets);

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


    btnClick(pointer, targets) {
        if (targets[0].name == "btnStart") {

            this.scene.start("Game");
        }

    }


}