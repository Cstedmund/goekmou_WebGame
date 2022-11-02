
var mask;
var mask_image;

var mode = 0;
var backdrop;
var map_black;
var screenFader;
var wandering_counter = 0;
var wandering_reset = 0;

var enemyArray = new Array(100);
enemyArray.length = 0;
var enemyArray_type2 = new Array(100);
enemyArray_type2.length = 0;
var enemyArray_type3 = new Array(100);
enemyArray_type3.length = 0;
var bulletArray = new Array(100);
bulletArray.length = 0;
var allEnemyArray = new Array(100);
allEnemyArray.length = 0;
var indicatorArray = new Array(100);
indicatorArray.length = 0;
var allEnemyArray_2 = new Array(100);
allEnemyArray_2.length = 0;
var protectArray = new Array(100);
protectArray.length = 0;
var toiletPaperArray = new Array(100);
toiletPaperArray.length = 0;
var slowEnemyArray = new Array(100);
slowEnemyArray.length = 0;
var sprayArray = new Array(100);
sprayArray.length = 0;

var cursors;
var player;
var showDebug = false;
var winZone;
var tempX;
var tempY;

var propsText;
var protectCounter = 0;
var toiletpaperCounter = 0;
var noCovered = 0;

var alcoholCounter = 0;
var gogglesCounter = 0;
var protectUseCounter = 0;
var noodlesCounter = 0;
var riceCounter = 0;
var page = 1;
var coveredTime = 20;
var spray_counter_timer = 80;
var sprayCounter = 0;
var sprayAppearCounter = 0;

//enemy;

var heart1;
var heart2;
var heart3;
var heart4;
var health = 3;

var shield_level = 0;
var shield1;
var shield2;
var shield3;
var spray_little;


//===========================================================props array==========================================================
var propSpwan2 = [[99,100], [537,240],[820,484],[1174,486],[1740,88],[1741,521],[1284,521],[1136,691],[1776,778],[1905,632],[301,779],[134,1071],[1028,1059],[1654,1059],[306,446]];
//var propsName = ["protect", "toiletpaper","alcohol","goggles","Rice","cupnoodle","spray","webCam","microphone","SanitaryPad"] ;
     
//=========================================Map location array==============================
var mapLocationList = [];
//=========================================Game Control variable==============================
var atlasString = "atlas";
var textResolution = 1;
var dialogIsOn = false;
var jumpScene = false;
var gameOver = 0;

//=========================================Rex UI Varable==============================
var COLOR_PRIMARY = 0x4e342e;
var COLOR_LIGHT = 0x7b5e57;
var COLOR_DARK = 0x260e04;
var GetValue = Phaser.Utils.Objects.GetValue;

var content_1 = "you are in check point 1 hahaha testing for long paragraph longer longer longer longer longer longer longer longer longer";
var content_2 = "you are in check point 2 hahaha testing for long paragraph longer longer longer longer longer longer longer longer longer";
var content_3 = "you are in check point 3 hahaha testing for long paragraph longer longer longer longer longer longer longer longer longer";
var content_4 = "you are in check point 4 hahaha testing for long paragraph longer longer longer longer longer longer longer longer longer"; 

class Game2 extends Phaser.Scene {
    
    
  constructor() {
    super("Game2");
    var timeimage; // set timer image   
  }



preload() {

  //===========================================================Rex UI preload===========================================================
  this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI'
  });
 
  this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');  

//===========================================================preload map files===========================================================
  this.load.image("tiles2", "assets/tilesets/Map2assetsheet.png");
  this.load.tilemapTiledJSON("map2", "assets/tilesets/Map2.json");

//===========================================================preload character files===========================================================
  this.load.atlas("atlas", "assets/atlas/atlas.png", "assets/atlas/atlas.json");
//===========================================================preload attack files===========================================================
  this.load.image('bullet_left', 'assets/bullet_left.png');
  this.load.image('bullet_up', 'assets/bullet_up.png');
  this.load.image('bullet_right', 'assets/bullet_right.png');
  this.load.image('bullet_down', 'assets/bullet_down.png');
  this.load.image('bullet_larger_left', 'assets/bullet_larger_left.png');
  this.load.image('bullet_larger_up', 'assets/bullet_larger_up.png');
  this.load.image('bullet_larger_right', 'assets/bullet_larger_right.png');
  this.load.image('bullet_larger_down', 'assets/bullet_larger_down.png');
  this.load.image('shit_mine', 'assets/unchi.png');
  this.load.image('shield1', 'assets/shield.png');
  this.load.image('shield2', 'assets/shield_2.png');
  this.load.image('shield3', 'assets/shield_3.png');
//===========================================================preload spray files===========================================================
  this.load.image('spray_left', 'assets/spray_left.png');
  this.load.image('spray_up', 'assets/spray_up.png');
  this.load.image('spray_right', 'assets/spray_right.png');
  this.load.image('spray_down', 'assets/spray_down.png');
  this.load.image('spray_little', 'assets/little_spray.png');
//=========================================================== preload cover mode files===========================================================
  this.load.image('mask', 'assets/mask.png');
  this.load.image('mask2', 'assets/mask_hollow.png');
  this.load.image('black', 'assets/Black_colour.jpg');
  
//===========================================================preload UI files===========================================================
  this.load.image('bar', 'assets/bar1.png');
  this.load.image('resume', 'assets/gear.png');
  this.load.image('Heart1', 'assets/Heart1.png');
  this.load.image('Heart2', 'assets/Heart2.png');
  this.load.image('Heart3', 'assets/Heart3.png');
  this.load.image('Heart4', 'assets/Heart4.png');
  this.load.image('Timer', 'assets/Timer/Timer1.png');
  this.load.image('Timer2', 'assets/Timer/Timer2.png');
  this.load.image('Timer3', 'assets/Timer/Timer3.png');
  this.load.image('Timer4', 'assets/Timer/Timer4.png');
  this.load.image('Timer5', 'assets/Timer/Timer5.png');
  //this.load.image('mark','assets/mark.png');
  //this.load.image('markbox','assets/markbox.png');
  //this.load.image('markbox2','assets/markbox2.png');
  this.load.image('map_black','assets/Map1.png');
  this.load.image('map_black2','assets/Map2.png');
//===========================================================preload Tools files===========================================================
  
  this.load.image('protect','assets/Props/protect.png');
  this.load.image('toiletpaper','assets/Props/toiletpaper.png');
  this.load.image('alcohol','assets/Props/alcohol.png');
  this.load.image('goggles','assets/Props/goggles.png');
  this.load.image('Rice','assets/Props/Rice.png');
  this.load.image('cupnoodle','assets/Props/cupnoodle.png');
  this.load.image('spray','assets/Props/spray.png');
  this.load.image('webCam','assets/Props/webCam.png');
  this.load.image('microphone','assets/Props/microphone.png');
  this.load.image('SanitaryPad','assets/Props/SanitaryPad.png');
  this.load.image('Cover1','assets/buildingCover2/Cover1.png');
  this.load.image('Cover2','assets/buildingCover2/Cover2.png');
  this.load.image('Cover3','assets/buildingCover2/Cover3.png');
  this.load.image('Cover4','assets/buildingCover2/Cover4.png');
  this.load.image('Cover5','assets/buildingCover2/Cover5.png');
  this.load.image('Cover6','assets/buildingCover2/Cover6.png');
  this.load.image('Cover7','assets/buildingCover2/Cover7.png');
  this.load.image('Cover8','assets/buildingCover2/Cover8.png');
  this.load.image('Cover9','assets/buildingCover2/Cover9.png');
  this.load.image('Cover10','assets/buildingCover2/Cover10.png');
  this.load.image('Cover11','assets/buildingCover2/Cover11.png');
  this.load.image('Cover12','assets/buildingCover2/Cover12.png');
  this.load.image('Cover13','assets/buildingCover2/Cover13.png');

  this.load.image('indicator','assets/enemy_indicator.png');
//===========================================================tool bar===========================================================
this.load.image('toolsBar','assets/toolsBar.png');
this.load.image('toolBarBtn1','assets/Button/toolBarBtn1.png');
this.load.image('toolBarBtn2','assets/Button/toolBarBtn2.png');
this.load.image('toolBarBtn3','assets/Button/toolBarBtn3.png');

//Ed    
//===========================================================Add audio===========================================================
this.load.audio('bgm', 'assets/audio/zombie2.mp3');

//===========================================================Preload End===========================================================
}

create() {
  protectCounter = 0;
  toiletpaperCounter = 0;
	this.prop_list = prop_list;
  this.prop_icon = prop_icon;
  this.propsText = new Array();
  //new
  prop_list_backup[0] = [...this.prop_list[0]];
  prop_list_backup[1] = [...this.prop_list[1]];
//===========================================================Global variable==========================================================       
  this.player = player;
  var direction = "front";
  this.direction = direction;  
  this.mapLocationList = mapLocationList;   
  this.dialogIsOn=dialogIsOn;  
  this.jumpScene = jumpScene;
  this.jumpScene = false;
  
  gameOver = 0;
  playerMap = 2;
    
  //Ed     

  health = 3;
  shield_level = 0;
  coveredTime = 20;
  noCovered = 0;
  alcoholCounter = 0;
  gogglesCounter = 0;
  protectUseCounter = 0;
  noodlesCounter = 0;
  riceCounter = 0;
  spray_counter_timer = 80;
  sprayAppearCounter = 0;
  wandering_counter = 0;
  wandering_reset = 0;
  enemyArray.length = 0;
  enemyArray_type2.length = 0;
  enemyArray_type3.length = 0;
  bulletArray.length = 0;
  allEnemyArray.length = 0;
  indicatorArray.length = 0;
  allEnemyArray_2.length = 0;
  protectArray.length = 0;
  toiletPaperArray.length = 0;
  slowEnemyArray.length = 0;
  sprayArray.length = 0;
  //game.stage.backgroundColor = '#787878';
    
//Ed    
//===========================================================load map create=========================================================== 
    var music = this.sound.add('bgm',{
        mute: false,
        volume: 0.5,
        //rate: 1,
        //detune: 0,
        //seek: 0,
        loop: true,
    });
    this.music = music;
    this.music.play();
//Ed    
//===========================================================Musice Silde bar controller===========================================================   
        this.rexUI.add.slider({
            x: 434,
            y: 257,
            width: 80,
            height: 5,
            value: 0.1,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 5, COLOR_DARK),
            indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 5, COLOR_PRIMARY),
            thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 5, COLOR_PRIMARY),

            input: 'drag', // 'drag'|'click'
            valuechangeCallback: function (value) {
                music.volume = value;
            },
        })
            .layout()
            //.setScale(0.5)
            .setScrollFactor(0)
            .setDepth(12)
            .setAlpha(1);
            //.setResolution(2)
//===========================================================load map create===========================================================  
    const map2 = this.make.tilemap({ key: "map2" });
    this.map2=map2;
    const tileset = map2.addTilesetImage("Map2assetsheet", "tiles2");

// ===========================================================Loade map layer create===========================================================
  const ground = map2.createStaticLayer("Ground", tileset, 0, 0);
  const grassground = map2.createStaticLayer("Grassground", tileset, 0, 0);
  const building = map2.createStaticLayer("Building", tileset, 0, 0);
  const road = map2.createStaticLayer("Road", tileset, 0, 0);
  const aboveplayer = map2.createStaticLayer("Aboveplayer", tileset, 0, 0).setDepth(10);
  const collision = map2.createStaticLayer("Collision", tileset, 0, 0).setDepth(-1);

//===========================================================Player location in Map ===========================================================
  const spawnPoint = map2.findObject("Objects", obj => obj.name === "Spawn Point");

//===========================================================UI load image create===========================================================
  this.add.image(230 , 250, 'bar').setScale(0.27).setScrollFactor(0).setDepth(11).setAlpha(1);
  heart1 = this.add.image(30, 245, 'Heart1').setScale(0.27).setDepth(12).setScrollFactor(0);
  heart2 = this.add.image(30, 245, 'Heart2').setScale(0.27).setDepth(-1).setScrollFactor(0);
  heart3 = this.add.image(30, 245, 'Heart3').setScale(0.27).setDepth(-1).setScrollFactor(0);
  heart4 = this.add.image(30, 245, 'Heart4').setScale(0.27).setDepth(-1).setScrollFactor(0);
  spray_little = this.add.image(0, 0, 'spray_little').setDepth(-1);
  this.timeimage = this.add.image(70, 250, 'Timer').setScale(0.55).setScrollFactor(0).setDepth(12);
  //this.add.image(235,245,'markbox').setScale(0.3).setScrollFactor(0).setDepth(12);
  //this.add.image(235,260,'markbox2').setScale(0.3).setScrollFactor(0).setDepth(12);
  //this.mission2 = this.add.text(250,250,'mission2').setScale(0.8).setScrollFactor(0).setDepth(12); //mission display --> we need to add the cs
  //this.radioMsg = this.add.text(130,235,'Msg').setScale(0.8).setScrollFactor(0).setDepth(12); //mission display --> we need to add the cs
  this.propsText = new Array(); // props number
  for (var i = 1; i <= 4; i++)// i*60
    this.propsText.push(this.add.text(455,50*i, '').setScrollFactor(0).setDepth(12));
//===========================================================map box===========================================================addnew
this.buildingCover = this.physics.add.group();
this.buildingCover.add(this.add.image(326,123,'Cover1').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(899,123,'Cover2').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1525,133,'Cover3').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1883,315,'Cover4').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(143,530,'Cover5').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(418,620,'Cover6').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(906,368,'Cover7').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1560,415,'Cover8').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(835,612,'Cover9').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1445,658,'Cover10').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(350,938,'Cover11').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1256,938,'Cover12').setDepth(-1).setAlpha(0.3));
this.buildingCover.add(this.add.image(1898,867,'Cover13').setDepth(-1).setAlpha(0.3));
//===========================================================UI variable create===========================================================
    var btnResume = this.add.sprite(378, 250, 'resume').setScale(0.5).setScrollFactor(0).setInteractive().setDepth(12);
    
//===========================================================Tools setup create===========================================================
var toolsBar = this.add.sprite(450, 125, "toolsBar").setScale(0.3).setInteractive().setScrollFactor(0).setDepth(10);
var page1 = this.add.sprite(430,220,"toolBarBtn1").setScale(0.3).setInteractive().setScrollFactor(0).setDepth(11);
var page2 = this.add.sprite(450,220,"toolBarBtn2").setScale(0.3).setInteractive().setScrollFactor(0).setDepth(11);
var page3 = this.add.sprite(470,220,"toolBarBtn3").setScale(0.3).setInteractive().setScrollFactor(0).setDepth(11);
page1.setName("page1");
page2.setName("page2");
page3.setName("page3");
var random;
//var prop;



var props = this.physics.add.group();
this.input.on('pointerdown', this.pointerEvent, this); 

//===========================================================button function===========================================================
    btnResume.on('pointerdown', function (event) {
      //console.log('Pause');    
      this.scene.launch('Pause');
	  this.scene.pause('Game2');
    }, this);
	

//===========================================================black mode create===========================================================
  map_black = this.make.image({
            x: 1000,
            y: 580,
            key: 'map_black2',
            add: true
        });

  backdrop = this.make.image({
            x: 40,
            y: 40,
            key: 'black',
            add: true
        }).setScale(10);
  mask = this.make.image({
            x: game.config.width / 16,
            y: game.config.height / 16,
            key: 'mask',
            add: false
        }).setScale(0).setAlpha(0);

    var scale = {
        x: 0,
        y: 0,
        alpha: 0
    };
//===========================================================screen fader===========================================================	
screenFader = this.make.image({
            x: 40,
            y: 40,
            key: 'black',
            add: true
        }).setScale(10).setDepth(-1).setAlpha(0);
//===========================================================character create===========================================================
    
  this.player = this.physics.add
    .sprite(spawnPoint.x, spawnPoint.y, atlasString, "misa-front")
    .setSize(30, 40)
    .setOffset(0, 24)
    .setScale(1)
    .setBounce(0.2)
    .setCollideWorldBounds(true);

    //===========================================================Props random spwan===========================================================
    var position_list = new Array();
    for(var i = 0; i < 5; i++){
      do{
        random = Phaser.Math.Between(0, 14);
      }while(position_list.includes(random));
      var randomItem = Phaser.Math.Between(0,9);
      position_list.push(random);
      //console.log("hello i am random " + random);
      if(level >= 7){
        prop = this.add.sprite(propSpwan2[random][0],propSpwan2[random][1],propsName[randomItem]).setScale(0.2).setDepth(10);
        prop.setName(propsName[randomItem]);
      }
      else{
      prop = this.add.sprite(propSpwan2[random][0],propSpwan2[random][1],propsName[level]).setScale(0.2).setDepth(10);
      prop.setName(propsName[level]);
    }
      props.add(prop);
    }

    // for testing prop function
    /*for(var i = 0 ; i<10;i++){
    prop = this.add.sprite(1748 ,370,propsName[i]).setScale(0.2).setDepth(10);
      prop.setName(propsName[i]); 
      props.add(prop);
    }
*/

    //this.prop_list = [[],[]];
    this.prop_icon = new Array();
//===========================================================character mask===========================================================
    this.tweens.add({
        targets: scale,
        x: 0.1,
        y: 0.1,
        alpha: 0,
        duration: 1000,
        ease: 'Linear.easeNone',
        yoyo: false,
        repeat: -1,
        paused: false,
        onUpdate: function () {
            mask.setScale(scale.x, scale.y);
            mask.setAlpha(scale.alpha);
            //mask.syncGameObject();
        }
    });
//===========================================================enemy create indicator===========================================================
  var indicators = this.physics.add.group();
    this.indicators = indicators;
//===========================================================enemy create===========================================================
  var enemys = this.physics.add.group();
    this.enemys = enemys;
    var enemyNum = 4;
    for (var i = 0; i < (enemyNum*2); i += 2) {
		var enemyPos = [];
        //var enemyPos = [10 * 40, 27 * 40, 20 * 40, 27 * 40,30 * 40, 27 * 40,40 * 40, 27 * 40];
		var enemyPos = [5 * 40, 6 * 40, 22 * 40, 12 * 40,16 * 40, 18 * 40,35 * 40, 26 * 40];
		//var enemyPos = [10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40,10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40];
		//var enemyPos = [10 * 40, 2 * 40];
		if(enemyPos.length>0){
			this.createEnemy.call(this,enemyPos[i], enemyPos[i + 1]);
			this.createIndicator.call(this,enemyPos[i], enemyPos[i + 1]);
		}
    }
//===========================================================enemy create type 2===========================================================
  var enemys_type2 = this.physics.add.group();
    this.enemys_type2 = enemys_type2;
    var enemyNum_type2 = 4;
    for (var i = 0; i < (enemyNum_type2*2); i += 2) {
		var enemyPos_type2 = [];
        //var enemyPos_type2 = [10 * 40, 27 * 40, 20 * 40, 27 * 40,30 * 40, 27 * 40,40 * 40, 27 * 40];
		var enemyPos_type2 = [22 * 40, 6 * 40, 12 * 40, 26 * 40,35 * 40, 19 * 40,43 * 40, 5 * 40];
		//var enemyPos_type2 = [10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40,10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40];
		//var enemyPos = [10 * 40, 2 * 40];
		if(enemyPos_type2.length>0){
			this.createEnemy_type2.call(this,enemyPos_type2[i], enemyPos_type2[i + 1]);
			this.createIndicator.call(this,enemyPos_type2[i], enemyPos_type2[i + 1]);
		}
    }
//===========================================================enemy create type 3===========================================================
  var enemys_type3 = this.physics.add.group();
    this.enemys_type3 = enemys_type3;
    var enemyNum_type3 = 4;
    for (var i = 0; i < (enemyNum_type3*2); i += 2) {
		var enemyPos_type3 = [];
        //var enemyPos_type3 = [10 * 40, 27 * 40, 20 * 40, 27 * 40,30 * 40, 27 * 40,40 * 40, 27 * 40];
		var enemyPos_type3 = [13 * 40, 4 * 40, 2 * 40, 23 * 40,31 * 40, 8 * 40,43 * 40, 13 * 40];
		//var enemyPos_type2 = [10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40,10 * 40, 2 * 40, 20 * 40, 2 * 40,30 * 40, 2 * 40,40 * 40, 2 * 40];
		//var enemyPos = [10 * 40, 2 * 40];
		if(enemyPos_type3.length>0){
			this.createEnemy_type3.call(this,enemyPos_type3[i], enemyPos_type3[i + 1]);
			this.createIndicator.call(this,enemyPos_type3[i], enemyPos_type3[i + 1]);
		}
    }

//===========================================================enemy attack add group===========================================================
	var bullets = this.physics.add.group();
	this.bullets = bullets;
	var bullets_larger = this.physics.add.group();
	this.bullets_larger = bullets_larger;
	var shit_mines = this.physics.add.group();
	this.shit_mines = shit_mines;
//===========================================================spray add group===========================================================
	var sprays = this.physics.add.group();
	this.sprays = sprays;
//===========================================================add collision map and player===========================================================
  this.physics.world.setBounds(0, 0, map2.widthInPixels, map2.heightInPixels);
  building.setCollisionByProperty({ collides: true });

  this.physics.add.collider(this.player, building, function( obj1, obj2 ){
    //console.log(obj1);
    //console.log(obj2);
    //console.log('Hi' + smallHospital.x + smallHospital.y)
  }, null, this);
//===========================================================add collision location on map ===========================================================
  const station = map2.findObject("Door Object", obj => obj.name === "Station");
  const mansion_1 = map2.findObject("Door Object", obj => obj.name === "Mansion_1");
  const mansion_2 = map2.findObject("Door Object", obj => obj.name === "Mansion_2");
  const mansion_3 = map2.findObject("Door Object", obj => obj.name === "Mansion_3");
  const mansion_4 = map2.findObject("Door Object", obj => obj.name === "Mansion_4");
  const mansion_5 = map2.findObject("Door Object", obj => obj.name === "Mansion_5");
  const mansion_6 = map2.findObject("Door Object", obj => obj.name === "Mansion_6");
  const mansion_7 = map2.findObject("Door Object", obj => obj.name === "Mansion_7"); 
  const mansion_8 = map2.findObject("Door Object", obj => obj.name === "Mansion_8");    
  const store_1 = map2.findObject("Door Object", obj => obj.name === "Store_1");
  const store_2 = map2.findObject("Door Object", obj => obj.name === "Store_2");
  const store_3 = map2.findObject("Door Object", obj => obj.name === "Store_3");  
  const convenienceStore_1 = map2.findObject("Door Object", obj => obj.name === "Convenience_Store_1");
  const convenienceStore_2 = map2.findObject("Door Object", obj => obj.name === "Convenience_Store_2");
  const cirque_1 = map2.findObject("Door Object", obj => obj.name === "Cirque_1");
  const cirque_2 = map2.findObject("Door Object", obj => obj.name === "Cirque_2");
  const hotel_1 = map2.findObject("Door Object", obj => obj.name === "Hotel_1");
  const hotel_2 = map2.findObject("Door Object", obj => obj.name === "Hotel_2"); 
  const restaurant_1 = map2.findObject("Door Object", obj => obj.name === "Restaurant_1");
  const restaurant_2 = map2.findObject("Door Object", obj => obj.name === "Restaurant_2");     
  const shopping_Mall_1 = map2.findObject("Door Object", obj => obj.name === "Shopping_Mall_1");
  const shopping_Mall_2 = map2.findObject("Door Object", obj => obj.name === "Shopping_Mall_2");
  const shopping_Mall_3 = map2.findObject("Door Object", obj => obj.name === "Shopping_Mall_3");    
  const chicken_1 = map2.findObject("Door Object", obj => obj.name === "Chicken_1");
  const chicken_2 = map2.findObject("Door Object", obj => obj.name === "Chicken_2");    
  const alcohol_1 = map2.findObject("Door Object", obj => obj.name === "Alcohol_1");
  const alcohol_2 = map2.findObject("Door Object", obj => obj.name === "Alcohol_2"); 
  const casion = map2.findObject("Door Object", obj => obj.name === "Casion");
  const school = map2.findObject("Door Object", obj => obj.name === "School");
  const theater = map2.findObject("Door Object", obj => obj.name === "Theater");
  const hospital = map2.findObject("Door Object", obj => obj.name === "Hospital");   
  const musicStore = map2.findObject("Door Object", obj => obj.name === "Music");
  const cafe = map2.findObject("Door Object", obj => obj.name === "Cafe");
  const book = map2.findObject("Door Object", obj => obj.name === "Book");    
  const prison = map2.findObject("Door Object", obj => obj.name === "Prison");
  const popo = map2.findObject("Door Object", obj => obj.name === "Popo"); 
  const library = map2.findObject("Door Object", obj => obj.name === "Library"); 
  const fire_Chicken = map2.findObject("Door Object", obj => obj.name === "Fire_Chicken"); 
  const sushi = map2.findObject("Door Object", obj => obj.name === "Sushi"); 
  const steak = map2.findObject("Door Object", obj => obj.name === "Steak");     
  const bank = map2.findObject("Door Object", obj => obj.name === "Bank");   
  const eel = map2.findObject("Door Object", obj => obj.name === "eel");
  const wuDong = map2.findObject("Door Object", obj => obj.name === "WuDong");      
  const burger = map2.findObject("Door Object", obj => obj.name === "Burger");
  const office = map2.findObject("Door Object", obj => obj.name === "Office");      
     
  this.stationBlock = new Phaser.Geom.Rectangle(station.x, station.y, station.width, station.height);
  this.mansion_1Block = new Phaser.Geom.Rectangle(mansion_1.x, mansion_1.y, mansion_1.width, mansion_1.height);
  this.mansion_2Block = new Phaser.Geom.Rectangle(mansion_2.x, mansion_2.y, mansion_2.width, mansion_2.height);
  this.mansion_3Block = new Phaser.Geom.Rectangle(mansion_3.x, mansion_3.y, mansion_3.width, mansion_3.height);
  this.mansion_4Block = new Phaser.Geom.Rectangle(mansion_4.x, mansion_4.y, mansion_4.width, mansion_4.height);
  this.mansion_5Block = new Phaser.Geom.Rectangle(mansion_5.x, mansion_5.y, mansion_5.width, mansion_5.height);
  this.mansion_6Block = new Phaser.Geom.Rectangle(mansion_6.x, mansion_6.y, mansion_6.width, mansion_6.height);
  this.mansion_7Block = new Phaser.Geom.Rectangle(mansion_7.x, mansion_7.y, mansion_7.width, mansion_7.height);
  this.mansion_8Block = new Phaser.Geom.Rectangle(mansion_8.x, mansion_8.y, mansion_8.width, mansion_8.height);
  this.store_1Block = new Phaser.Geom.Rectangle(store_1.x, store_1.y, store_1.width, store_1.height);
  this.store_2Block = new Phaser.Geom.Rectangle(store_2.x, store_2.y, store_2.width, store_2.height);
  this.store_3Block = new Phaser.Geom.Rectangle(store_3.x, store_3.y, store_3.width, store_3.height);
  this.convenienceStore_1Block = new Phaser.Geom.Rectangle(convenienceStore_1.x, convenienceStore_1.y, convenienceStore_1.width, convenienceStore_1.height);
  this.convenienceStore_2Block = new Phaser.Geom.Rectangle(convenienceStore_2.x, convenienceStore_2.y, convenienceStore_2.width, convenienceStore_2.height);
  this.cirque_1Block = new Phaser.Geom.Rectangle(cirque_1.x, cirque_1.y, cirque_1.width, cirque_1.height);
  this.cirque_2Block = new Phaser.Geom.Rectangle(cirque_2.x, cirque_2.y, cirque_2.width, cirque_2.height); 
  this.hotel_1Block = new Phaser.Geom.Rectangle(hotel_1.x, hotel_1.y, hotel_1.width, hotel_1.height);
  this.hotel_2Block = new Phaser.Geom.Rectangle(hotel_2.x, hotel_2.y, hotel_2.width, hotel_2.height);
  this.restaurant_1Block = new Phaser.Geom.Rectangle(restaurant_1.x, restaurant_1.y, restaurant_1.width, restaurant_1.height);
  this.restaurant_2Block = new Phaser.Geom.Rectangle(restaurant_2.x, restaurant_2.y, restaurant_2.width, restaurant_2.height);
  this.shopping_Mall_1Block = new Phaser.Geom.Rectangle(shopping_Mall_1.x, shopping_Mall_1.y, shopping_Mall_1.width, shopping_Mall_1.height);
  this.shopping_Mall_2Block = new Phaser.Geom.Rectangle(shopping_Mall_2.x, shopping_Mall_2.y, shopping_Mall_2.width, shopping_Mall_2.height);
  this.shopping_Mall_3Block = new Phaser.Geom.Rectangle(shopping_Mall_3.x, shopping_Mall_3.y, shopping_Mall_3.width, shopping_Mall_3.height);
  this.chicken_1Block = new Phaser.Geom.Rectangle(chicken_1.x, chicken_1.y, chicken_1.width, chicken_1.height);
  this.chicken_2Block = new Phaser.Geom.Rectangle(chicken_2.x, chicken_2.y, chicken_2.width, chicken_2.height);
  this.alcohol_1Block = new Phaser.Geom.Rectangle(alcohol_1.x, alcohol_1.y, alcohol_1.width, alcohol_1.height);
  this.alcohol_2Block = new Phaser.Geom.Rectangle(alcohol_2.x, alcohol_2.y, alcohol_2.width, alcohol_2.height);
  this.casionBlock = new Phaser.Geom.Rectangle(casion.x, casion.y, casion.width, casion.height);
  this.schoolBlock = new Phaser.Geom.Rectangle(school.x, school.y, school.width, school.height);
  this.theaterBlock = new Phaser.Geom.Rectangle(theater.x, theater.y, theater.width, theater.height);
  this.hospitalBlock = new Phaser.Geom.Rectangle(hospital.x, hospital.y, hospital.width, hospital.height);
  this.musicStoreBlock = new Phaser.Geom.Rectangle(musicStore.x, musicStore.y, musicStore.width, musicStore.height);
  this.cafeBlock = new Phaser.Geom.Rectangle(cafe.x, cafe.y, cafe.width, cafe.height);
  this.bookBlock = new Phaser.Geom.Rectangle(book.x, book.y, book.width, book.height);
  this.prisonBlock = new Phaser.Geom.Rectangle(prison.x, prison.y, prison.width, prison.height);
  this.popoBlock = new Phaser.Geom.Rectangle(popo.x, popo.y, popo.width, popo.height); 
  this.libraryBlock = new Phaser.Geom.Rectangle(library.x, library.y, library.width, library.height);
  this.fire_ChickenBlock = new Phaser.Geom.Rectangle(fire_Chicken.x, fire_Chicken.y, fire_Chicken.width, fire_Chicken.height);
  this.sushiBlock = new Phaser.Geom.Rectangle(sushi.x, sushi.y, sushi.width, sushi.height);
  this.steakBlock = new Phaser.Geom.Rectangle(steak.x, steak.y, steak.width, steak.height);
  this.bankBlock = new Phaser.Geom.Rectangle(bank.x, bank.y, bank.width, bank.height); 
  this.eelBlock = new Phaser.Geom.Rectangle(eel.x, eel.y, eel.width, eel.height);
  this.wuDongBlock = new Phaser.Geom.Rectangle(wuDong.x, wuDong.y, wuDong.width, wuDong.height);
  this.burgerBlock = new Phaser.Geom.Rectangle(burger.x, burger.y, burger.width, burger.height);  
  this.officeBlock = new Phaser.Geom.Rectangle(office.x, office.y, office.width, office.height); 
    
//===========================================================New new=========================================================
this.mapLocationList = [];
this.mapLocationList.push(this.stationBlock);
this.mapLocationList.push(this.mansion_1Block);
this.mapLocationList.push(this.mansion_2Block);
this.mapLocationList.push(this.mansion_3Block);
this.mapLocationList.push(this.mansion_4Block);
this.mapLocationList.push(this.mansion_5Block);
this.mapLocationList.push(this.mansion_6Block);
this.mapLocationList.push(this.mansion_7Block);
this.mapLocationList.push(this.mansion_8Block);
this.mapLocationList.push(this.store_1Block);
this.mapLocationList.push(this.store_2Block);
this.mapLocationList.push(this.store_3Block);
this.mapLocationList.push(this.convenienceStore_1Block);
this.mapLocationList.push(this.convenienceStore_2Block);
this.mapLocationList.push(this.cirque_1Block);
this.mapLocationList.push(this.cirque_2Block);
this.mapLocationList.push(this.hotel_1Block);
this.mapLocationList.push(this.hotel_2Block);
this.mapLocationList.push(this.restaurant_1Block);
this.mapLocationList.push(this.restaurant_2Block);
this.mapLocationList.push(this.shopping_Mall_1Block);
this.mapLocationList.push(this.shopping_Mall_2Block);
this.mapLocationList.push(this.shopping_Mall_3Block);
this.mapLocationList.push(this.chicken_1Block);
this.mapLocationList.push(this.chicken_2Block);
this.mapLocationList.push(this.alcohol_1Block);
this.mapLocationList.push(this.alcohol_2Block);
this.mapLocationList.push(this.casionBlock);
this.mapLocationList.push(this.schoolBlock);
this.mapLocationList.push(this.theaterBlock);
this.mapLocationList.push(this.hospitalBlock);
this.mapLocationList.push(this.musicStoreBlock);
this.mapLocationList.push(this.cafeBlock);
this.mapLocationList.push(this.bookBlock);
this.mapLocationList.push(this.prisonBlock);
this.mapLocationList.push(this.popoBlock);
this.mapLocationList.push(this.libraryBlock);
this.mapLocationList.push(this.fire_ChickenBlock);
this.mapLocationList.push(this.sushiBlock);
this.mapLocationList.push(this.steakBlock);
this.mapLocationList.push(this.bankBlock);
this.mapLocationList.push(this.eelBlock);
this.mapLocationList.push(this.wuDongBlock);
this.mapLocationList.push(this.burgerBlock);
this.mapLocationList.push(this.officeBlock);
      
//===========================================================add collision enemy attack and player===========================================================
  this.physics.add.collider(this.player, bullets, this.bullet_destroy_collide, null, this);
  this.physics.add.collider(this.player, bullets_larger, this.bullet_larger_destroy_collide, null, this);
  this.physics.add.collider(this.player, shit_mines, this.shit_mine_destroy_collide, null, this);
  this.physics.add.overlap(this.player, enemys, this.enemy_collision, null, this);
  this.physics.add.overlap(this.player, enemys_type2, this.enemy_collision, null, this);
  this.physics.add.overlap(this.player, enemys_type3, this.enemy_collision, null, this);
  this.physics.add.overlap(this.player, props, this.collectProp, null, this); //touch props
  this.physics.add.overlap(sprays, enemys, this.spray_effect, null, this);
  this.physics.add.overlap(sprays, enemys_type2, this.spray_effect, null, this);
  this.physics.add.overlap(sprays, enemys_type3, this.spray_effect, null, this);
//===========================================================path finding function library load===========================================================
  this.finder = new EasyStar.js();

    var grid = [];
    for(var y = 0; y < map2.height; y++){
        var col = [];
        for(var x = 0; x < map2.width; x++){
            // In each cell we store the ID of the tile, which corresponds
            // to its index in the tileset of the map ("ID" field in Tiled)
            col.push(this.getTileID.call(this,x,y));
        }
        grid.push(col);
    }
    //console.log(grid);
    //console.log('map2 with: '+map2.width);
    //console.log('map2 lenth: '+map2.height);
    this.finder.setGrid(grid);
    var tileset2 = map2.tilesets[0];
    //console.log(tileset2);
    var properties = tileset2.tileProperties;
    var acceptableTiles = [];
    // We need to list all the tile IDs that can be walked on. Let's iterate over all of them
    // and see what properties have been entered in Tiled.
    for(var i = tileset2.firstgid-1; i < tileset.total; i++){ // firstgid and total are fields from Tiled that indicate the range of IDs that the tiles can take in that tileset
        if(!properties.hasOwnProperty(i)) {
            // If there is no property indicated at all, it means it's a walkable tile
            acceptableTiles.push(i+1);
            continue;
        }
        if(!properties[i].collide) acceptableTiles.push(i+1);
        if(properties[i].cost) this.finder.setTileCost(i+1, properties[i].cost); // If there is a cost attached to the tile, let's register it
    }
    this.finder.setAcceptableTiles(acceptableTiles);
//===========================================================apply bloack model mask===========================================================    
    this.children.sendToBack(backdrop);
    this.children.sendToBack(mask);
    this.time.addEvent({
            delay: 100,
            callback: () => this.enemyPath_ver2.call(this,this,player),
            loop: true
        });
		
		this.time.addEvent({
            delay: 200,
            callback: () => this.bullet_destroy.call(this,this),
            loop: true
        });
		
		this.time.addEvent({
            delay: 200,
            callback: () => this.bullet_larger_destroy.call(this,this),
            loop: true
        });
		
		this.time.addEvent({
            delay: 200,
            callback: () => this.spray_destroy.call(this,this),
            loop: true
        });
		
		this.time.addEvent({
            delay: 20000,
            callback: () => this.shit_mine_generate.call(this,this),
            loop: true
        });
		
		this.time.addEvent({
            delay: 100,
            callback: () => this.spray_timering.call(this,this),
            loop: true
        });
		
		
		

      this.container = this.add.container();  
      this.container.add(enemyArray);
	  this.container.add(enemyArray_type2);
	  this.container.add(enemyArray_type3);
	  //this.container.add(bulletArray);
      
      mask_image = this.make.image({
                x: game.config.width / 16,
                y: game.config.height / 16,
                key: 'mask2',
                add: true
            }).setScale(0).setAlpha(1);
        
        var scale_image = {
            x: 0.02,
            y: 0.02,
            alpha: 1
        };

        this.tweens.add({
            targets: scale_image,
            x: 0.1,
            y: 0.1,
            alpha: 0.5,
            duration: 1000,         
            yoyo: false,
            repeat: -1,
            paused: false,
            onUpdate: function () {
                mask_image.setScale(scale_image.x, scale_image.y);
                //mask_image.setAlpha(scale_image.alpha);
            }
        });
      
      this.children.sendToBack(mask_image);
	  this.children.sendToBack(map_black);
//===========================================================shield create ===========================================================
  var shields = this.physics.add.group();
  this.shields = shields;
  shield1 = this.shields.create(0,0, 'shield1').setDepth(-1);
  shield2 = this.shields.create(0,0, 'shield2').setDepth(-1);
  shield3 = this.shields.create(0,0, 'shield3').setDepth(-1);
  this.shield_update(this);
  this.physics.add.collider(shields, bullets, this.shield_collide, null, this);
  this.physics.add.collider(shields, bullets_larger, this.shield_collide, null, this);
  this.physics.add.collider(shields, shit_mines, this.shield_collide, null, this);
  //this.physics.add.collider(shields, enemys, this.shield_collide_enemy, null, this);
  //this.physics.add.collider(shields, enemys_type2, this.shield_collide_enemy, null, this);
  //this.physics.add.collider(shields, enemys_type3, this.shield_collide_enemy, null, this);
  
//===========================================================set animation main character===========================================================

const anims = this.anims;
  anims.create({
    key: "misa-left-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-right-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-front-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-back-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
    
  anims.create({
    key: "box-misa-left-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "box-misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "box-misa-right-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "box-misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "box-misa-front-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "box-misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "box-misa-back-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "box-misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });    
    
    anims.create({
    key: "zombie-misa-left-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "zombie-misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "zombie-misa-right-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "zombie-misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "zombie-misa-front-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "zombie-misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "zombie-misa-back-walk",
    frames: anims.generateFrameNames(atlasString, { prefix: "zombie-misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });    
    
//===========================================================camera setting===========================================================
  const camera = this.cameras.main;
  camera.startFollow(this.player,true, 0.09, 0.09);
  camera.setBounds(0, 0, map2.widthInPixels, map2.heightInPixels);
  this.cameras.main.setZoom(1);
  this.cameras.main.roundPixels = false;
  this.cameras.renderToGame = true ;

//===========================================================keyboard input control setup===========================================================
  this.cursors = this.input.keyboard.createCursorKeys();
  //Ed
  this.cursors = this.input.keyboard.addKeys(
        {
            up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D
        });    
//===========================================================text flow on window: timer===========================================================
  this.initialTime = 180; //the time now is 20 second
  this.timeText = this.add.text(310, 10, '' + this.formatTime(this.initialTime),{
      font: "14px monospace",
      fill: "#ffffff",
      padding: { x: 10, y: 8 },
      backgroundColor: "#000000",
    })
    .setScrollFactor(0)
    .setDepth(30)
    .setAlpha(0.5)
    .setResolution(textResolution);
  this.timedEvent = this.time.addEvent({
    delay: 1000,
    callback: this.onEvent,
    callbackScope: this,
    loop: true
  });
  //===========================================================text flow on window: coveredTimer=========================================================== addnewnewnew
  this.coverTimerText = this.add.text(10, 10,'' + this.formatTime(coveredTime),{
  font: "14px monospace",
  fill: "#ffffff",
  padding: { x: 10, y: 8 },
  backgroundColor: "#000000",
  })
  .setScrollFactor(0).setDepth(30).setAlpha(0.5).setResolution(textResolution);
//===========================================================text flow on window: debug===========================================================
  // Help text that has a "fixed" position on the screen
/*  
var textBox = this.add
    .text(10 , 10, 'Arrow keys to move\nPress "E" to show hitboxes', {
      font: "14px monospace",
      fill: "#ffffff",
      padding: { x: 10, y: 8 },
      backgroundColor: "#000000",
    })
    .setScrollFactor(0)
    .setDepth(30)
    .setAlpha(0.5)
    .setResolution(textResolution);
//textBox.fixedToCamera = true;
*/ 
  //Ed
  this.input.keyboard.once("keydown_E", event => {
    // Turn on physics debugging to show player's hitbox
    this.physics.world.createDebugGraphic();

    // Create worldLayer collision graphic above the player, but below the help text
    const graphics = this.add
      .graphics()
      .setAlpha(0.75)
      .setDepth(20);
    building.renderDebug(graphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
  });
 
this.fontsize = 10;
this.textResolution2 = 1;    
//===========================================================mission message===========================================================    
if (level == 0){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1.24 hours\n2. Eat too much candy',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 1){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. PolyU\n2. Beautiful',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 2){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Eat\n2. Eat',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 3){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Marvel\n2.Lamborghini',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 4){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Li Ka-shing\n2. Poor money',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 5){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Coffee\n2. Snack',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 6){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Sogo\n2. Beethoven',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 7){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Cage bird\n2. Working',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 8){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. DC\n2. Piano',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 9){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. sell items\n2. dinner',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 10){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Gambling\n2. Drunk',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 11){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. Learning\n2. Mother of egg',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 12){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\n1. 7-11\n2.green object',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);}
if (level == 13){this.missionMessage = this.add.text(117,235,'Hints: Search for 2 Destination\nWar Between C9s\nWar Between C9s',{fontSize:this.fontsize}).setScrollFactor(0).setDepth(11).setResolution(this.textResolution2);} 
    
//===========================================================covered Timer set text=========================================================== 
    this.coverTimerText.setText('Covered countdown:' + this.formatTime(coveredTime));
    this.updatePropBox();
//===========================================================Create End===========================================================
}


update(time, delta) {

//Ed    
//===========================================================Task create!!!!!!!===========================================================      
//var propsName = ["protect", "toiletpaper","alcohol","goggles","Rice","cupnoodle","spray","webCam","microphone","SanitaryPad"] ;
if(level == 0){
    this.taskCreator(this,'','','','','There is no mask for sale........... .............. ...........');
    

    
}else if(level == 1){
    this.taskCreator(this,'','','','','There are no toilet papers for sale......... ............... .............');
    
}else if(level == 2){
    this.taskCreator(this,'','','','','There are no alcohol-based hand sanitisers for sale............ ............ ........... .............');
    
}else if(level == 3){
    this.taskCreator(this,'','','','','There are no Protective goggles for sale......................................................');
    
}else if(level == 4){
    this.taskCreator(this,'','','','','There is no Rice for sale........ .............. .................. ..... ......');
    
}else if(level == 5){
    this.taskCreator(this,'','','','','There are no Cup-noodles  for sale.......... ............... .................. ........'); 
    
  }else if(level == 6){
    this.taskCreator(this,this.shopping_Mall_2Block,this.musicStoreBlock,'This shopping mall is currently having a time sale of disinfectant alcohol spray! Unfortunately, Geok Mou was so late, therefore only 2 bottles of disinfectant alcohol spray were left. So 3 disinfectant alcohol sprays get!!','This is an event held in this music equipment store. 3 disinfectant alcohol sprays are given to the one who gives out musical performance. Therefore Goek Mou starts to sing, but he sings so badly so 3 sprays are thrown out of the store together with Goek Mou ........ ....... 3 disinfectant alcohol sprays get!!','There are no disinfectant alcohol spray for sale.......... ............... .................. ........'); 
    
  }else if(level == 7){
    this.taskCreator(this,this.prisonBlock,this.officeBlock,'A prisoner in this prison stole a web camera from a jailer, but then he noticed that he also needed to steal a computer in order to use the web camera to contact his family. Since it is too difficult to steal the computer, he gave up and gave the web camera to Goek Mou. 1 web camera get!!','An employee in this office bought 2 web cameras yesterday, but then he was told by his boss that he cannot work from home. Therefore he gave these useless web cameras to Goek Mou, he looked so sad. 2 web cameras get!!','There are no web cameras for sale.......... ............... .................. ........'); 
    
  }else if(level == 8){
    this.taskCreator(this,this.theaterBlock,this.musicStoreBlock,'Goek Mou’s Boss told him he wants to listen to Goek Mou’s report tomorrow. And he goes to the cinema to find the microphone. The ticket seller gave 2 microphones to Goek Mou. There were 2 microphones get!','A Youtuber bought 3 Microphones yesterday and wanted to record the ASMR, but then he found that the microphones were so cheap that he couldn\'t record ASMR. Thus, he gave those microphones to Goek Mou. 3 microphones get!','There are no microphones for sale.......... ............... .................. ........'); 
    
  }else if(level == 9){
    this.taskCreator(this,this.store_1Block,this.restaurant_2Block,'Goek Mou being shy and asked the storekeeper if she has any extra sanitary pad for his wife. The storekeeper gave Goek Mou 6 sanitary pads for free to reward for his courage. So 6 sanitary pads get!!','Goek Mou had lunch in the restaurant. After finishing the meal, he had diarrhea and rushed to the toilet. When he finally finished, he noticed that this was a ladies toilet. There were 5 new sanitary pads left near the sink and then he took it. So 5 sanitary pads get!!','There are no sanitary pads for sale.......... ............... .................. ........');
    
  }else if(level == 10){
    this.taskCreator(this,this.casionBlock,this.alcohol_2Block,'As the mask supply faced a huge shortage, the casino decided to use masks as chips for people to gamble. 1 mask worth $100. Goek Mou used all the cash to bet on the Tai Sai(big-small), and won! 20 masks get!!','The shopkeeper broke up yesterday. He looked very sad. Goek Mou had a heart-to-heart talk with him while they were drinking. Then, the shopkeeper was so drunk that he gave 11 masks to Goek Mou! 11 masks get!!','There are no masks for sale.......... ............... .................. ........'); 
    
  }else if(level == 11){
    this.taskCreator(this,this.schoolBlock,this.chicken_2Block,'Goek Mou’s son forgot to bath for 3 days and become smelly. When he finally realized why his friend avoided him at school, his teacher contacted Goek Mou and gave Goek Mou 7 disinfectant alcohol spray for cleaning his son. So 12 disinfectant alcohol sprays get!!','The Chicken store is holding a tongue twisters event. If a customer finishes the tongue twister in 10 seconds, 7 alcohol-based hand sanitizers will be given as rewards. Goek Mou finished it in 8 seconds. 12 alcohol-based hand sanitizers get!!','There are no alcohol-based hand sanitizers or disinfectant alcohol spray for sale.......... ............... .................. ........'); 
    
  }else if(level == 12){
    this.taskCreator(this,this.convenienceStore_1Block,this.popoBlock,'New taste of cup-noodles started to sell in this convenience store today. Goek Mou rushed to this convenience store to buy 10 cup-noodles. It’s stinky tofu tastes……………10 cup-noodles get!!','There was a lot of confiscated toilet paper in the police station. Those cup-noodles are almost expired. So these confiscated cup-noodles were abandoned in the front exit of the police station. Goek Mou took 10 toilet papers. 10 toilet papers get!!','There are no cup-noodles or toilet paper for sale.......... ............... .................. ........'); 
    
  }else if(level == 13){
    this.taskCreator(this,this.shopping_Mall_1Block,this.shopping_Mall_2Block,'This is a war between Goek Mou and the C9s. Every contestant used the shopping cart with speed and furiousness, grabbing the daily necessities! Finally, Goek Mou got 10 masks, 10 alcohol-based hand sanitizers, 10 disinfectant alcohol sprays!!','This shopping mall looked like a ruin. It’s like an area destroyed by a tornado. The goods were not on the shelves, but scattered on the floor. It’s so hard for Goek Mou to find 10 cup noodles, 10 toilet papers but he had done it!!! 10 cup noodles and 10 toilet papers get!!','There is nothing for sale.......... ............... .................. ........'); 
    
  }
    
//Ed    
//=========================================================== game checker=========================================================== 
if (requirement == 2 && changeMessage == true){
    missionIsComplete = true;
    this.missionMessage.destroy();
    this.missionMessage2 = this.add.text(117,235,'Mission Complete!\nLet\'s go home!',{fontSize:15}).setScrollFactor(0).setDepth(11).setResolution(1);
    changeMessage == false;
}
//Ed 
if (this.initialTime == 0){
    this.timeText.setDepth(-1);
    gameOver = 4;
}
  
//===========================================================shield follow player position===========================================================
	shield1.x = this.player.x-1;
	shield1.y = this.player.y+12;
	shield2.x = this.player.x-1;
	shield2.y = this.player.y+12;
	shield3.x = this.player.x-1;
	shield3.y = this.player.y+12; 
    
//===========================================================character movement===========================================================
  const speed = 175;
  const prevVelocity = this.player.body.velocity.clone();
    
  // Stop any previous movement from the last frame
  this.player.body.setVelocity(0);
  // Horizontal movement

	if (this.cursors.left.isDown) {
		this.player.body.setVelocityX(-speed);
		shield1.x = this.player.x-7;		
		shield2.x = this.player.x-7;
		shield3.x = this.player.x-7;

	} else if (this.cursors.right.isDown) {
		this.player.body.setVelocityX(speed);
		shield1.x = this.player.x+5;		
		shield2.x = this.player.x+5;
		shield3.x = this.player.x+5;
	}

  // Vertical movement
  if (this.cursors.up.isDown) {
    this.player.body.setVelocityY(-speed);
		shield1.y = this.player.y+7;
		shield2.y = this.player.y+7;		
		shield3.y = this.player.y+7;
  } else if (this.cursors.down.isDown) {
    this.player.body.setVelocityY(speed);
		shield1.y = this.player.y+18;
		shield2.y = this.player.y+18;		
		shield3.y = this.player.y+18;
  }
  
  if (this.cursors.left.isDown) {
	  if (this.cursors.up.isDown) {
		shield1.x = this.player.x-5;
		shield1.y = this.player.y+8;
		shield2.x = this.player.x-5;
		shield2.y = this.player.y+8;
		shield3.x = this.player.x-5;
		shield3.y = this.player.y+8;
	  }
	  if (this.cursors.down.isDown) {
		shield1.x = this.player.x-5;
	shield1.y = this.player.y+16;
	shield2.x = this.player.x-5;
	shield2.y = this.player.y+16;
	shield3.x = this.player.x-5;
	shield3.y = this.player.y+16;
	  }
  }
  if (this.cursors.right.isDown) {
	  if (this.cursors.up.isDown) {
		shield1.x = this.player.x+3;
		shield1.y = this.player.y+8;
		shield2.x = this.player.x+3;
		shield2.y = this.player.y+8;
		shield3.x = this.player.x+3;
		shield3.y = this.player.y+8;
	  }
	  if (this.cursors.down.isDown) {
		shield1.x = this.player.x+3;
		shield1.y = this.player.y+16;
		shield2.x = this.player.x+3;
		shield2.y = this.player.y+16;
		shield3.x = this.player.x+3;
		shield3.y = this.player.y+16;
	  }
  }
  
  this.shield_update.call();

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  this.player.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations

if (mode == 1){
   
  if (this.cursors.left.isDown) {
    this.player.anims.play("box-misa-left-walk", true);
  } else if (this.cursors.right.isDown) {
    this.player.anims.play("box-misa-right-walk", true);
  } else if (this.cursors.up.isDown) {
    this.player.anims.play("box-misa-back-walk", true);
  } else if (this.cursors.down.isDown) {
    this.player.anims.play("box-misa-front-walk", true);
  } else {
    this.player.anims.stop(); 

  if (prevVelocity.x < 0) {this.player.setTexture(atlasString, "box-misa-left"); this.direction = "left";}
  else if (prevVelocity.x > 0) {this.player.setTexture(atlasString, "box-misa-right");this.direction = "right";}
  else if (prevVelocity.y < 0) {this.player.setTexture(atlasString, "box-misa-back");this.direction = "back";}
  else if (prevVelocity.y > 0) {this.player.setTexture(atlasString, "box-misa-front");this.direction = "front";}   
  }
    
}else if (mode == 0){
      if (this.cursors.left.isDown) {
    this.player.anims.play("misa-left-walk", true);
  } else if (this.cursors.right.isDown) {
    this.player.anims.play("misa-right-walk", true);
  } else if (this.cursors.up.isDown) {
    this.player.anims.play("misa-back-walk", true);
  } else if (this.cursors.down.isDown) {
    this.player.anims.play("misa-front-walk", true);
  } else {
    this.player.anims.stop();

    // If we were moving, pick and idle frame to use
    if (prevVelocity.x < 0) {this.player.setTexture(atlasString, "misa-left");this.direction = "left";}
    else if (prevVelocity.x > 0) {this.player.setTexture(atlasString, "misa-right");this.direction = "right";}
    else if (prevVelocity.y < 0) {this.player.setTexture(atlasString, "misa-back");this.direction = "back";}
    else if (prevVelocity.y > 0) {this.player.setTexture(atlasString, "misa-front");this.direction = "front";}
  }
}

//===========================================================Call mask function===========================================================
cursors = this.input.keyboard.addKeys({
            mode: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
		
		if(coveredTime == 0 && noCovered == 0){
       mode = 0;
		   this.timedEvent.destroy(); //uncovered mode timer stop
			for(var i = 0; i<indicatorArray.length;i++){
				
				indicatorArray[i].setDepth(-1);
			}
            
    if (this.direction == "left") this.player.setTexture(atlasString, "misa-left");
    else if (this.direction == "right") this.player.setTexture(atlasString, "misa-right");
    else if (this.direction == "back") this.player.setTexture(atlasString, "misa-back");
    else if (this.direction == "front") this.player.setTexture(atlasString, "misa-front");
            
            mode = 0;
            scale = {
                x: 0,
                y: 0,
                alpha: 1
            };
            this.player.mask = null;
			spray_little.mask = null;
			this.container.mask = null;
			mask_image.mask = null;
			shield1.mask = null;
			shield2.mask = null;
			shield3.mask = null;
            this.container.setDepth(1);
            this.player.setDepth(1);
			
			
			backdrop.setDepth(-1);
			mask_image.setDepth(-1);
			map_black.setDepth(-1);
			mask.setDepth(-1);
		   
			noCovered = 1;
		   }

  if (Phaser.Input.Keyboard.JustDown(cursors.mode) && coveredTime>0) {
    //console.log(this.player.x);
    //console.log(this.player.y);
        if (mode == 0) {
		   mode = 1;
		
            this.timedEvent = this.time.addEvent({
              delay: 1000,
              callback: this.onCoverTimeEvent,
              callbackScope: this,
              loop: true
            }); //covered mode timer
            //Game.switchMode();       
      if (this.direction == "left") this.player.setTexture(atlasString, "box-misa-left");
      else if (this.direction == "right") this.player.setTexture(atlasString, "box-misa-right");
      else if (this.direction == "back") this.player.setTexture(atlasString, "box-misa-back");
      else if (this.direction == "front") this.player.setTexture(atlasString, "box-misa-front");         
      
            
	  backdrop.setDepth(11);
	  mask_image.setDepth(12);
	  map_black.setDepth(12);
	  mask.setDepth(12);
	  
      
      //mask effect
            var scale = {
                x: 0.04,
                y: 0.04,
                alpha: 1
            };
            this.tweens.add({

                targets: scale,

                x: 0.15,
                y: 0.15,
                alpha: 0.5,
                duration: 1500,
                ease: 'Linear.easeNone',
                yoyo: false,
                repeat: -1,
                paused: false,
				add: true,

                onUpdate: function () {
                    mask.setScale(scale.x, scale.y);
                    mask.setAlpha(scale.alpha);
				mask_image.setScale(scale.x, scale.y);
				mask_image.setAlpha(scale.alpha);

                }

            });
      
  
            this.player.mask = new Phaser.Display.Masks.BitmapMask(this, mask); 
            this.container.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			map_black.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			shield1.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			shield2.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			shield3.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			spray_little.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
			
			this.container.setDepth(13);
			this.player.setDepth(13);
			mask_image.setDepth(12);
      
      //this.children.bringToTop(mask);
      //this.children.bringToTop(mask_image);
      
        } else if (mode == 1) {
			
			
			
          this.timedEvent.destroy(); //uncovered mode timer stop
			for(var i = 0; i<indicatorArray.length;i++){
				
				indicatorArray[i].setDepth(-1);
			}
            
    if (this.direction == "left") this.player.setTexture(atlasString, "misa-left");
    else if (this.direction == "right") this.player.setTexture(atlasString, "misa-right");
    else if (this.direction == "back") this.player.setTexture(atlasString, "misa-back");
    else if (this.direction == "front") this.player.setTexture(atlasString, "misa-front");
            
            mode = 0;
            scale = {
                x: 0,
                y: 0,
                alpha: 1
            };
            this.player.mask = null;
           
			this.container.mask = null;
			mask_image.mask = null;
			shield1.mask = null;
			shield2.mask = null;
			shield3.mask = null;
            this.container.setDepth(1);
            this.player.setDepth(1);
			
			
			backdrop.setDepth(-1);
			mask_image.setDepth(-1);
			map_black.setDepth(-1);
			mask.setDepth(-1);
        }
    }

    //console.log('mode = ' + mode);

    mask.x = this.player.x;
    mask.y = this.player.y;
  
    mask_image.x = this.player.x;
    mask_image.y = this.player.y;
	
	
	if(mode == 1){
		allEnemyArray.length = 0;
		
			this.indicators.children.iterate(function (child) {				
				child.setDepth(-1);		
			});
			this.enemys.children.iterate(function (child) {				
				allEnemyArray.push(child);				
			});
			this.enemys_type2.children.iterate(function (child) {				
				allEnemyArray.push(child);				
			});
			this.enemys_type3.children.iterate(function (child) {				
				allEnemyArray.push(child)				
			});
			
			for(var i = 0; i<allEnemyArray.length;i++){
				indicatorArray[i].x = allEnemyArray[i].x-5;
				indicatorArray[i].y = allEnemyArray[i].y+10;
				indicatorArray[i].setDepth(13);
			}
	
	}
	
	if(gameOver == 1){
		
		mode = 0;
		//this.player.body.enable = false;
		screenFader.setDepth(14);
		var scale2 = {               
                alpha: 0
            };
            this.tweens.add({

                targets: scale2,
               
                alpha: 1,
                duration: 1500,
                repeat: 0,
                paused: false,
				add: true,

                onUpdate: function () {                    
                    screenFader.setAlpha(scale2.alpha);
					//console.log('scale2.alpha: '+scale2.alpha);	
					//console.log('health: '+health);		
					
                }

            });
        
        if (this.dialogIsOn == false){    
        this.dialogIsOn = true;    
        
        if (level<6){
            this.dieMessage = "OMG! Mission Failed! You have got infected! You will send to Hospital for 14 days isolation :( Add Oils! You have to Finished the mission! Your family needs you!";
        }else{
            this.dieMessage = "You may go to City through station next Time!! OMG! Mission Failed! You have got infected! You will send to Hospital for 14 days isolation :( Add Oils! You have to Finished the mission! Your family needs you!";
        } 
            
        this.dialogBox = this.createTextBox(this, 45, 150, {
                  wrapWidth: 300,
                  fixedWidth: 270,
                  fixedHeight:30,    
              })
              .start(this.dieMessage, 50)
              .setScrollFactor(0)
              .setDepth(30)
              .setAlpha(0.8);    
        } 
        
        this.physics.pause();
        gameOver = 2;
        
    //Ed    
	}else if(gameOver == 4){
        mode = 0;
		//this.player.body.enable = false;
		screenFader.setDepth(14);
		var scale2 = {               
                alpha: 0
            };
            this.tweens.add({

                targets: scale2,
               
                alpha: 1,
                duration: 1500,
                repeat: 0,
                paused: false,
				add: true,

                onUpdate: function () {                    
                    screenFader.setAlpha(scale2.alpha);
					//console.log('scale2.alpha: '+scale2.alpha);	
					//console.log('health: '+health);		
					
                }

            });
        if (this.dialogIsOn == false){
        this.dialogIsOn = true;    
        
        if (level<6){
            this.timeOutmessage = "OMG time is Up! Mission Failed! You have got infected because you are exposed under virus environment for too long! You will send to Hospital for 14 days isolation :( Add Oils! You have to Finished the mission! Your family needs you!";
        }else{
            this.timeOutmessage = "You may go to City through station next Time!! OMG time is Up! Mission Failed! You have got infected because you are exposed under virus environment for too long! You will send to Hospital for 14 days isolation :( Add Oils! You have to Finished the mission! Your family needs you!";
        }    
            
        this.dialogBox = this.createTextBox(this, 45, 150, {
                  wrapWidth: 300,
                  fixedWidth: 270,
                  fixedHeight:30,    
              })
              .start(this.timeOutmessage, 50)
              .setScrollFactor(0)
              .setDepth(30)
              .setAlpha(0.8);    
        } 
        
        this.physics.pause();
        gameOver = 2;
    }
    
    //console.log("Checking"+this.jumpScene);
    if(this.jumpScene && gameOver == 2){
      //new
      prop_list[0] = prop_list_backup[0];
      prop_list[1] = prop_list_backup[1];
      this.music.stop();
      this.scene.start("Menu");
      this.scene.stop('Game2');
  }
    if(this.jumpScene && gameOver == 5){
        //Ed
        this.music.stop();
        this.scene.start("Game");
        this.scene.stop('Game2');
    }
    
	spray_little.x = this.player.x;
	spray_little.y = this.player.y+12;
//===========================================================update end===========================================================
}

//===========================================================functon zone===========================================================
//===========================================================functon zone===========================================================
//===========================================================path finding function===========================================================
getTileID(x,y){
    //console.log(x);
    //console.log(y);
    var tile = this.map2.getTileAt(x, y);
    //console.log(tile);
    return tile.index;
}


enemyPath_ver2(player) {
    let that = this;  
    wandering_counter++;
  
    this.enemys.children.iterate(function (child) {
       if(child.data.get('distracted_protect')==1){ 
			
			if(protectArray[0] != undefined){
				
			var temp = parseInt(protectArray[0].data.get('timer'));
			protectArray[0].data.set('timer',temp+1);
						
			
			if(protectArray[0].data.get('timer')>480){
				
				child.data.set('distracted_protect',0);
				protectArray[0].setDepth(-1);
				
			}
			that.enemyPath.call(that,child.x, child.y, child,protectArray[0]);
			}else if (protectArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   }else if (child.data.get('distracted_protect')==2){
		   
		   if(toiletPaperArray[0] != undefined){
			var temp = parseInt(toiletPaperArray[0].data.get('timer'));
			toiletPaperArray[0].data.set('timer',temp+1);
							
			
			if(toiletPaperArray[0].data.get('timer')>480){
				
				child.data.set('distracted_protect',0);
				toiletPaperArray[0].setDepth(-1);
				
			}
			that.enemyPath.call(that,child.x, child.y, child,toiletPaperArray[0]);
			}else if (toiletPaperArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   
	   }else{
      var distance = Math.sqrt(Math.pow((that.player.x - child.x ),2) + Math.pow((that.player.y - child.y),2))/40;
	  
				if(distance < 2 && distance >1){
					
					child.data.set('locationX',child.x);
					child.data.set('locationY',child.y);
					
				}	  			
				
				if(mode == 0){
					
					if (distance < 8) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
					
				}else if (mode == 1){
					if (distance < 1.5) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
				}
	   }		
    });
	
	this.enemys_type2.children.iterate(function (child) {
       if(child.data.get('distracted_protect')==1){ 
			if(protectArray[0] != undefined){
			var temp = parseInt(protectArray[0].data.get('timer'));
			protectArray[0].data.set('timer',temp+1);
			
			if(protectArray[0].data.get('timer')>480){
				child.data.set('distracted_protect',0);
				protectArray[0].setDepth(-1);
			}
			that.enemyPath.call(that,child.x, child.y, child,protectArray[0]);
			}else if (protectArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   }else if (child.data.get('distracted_protect')==2){
		   
		   if(toiletPaperArray[0] != undefined){
			var temp = parseInt(toiletPaperArray[0].data.get('timer'));
			toiletPaperArray[0].data.set('timer',temp+1);
								
			
			if(toiletPaperArray[0].data.get('timer')>480){
				
				child.data.set('distracted_protect',0);
				toiletPaperArray[0].setDepth(-1);
				
			}
			that.enemyPath.call(that,child.x, child.y, child,toiletPaperArray[0]);
			}else if (toiletPaperArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   
	   }else{     
      var distance = Math.sqrt(Math.pow((that.player.x - child.x ),2) + Math.pow((that.player.y - child.y),2))/40;
	  
				if(distance < 2 && distance >1){
					
					child.data.set('locationX',child.x);
					child.data.set('locationY',child.y);
					
				}
				
				if(mode == 0){
					
					if (distance < 8) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
					
				}else if (mode == 1){
					if (distance < 1.5) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
				}
	   }		
    });
	
	this.enemys_type3.children.iterate(function (child) {
       if(child.data.get('distracted_protect')==1){ 
			if(protectArray[0] != undefined){ 
			var temp = parseInt(protectArray[0].data.get('timer'));
			protectArray[0].data.set('timer',temp+1);
			
			if(protectArray[0].data.get('timer')>480){
				child.data.set('distracted_protect',0);
				protectArray[0].setDepth(-1);
			}
			that.enemyPath.call(that,child.x, child.y, child,protectArray[0]);
			}else if (protectArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   }else if (child.data.get('distracted_protect')==2){
		   
		   if(toiletPaperArray[0] != undefined){
			var temp = parseInt(toiletPaperArray[0].data.get('timer'));
			toiletPaperArray[0].data.set('timer',temp+1);
								
			
			if(toiletPaperArray[0].data.get('timer')>480){
				
				child.data.set('distracted_protect',0);
				toiletPaperArray[0].setDepth(-1);
				
			}
			that.enemyPath.call(that,child.x, child.y, child,toiletPaperArray[0]);
			}else if (toiletPaperArray[0] == undefined){
				child.data.set('distracted_protect',0);
			}
	   
	   }else{     
      var distance = Math.sqrt(Math.pow((that.player.x - child.x ),2) + Math.pow((that.player.y - child.y),2))/40;
	  
				if(distance < 2 && distance >1){
					
					child.data.set('locationX',child.x);
					child.data.set('locationY',child.y);
					
				}
	  
				if(mode == 0){
					
					if (distance < 8) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing_wandering.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
					
				}else if (mode == 1){
					if (distance < 1.5) {
						that.enemyPath.call(that,child.x, child.y, child,that.player);					
						that.enemyFacing_wandering.call(that, child);
					
					
					}else{
						if(wandering_counter > 20){
								that.enemyWandering.call(that,child.x, child.y, child);
								that.enemyFacing_wandering.call(that, child);
								wandering_reset = 1;
						}
					};
				}
	   }		
    });
    
    if(wandering_reset == 1){
      wandering_counter = 0;
      wandering_reset = 0;
    }
    
}

enemyFacing(child){
	
	let that = this;
	
	if (child.data.get('direction_counter') == 0){
						
						child.data.set('markX_first',child.x);
						child.data.set('markY_first',child.y);
						child.data.set('direction_counter',1);
						
						
					}else if (child.data.get('direction_counter') == 1){
						child.data.set('markX_second',child.x);
						child.data.set('markY_second',child.y);
						
						var x2_x1 = child.data.get('markX_second')-child.data.get('markX_first');
						var y2_y1 = child.data.get('markY_second')-child.data.get('markY_first');
						var absoluteCalculation = Math.abs(x2_x1)-Math.abs(y2_y1);
										
						//horizontal movement > vertical movement in zombie
						if(absoluteCalculation>0){
								
											
							//x is positive = going right
							if(x2_x1>0){
								//look right
								child.anims.play("zombie-misa-right-walk", true);
									child.data.set('facing',2);
								
								//5 counter for one second as 0.1*2 for one update here
								if(child.data.get('shootCounter')>=30){									
									//create bullet
									if(child.data.get('enemyType')==1){
										that.createBullet.call(that,child.x, child.y,2);//2 = facing right
									}else if (child.data.get('enemyType')==2){
										that.createBullet_larger.call(that,child.x, child.y,2);//2 = facing right
									}
																
									child.data.set('shootCounter',0);
								}

									var shootCounter_temp = parseInt(child.data.get('shootCounter'));
								child.data.set('shootCounter',shootCounter_temp+1);
							}else if (x2_x1<0){//x is nagative = going left
								//look left
								child.anims.play("zombie-misa-left-walk", true);
									child.data.set('facing',4);
																
								//5 counter for one second as 0.1*2 for one update here
								if(child.data.get('shootCounter')>=30){
									
									//create bullet									
									if(child.data.get('enemyType')==1){
										that.createBullet.call(that,child.x, child.y,4);//4 = facing left
									}else if (child.data.get('enemyType')==2){
										that.createBullet_larger.call(that,child.x, child.y,4);//4 = facing left
									}									
									child.data.set('shootCounter',0);
								}									
								var shootCounter_temp = parseInt(child.data.get('shootCounter'));
								child.data.set('shootCounter',shootCounter_temp+1);																
							}
							
						}else if (absoluteCalculation<0){
							//horizontal movement < vertical movement in zombie->walking vertical
							
							if(y2_y1>0){
								//look downward
								child.anims.play("zombie-misa-front-walk", true);
									child.data.set('facing',3);
																
								//5 counter for one second as 0.1*2 for one update here
								if(child.data.get('shootCounter')>=30){									
									//create bullet									
									if(child.data.get('enemyType')==1){
										that.createBullet.call(that,child.x, child.y,3);//3 = facing downward
									}else if (child.data.get('enemyType')==2){
										that.createBullet_larger.call(that,child.x, child.y,3);//3 = facing downward
									}	
									child.data.set('shootCounter',0);
								}									
								var shootCounter_temp = parseInt(child.data.get('shootCounter'));
								child.data.set('shootCounter',shootCounter_temp+1);
							}else if (y2_y1<0){//y is nagative = going upward
								//look upward
								child.anims.play("zombie-misa-back-walk", true);
									child.data.set('facing',1);
								
								
								//5 counter for one second as 0.1*2 for one update here
								if(child.data.get('shootCounter')>=30){
									
									//create bullet									
									if(child.data.get('enemyType')==1){
										that.createBullet.call(that,child.x, child.y,1);//1 = facing upward
									}else if (child.data.get('enemyType')==2){
										that.createBullet_larger.call(that,child.x, child.y,1);//1 = facing upward
									}	
									child.data.set('shootCounter',0);
								}									
								var shootCounter_temp = parseInt(child.data.get('shootCounter'));
								child.data.set('shootCounter',shootCounter_temp+1);															
							}
						}else if(absoluteCalculation==0){
						
							child.anims.stop();
						}
																	
						child.data.set('direction_counter',0);				
					}
	
}

enemyFacing_wandering(child){
	
	let that = this;
	
	if (child.data.get('direction_counter') == 0){
						
						child.data.set('markX_first',child.x);
						child.data.set('markY_first',child.y);
						child.data.set('direction_counter',1);
						
						
					}else if (child.data.get('direction_counter') == 1){
						child.data.set('markX_second',child.x);
						child.data.set('markY_second',child.y);
						
						var x2_x1 = child.data.get('markX_second')-child.data.get('markX_first');
						var y2_y1 = child.data.get('markY_second')-child.data.get('markY_first');
						var absoluteCalculation = Math.abs(x2_x1)-Math.abs(y2_y1);
										
						//horizontal movement > vertical movement in zombie
						if(absoluteCalculation>0){
								
											
							//x is positive = going right
							if(x2_x1>0){
								//look right
								child.anims.play("zombie-misa-right-walk", true);
									child.data.set('facing',2);
								
							}else if (x2_x1<0){//x is nagative = going left
								//look left
								child.anims.play("zombie-misa-left-walk", true);
									child.data.set('facing',4);
																						
							}
							
						}else if (absoluteCalculation<0){
							//horizontal movement < vertical movement in zombie->walking vertical
							
							if(y2_y1>0){
								//look downward
								child.anims.play("zombie-misa-front-walk", true);
									child.data.set('facing',3);
								
							}else if (y2_y1<0){//y is nagative = going upward
								//look upward
								child.anims.play("zombie-misa-back-walk", true);
									child.data.set('facing',1);
																						
							}
						}else if(absoluteCalculation==0){
						
							child.anims.stop();
						}
																	
						child.data.set('direction_counter',0);				
					}
	
}

enemyPath(x_child, y_child, child,player){
	
	let that = this;
    var x2 = player.x;
    var y2 = player.y;
    var toX2 = Math.round(x2/40);
    var toY2 = Math.round(y2/40);

    var fromX2 = Math.round(x_child/40);
    var fromY2 = Math.round(y_child/40);
	
	var speed1 = child.data.get('Speed1');	
	var speed2 = child.data.get('Speed2');
      this.finder.findPath(fromX2, fromY2, toX2, toY2, function (path) {
		//console.log('inside find path going from ('+fromX2+','+fromY2+') to ('+toX2+','+toY2+')');
		
        if (path === null) {
            //console.warn("enemy Path Path was not found.");
        } else {
            //console.log(path);
            
            var tweens = [];
            for (var i = 0; i < path.length - 1; i++) {
                var ex = path[i + 1].x;
                var ey = path[i + 1].y;
                tweens.push({
                    targets: child,
                    x: {
                        value: ex * that.map2.tileWidth,
                        duration: that.getRandomInt.call(this,speed1,speed2)//150,250
						//duration: 200
                    },
                    y: {
                        value: ey * that.map2.tileHeight,
                        duration: that.getRandomInt.call(this,speed1,speed2)
						//duration: 200
                    }
                });
            }

            child.scene.tweens.timeline({
                tweens: tweens
            });

        }
    });
    this.finder.calculate(); // don't forget, otherwise nothing happens
};

//===========================================================timer function===========================================================
formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var partInSeconds = seconds % 60;
    partInSeconds = partInSeconds.toString().padStart(2, '0');
    return `${minutes}:${partInSeconds}`;
  }
//===========================================================create enemy===========================================================
createEnemy(x, y) {
  
	var zombie = this.enemys.create(x,y, atlasString,"zombie-misa-front");
    zombie.setDepth(1);
	zombie.setSize(30, 40);
	zombie.setOffset(0, 24)
    zombie.setOrigin(0, 0.5);
    zombie.setCollideWorldBounds(true);
    
  zombie.setDataEnabled();
  zombie.data.set('markX_first',0);
  zombie.data.set('markY_first',0);
  zombie.data.set('markX_second',0);
  zombie.data.set('markY_second',0);
  zombie.data.set('shootCounter',0);
  zombie.data.set('direction_counter',0);
  zombie.data.set('enemyType',1);
  zombie.data.set('facing',1);
  zombie.data.set('locationX',0);
  zombie.data.set('locationY',0);
  zombie.data.set('distracted_protect',0);      
  
  if(level == 0){zombie.data.set('Speed1',400);
  zombie.data.set('Speed2',500);
  }else if (level == 1){zombie.data.set('Speed1',380);
  zombie.data.set('Speed2',480);
  }else if (level == 2){zombie.data.set('Speed1',360);
  zombie.data.set('Speed2',460);
  }else if (level == 3){zombie.data.set('Speed1',340);
  zombie.data.set('Speed2',440);
  }else if (level == 4){zombie.data.set('Speed1',320);
  zombie.data.set('Speed2',420);
  }else if (level == 5){zombie.data.set('Speed1',300);
  zombie.data.set('Speed2',400);
  }else if (level == 6){zombie.data.set('Speed1',280);
  zombie.data.set('Speed2',380);
  }else if (level == 7){zombie.data.set('Speed1',260);
  zombie.data.set('Speed2',360);
  }else if (level == 8){zombie.data.set('Speed1',240);
  zombie.data.set('Speed2',340);
  }else if (level == 9){zombie.data.set('Speed1',220);
  zombie.data.set('Speed2',320);
  }else if (level == 10){zombie.data.set('Speed1',200);
  zombie.data.set('Speed2',300);
  }else if (level == 11){zombie.data.set('Speed1',180);
  zombie.data.set('Speed2',280);
  }else if (level == 12){zombie.data.set('Speed1',165);
  zombie.data.set('Speed2',265);
  }else if (level == 13){zombie.data.set('Speed1',150);
  zombie.data.set('Speed2',250);
  }
  enemyArray.push(zombie);
  allEnemyArray_2.push(zombie);
}
//===========================================================create enmey type 2===========================================================
createEnemy_type2(x, y) {
  
	var zombie_type2 = this.enemys_type2.create(x,y, atlasString,"zombie-misa-front");
    zombie_type2.setDepth(1);
	zombie_type2.setSize(30, 40);
	zombie_type2.setOffset(0, 24)
    zombie_type2.setOrigin(0, 0.5);
    zombie_type2.setCollideWorldBounds(true);
    
  zombie_type2.setDataEnabled();
  zombie_type2.data.set('markX_first',0);
  zombie_type2.data.set('markY_first',0);
  zombie_type2.data.set('markX_second',0);
  zombie_type2.data.set('markY_second',0);
  zombie_type2.data.set('shootCounter',0);
  zombie_type2.data.set('direction_counter',0)
  zombie_type2.data.set('enemyType',2);
  zombie_type2.data.set('facing',1);
  zombie_type2.data.set('locationX',0);
  zombie_type2.data.set('locationY',0);
  zombie_type2.data.set('distracted_protect',0);  
    
  if(level == 0){zombie_type2.data.set('Speed1',400);
  zombie_type2.data.set('Speed2',500);
  }else if (level == 1){zombie_type2.data.set('Speed1',380);
  zombie_type2.data.set('Speed2',480);
  }else if (level == 2){zombie_type2.data.set('Speed1',360);
  zombie_type2.data.set('Speed2',460);
  }else if (level == 3){zombie_type2.data.set('Speed1',340);
  zombie_type2.data.set('Speed2',440);
  }else if (level == 4){zombie_type2.data.set('Speed1',320);
  zombie_type2.data.set('Speed2',420);
  }else if (level == 5){zombie_type2.data.set('Speed1',300);
  zombie_type2.data.set('Speed2',400);
  }else if (level == 6){zombie_type2.data.set('Speed1',280);
  zombie_type2.data.set('Speed2',380);
  }else if (level == 7){zombie_type2.data.set('Speed1',260);
  zombie_type2.data.set('Speed2',360);
  }else if (level == 8){zombie_type2.data.set('Speed1',240);
  zombie_type2.data.set('Speed2',340);
  }else if (level == 9){zombie_type2.data.set('Speed1',220);
  zombie_type2.data.set('Speed2',320);
  }else if (level == 10){zombie_type2.data.set('Speed1',200);
  zombie_type2.data.set('Speed2',300);
  }else if (level == 11){zombie_type2.data.set('Speed1',180);
  zombie_type2.data.set('Speed2',280);
  }else if (level == 12){zombie_type2.data.set('Speed1',165);
  zombie_type2.data.set('Speed2',265);
  }else if (level == 13){zombie_type2.data.set('Speed1',150);
  zombie_type2.data.set('Speed2',250);
  }

  enemyArray_type2.push(zombie_type2);
  allEnemyArray_2.push(zombie_type2);
  
}
//===========================================================create enmey type 3===========================================================
createEnemy_type3(x, y) {
  
	var zombie_type3 = this.enemys_type3.create(x,y, atlasString,"zombie-misa-front");
    zombie_type3.setDepth(1);
	zombie_type3.setSize(30, 40);
	zombie_type3.setOffset(0, 24)
    zombie_type3.setOrigin(0, 0.5);
    zombie_type3.setCollideWorldBounds(true);
    
  zombie_type3.setDataEnabled();
  zombie_type3.data.set('markX_first',0);
  zombie_type3.data.set('markY_first',0);
  zombie_type3.data.set('markX_second',0);
  zombie_type3.data.set('markY_second',0);
  zombie_type3.data.set('shootCounter',0);
  zombie_type3.data.set('direction_counter',0)
  zombie_type3.data.set('enemyType',3);
  zombie_type3.data.set('facing',1);
  zombie_type3.data.set('locationX',0);
  zombie_type3.data.set('locationY',0);
  zombie_type3.data.set('distracted_protect',0);  
    
  if(level == 0){zombie_type3.data.set('Speed1',400);
  zombie_type3.data.set('Speed2',500);
  }else if (level == 1){zombie_type3.data.set('Speed1',380);
  zombie_type3.data.set('Speed2',480);
  }else if (level == 2){zombie_type3.data.set('Speed1',360);
  zombie_type3.data.set('Speed2',460);
  }else if (level == 3){zombie_type3.data.set('Speed1',340);
  zombie_type3.data.set('Speed2',440);
  }else if (level == 4){zombie_type3.data.set('Speed1',320);
  zombie_type3.data.set('Speed2',420);
  }else if (level == 5){zombie_type3.data.set('Speed1',300);
  zombie_type3.data.set('Speed2',400);
  }else if (level == 6){zombie_type3.data.set('Speed1',280);
  zombie_type3.data.set('Speed2',380);
  }else if (level == 7){zombie_type3.data.set('Speed1',260);
  zombie_type3.data.set('Speed2',360);
  }else if (level == 8){zombie_type3.data.set('Speed1',240);
  zombie_type3.data.set('Speed2',340);
  }else if (level == 9){zombie_type3.data.set('Speed1',220);
  zombie_type3.data.set('Speed2',320);
  }else if (level == 10){zombie_type3.data.set('Speed1',200);
  zombie_type3.data.set('Speed2',300);
  }else if (level == 11){zombie_type3.data.set('Speed1',180);
  zombie_type3.data.set('Speed2',280);
  }else if (level == 12){zombie_type3.data.set('Speed1',165);
  zombie_type3.data.set('Speed2',265);
  }else if (level == 13){zombie_type3.data.set('Speed1',150);
  zombie_type3.data.set('Speed2',250);
  }
  

  enemyArray_type3.push(zombie_type3);
  allEnemyArray_2.push(zombie_type3);
  
}
//===========================================================create indicator===========================================================
createIndicator(x, y) {	
	
	var indicator = this.indicators.create(x,y, 'indicator');
    indicator.setDepth(-1);
    indicator.setOrigin(0, 0.5);
	indicatorArray.push(indicator);
	
}       
//===========================================================enemyWandering===========================================================
getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

enemyWandering(x_child, y_child, child) {
    
    let that = this;
  var x2ran = this.getRandomInt(-1, 2);
  var y2ran = this.getRandomInt(-1, 2);
    var toX2 = Math.round(x_child / 40)+ x2ran;
    var toY2 = Math.round(y_child / 40)+ y2ran;
    var fromX2 = Math.round(x_child / 40);
    var fromY2 = Math.round(y_child / 40);
    this.finder.findPath(fromX2, fromY2, toX2, toY2, function (path) {
        if (path === null) {
            //console.warn("enemy Wandering Path was not found.");
        } else {
            //console.log(path);
            var tweens = [];
            for (var i = 0; i < path.length - 1; i++) {
                var ex = path[i + 1].x;
                var ey = path[i + 1].y;
                tweens.push({
                    targets: child,
                    x: {
                        value: ex * that.map2.tileWidth,
                        duration: 800
                    },
                    y: {
                        value: ey * that.map2.tileHeight,
                        duration: 800
                    }
                });
            }

            child.scene.tweens.timeline({
                tweens: tweens
            });

        }
    });
    that.finder.calculate(); // don't forget, otherwise nothing happens
};

//===========================================================createBullet==========================================================
createBullet(x, y, direction) {
	
	if(direction == 1){//facing upward
	  var bullet = this.bullets.create(x+13,y, 'bullet_up');
  }else if (direction == 2){//facing right
	  var bullet = this.bullets.create(x,y+10, 'bullet_right');
  }else if (direction == 3){//facing downward
	  var bullet = this.bullets.create(x+13,y, 'bullet_down');
  }else if (direction == 4){//facing left
	  var bullet = this.bullets.create(x,y+10, 'bullet_left');
  }
      
    bullet.setDepth(13);
    bullet.setOrigin(0, 0.5);
    //bullet.setCollideWorldBounds(true);
    //Game.enemys = zombie;
  
  bullet.setDataEnabled();
  
  if(direction == 1){//facing upward
	  bullet.data.set('flyDistance',y-120);//x or y
	  bullet.data.set('directionTo',1);
	  bullet.body.setVelocityY(-400);
  }else if (direction == 2){//facing right
	  bullet.data.set('flyDistance',x+120);//x or y
	  bullet.data.set('directionTo',2);
	  bullet.body.setVelocityX(+400);
  }else if (direction == 3){//facing downward
	  bullet.data.set('flyDistance',y+120);//x or y
	  bullet.data.set('directionTo',3);
	  bullet.body.setVelocityY(+400);
  }else if (direction == 4){//facing left
	  bullet.data.set('flyDistance',x-120);//x or y
	  bullet.data.set('directionTo',4);
	  bullet.body.setVelocityX(-400);
  }
  
  this.container.add(bullet);
  
}
//===========================================================createBullet type larger==========================================================
createBullet_larger(x, y, direction) {
	
	if(direction == 1){//facing upward
	  var bullet_larger = this.bullets_larger.create(x-3,y, 'bullet_larger_up');
  }else if (direction == 2){//facing right
	  var bullet_larger = this.bullets_larger.create(x,y+10, 'bullet_larger_right');
  }else if (direction == 3){//facing downward
	  var bullet_larger = this.bullets_larger.create(x-3,y, 'bullet_larger_down');
  }else if (direction == 4){//facing left
	  var bullet_larger = this.bullets_larger.create(x,y+10, 'bullet_larger_left');
  }
      
    bullet_larger.setDepth(13);
    bullet_larger.setOrigin(0, 0.5);
    //bullet_larger.setCollideWorldBounds(true);
    //Game.enemys = zombie;
  
  bullet_larger.setDataEnabled();
  
  if(direction == 1){//facing upward
	  bullet_larger.data.set('flyDistance',y-120);//x or y
	  bullet_larger.data.set('directionTo',1);
	  bullet_larger.body.setVelocityY(-200);
  }else if (direction == 2){//facing right
	  bullet_larger.data.set('flyDistance',x+60);//x or y
	  bullet_larger.data.set('directionTo',2);
	  bullet_larger.body.setVelocityX(+200);
  }else if (direction == 3){//facing downward
	  bullet_larger.data.set('flyDistance',y+60);//x or y
	  bullet_larger.data.set('directionTo',3);
	  bullet_larger.body.setVelocityY(+200);
  }else if (direction == 4){//facing left
	  bullet_larger.data.set('flyDistance',x-60);//x or y
	  bullet_larger.data.set('directionTo',4);
	  bullet_larger.body.setVelocityX(-200);
  }
  
  this.container.add(bullet_larger);
  
}
//===========================================================create shit mine==========================================================
shit_mine_create(child) {
	
	
	  var shit_mine = this.shit_mines.create(child.x,child.y+10, 'shit_mine');
      
    shit_mine.setDepth(13);
    shit_mine.setOrigin(0, 0.5);
    //bullet_larger.setCollideWorldBounds(true);
    //Game.enemys = zombie;
 
  this.container.add(shit_mine);
  
}
//===========================================================generate shit mine according to time==========================================================
shit_mine_generate(){
	let that = this;
	this.enemys_type3.children.iterate(function (child) {
		
		that.shit_mine_create.call(that, child);
	});
}
//===========================================================Destroy Bullet==========================================================
bullet_destroy(){
	
	this.bullets.children.iterate(function (child) {		
		if(child.data.get('directionTo') == 1){//fly upward			
			if(child.y <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 2){//fly right		
			if(child.x >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 3){//fly downward			
			if(child.y >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}				
		}else if (child.data.get('directionTo') == 4){//fly left								
				if(child.x <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
				}					
		}    
        });	
}
//===========================================================Destroy Bullet larger==========================================================
bullet_larger_destroy(){
	
	this.bullets_larger.children.iterate(function (child) {		
		if(child.data.get('directionTo') == 1){//fly upward			
			if(child.y <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 2){//fly right		
			if(child.x >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 3){//fly downward			
			if(child.y >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}				
		}else if (child.data.get('directionTo') == 4){//fly left								
				if(child.x <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
				}					
		}    
        });	
}
//===========================================================Destroy Bullet if collide with player===================================
bullet_destroy_collide(player, bullet){
	health -= 1;
	this.playerHealth_decrease.call();
	bullet.disableBody(true,true);
}
//===========================================================Destroy Bullet larger if collide with player===================================
bullet_larger_destroy_collide(player, bullet_larger){
	health -= 1;
	this.playerHealth_decrease.call();
	bullet_larger.disableBody(true,true);
}

//===========================================================Destroy Bullet larger if collide with player===================================
shit_mine_destroy_collide(player, shit_mine){
	health -= 1;
	this.playerHealth_decrease.call();
	shit_mine.disableBody(true,true);
}
//===========================================================enemy collide with player==========================================================
enemy_collision(player,enemy) {   
    var exit = 0;
    var i = 0;
    for(var i; allEnemyArray_2.length > i; i++){
        if(allEnemyArray_2[i].data.get('distracted_protect')==0){
            if(exit == 0){
                if(allEnemyArray_2[i] == enemy){
                    allEnemyArray_2.splice(i,1);
                    health -= 1;
                    this.playerHealth_decrease.call();
                    exit = 1;
                }               
            }
        }       
    }   
    exit = 0;   
}
//===========================================================player health==========================================================
playerHealth_decrease(){		
	if(health == 3){
		heart1.setDepth(12);
		heart2.setDepth(-1);
		heart3.setDepth(-1);
		heart4.setDepth(-1);
	}else if (health == 2){
		heart1.setDepth(-1);
		heart2.setDepth(12);
		heart3.setDepth(-1);
		heart4.setDepth(-1);
	}else if (health == 1){
		heart1.setDepth(-1);
		heart2.setDepth(-1);
		heart3.setDepth(12);
		heart4.setDepth(-1);
	}else if (health == 0){
		heart1.setDepth(-1);
		heart2.setDepth(-1);
		heart3.setDepth(-1);
		heart4.setDepth(12);
        gameOver = 1;
	}
}
//===========================================================shield level==========================================================
shield_update(){

		
	if(shield_level == 9){
		shield1.setDepth(-1);
		shield2.setDepth(-1);
		shield3.setDepth(13);
	}else if (shield_level == 6){
		shield1.setDepth(-1);
		shield2.setDepth(13);
		shield3.setDepth(-1);
	}else if (shield_level == 3){
		shield1.setDepth(13);
		shield2.setDepth(-1);
		shield3.setDepth(-1);
	}else if (shield_level == 0){
		shield1.setDepth(-1);
		shield2.setDepth(-1);
		shield3.setDepth(-1);
	}
}
//===========================================================shield level==========================================================
shield_collide(shield, obj){		
	
	if(shield_level == 9){
		shield_level=6;
		obj.disableBody(true,true);
	}else if (shield_level == 6){
		shield_level=3;
		obj.disableBody(true,true);
	}else if (shield_level == 3){
		shield_level=0;
		obj.disableBody(true,true);
	}else {
		shield_level=0;
	}

	let that = this;	
	that.shield_update.call(that);
}
//===========================================================shield level collide enemy=======================================================
shield_collide_enemy(shield, obj){		
	
	if(shield_level == 9){
		shield_level=6;
		
	}else if (shield_level == 6){
		shield_level=3;
		
	}else if (shield_level == 3){
		shield_level=0;
		
	}else {
		shield_level=0;
	}

	let that = this;	
	that.shield_update.call(that);
}

//===========================================================create Spray==========================================================
createSpray(x, y, direction) {
	
	if(direction == 1){//facing upward
	  var spray = this.sprays.create(x-3,y, 'spray_up');
  }else if (direction == 2){//facing right
	  var spray = this.sprays.create(x,y+10, 'spray_right');
  }else if (direction == 3){//facing downward
	  var spray = this.sprays.create(x-3,y, 'spray_down');
  }else if (direction == 4){//facing left
	  var spray = this.sprays.create(x,y+10, 'spray_left');
  }
      
    spray.setDepth(13);
    spray.setOrigin(0, 0.5);
    //bullet.setCollideWorldBounds(true);
    //Game.enemys = zombie;
  
  spray.setDataEnabled();
  spray.data.set('timer',480);
  
  if(direction == 1){//facing upward
	  spray.data.set('flyDistance',y-300);//x or y
	  spray.data.set('directionTo',1);
	  spray.body.setVelocityY(-600);
  }else if (direction == 2){//facing right
	  spray.data.set('flyDistance',x+300);//x or y
	  spray.data.set('directionTo',2);
	  spray.body.setVelocityX(+600);
  }else if (direction == 3){//facing downward
	  spray.data.set('flyDistance',y+300);//x or y
	  spray.data.set('directionTo',3);
	  spray.body.setVelocityY(+600);
  }else if (direction == 4){//facing left
	  spray.data.set('flyDistance',x-300);//x or y
	  spray.data.set('directionTo',4);
	  spray.body.setVelocityX(-600);
  }
  sprayArray.push(spray);
  this.container.add(spray);
  
}

//===========================================================Destroy Spray==========================================================
spray_destroy(){
	
	this.sprays.children.iterate(function (child) {		
		if(child.data.get('directionTo') == 1){//fly upward			
			if(child.y <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 2){//fly right		
			if(child.x >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}			
		}else if (child.data.get('directionTo') == 3){//fly downward			
			if(child.y >= child.data.get('flyDistance')){
				child.disableBody(true,true);				
			}				
		}else if (child.data.get('directionTo') == 4){//fly left								
				if(child.x <= child.data.get('flyDistance')){
				child.disableBody(true,true);				
				}					
		}    
        });	
}
//===========================================================Spray effect==========================================================
spray_effect(spray, enemy){
	
	enemy.data.set('Speed1',400);
	enemy.data.set('Speed2',500);
	slowEnemyArray.push(enemy);

}

spray_timering(){
	
	if(sprayCounter == 1){
				
			//var temp = parseInt(sprayArray[0].data.get('timer'));
			//sprayArray[0].data.set('timer',temp-1);
			spray_counter_timer--;
			sprayAppearCounter++;
			
			if (sprayAppearCounter<10){
				spray_little.setDepth(13);
			}else if (sprayAppearCounter>=10){
				spray_little.setDepth(-1);
			}
						
			
			if(spray_counter_timer<=0){
				
				var speed1;
				var speed2;
				
					if(level == 0){speed1 = 400;
				  speed2 = 500;
				  }else if (level == 1){speed1 = 380;
				  speed2 = 480;
				  }else if (level == 2){speed1 = 360;
				  speed2 = 460;
				  }else if (level == 3){speed1 = 340;
				  speed2 = 440;
				  }else if (level == 4){speed1 = 320;
				  speed2 = 420;
				  }else if (level == 5){speed1 = 300;
				  speed2 = 400;
				  }else if (level == 6){speed1 = 280;
				  speed2 = 380;
				  }else if (level == 7){speed1 = 260;
				  speed2 = 360;
				  }else if (level == 8){speed1 = 240;
				  speed2 = 340;
				  }else if (level == 9){speed1 = 220;
				  speed2 = 320;
				  }else if (level == 10){speed1 = 200;
				  speed2 = 300;
				  }else if (level == 11){speed1 = 180;
				  speed2 = 280;
				  }else if (level == 12){speed1 = 165;
				  speed2 = 265;
				  }else if (level == 13){speed1 = 150;
				  speed2 = 250;
				  }
				
				
				  for(var i = 0; slowEnemyArray.length > i; i++){
					  slowEnemyArray[i].data.set('Speed1',speed1);
					  slowEnemyArray[i].data.set('Speed2',speed2);
					  
				  }
				  sprayCounter = 0;
				  spray_counter_timer = 80;
				  sprayArray.length = 0;
				  sprayAppearCounter = 0
			}
			
	}
}
//===========================================================UI function===========================================================
//===========================================================UI function===========================================================addnew
onEvent() {
  this.initialTime -= 1; // One second

  this.timeText.setText('Time Limit: ' + this.formatTime(this.initialTime));
  if (this.initialTime < 135) {
    this.timeimage.setTexture('Timer2');
    if (this.initialTime < 90) {
      this.timeimage.setTexture('Timer3');
      if(this.initialTime < 45){
        this.timeimage.setTexture('Timer4');
        if(this.initialTime < 0){
          this.timeimage.setTexture('Timer5');
        }
      }
    }
  }
}

onCoverTimeEvent(){
  coveredTime -= 1;
  if (coveredTime<0){
	  mode = 0;
  }
  this.coverTimerText.setText('Covered countdown:' + this.formatTime(coveredTime));
}



// item that cannot drag alcohol spray rice cupnoodle googles
startDrag(pointer, targets) {
//console.log("The counter in start start drag is : " + protectCounter);
if(targets[0].name == "protect" && protectCounter == 0 || targets[0].name == "toiletpaper" && toiletpaperCounter == 0){
  if (targets[0].name == "protect" || targets[0].name == "toiletpaper" || targets[0].name == "webCam" || targets[0].name == "microphone" || targets[0].name == "SanitaryPad") {
    this.tempX = targets[0].x;
    this.tempY = targets[0].y;
    this.input.off('pointerdown', this.pointerEvent, this);
    this.dragObj = targets[0];
    this.input.on('pointermove', this.doDrag, this);
    this.input.on('pointerup', this.stopDrag, this);
    }
  }
}


doDrag(pointer) {
  this.dragObj.x = pointer.x;
  this.dragObj.y = pointer.y;
}
  
stopDrag(pointer, targets) {
this.input.on('pointerdown', this.pointerEvent, this);
//console.log('i am stopDrag');
this.input.off('pointermove', this.doDrag, this);
this.input.off('pointerup', this.stopDrag, this);
var item = this.add.sprite(pointer.worldX, pointer.worldY, targets[0].name).setScale(0.1).setInteractive().setDepth(12); // Set the position
item.setName(targets[0].name);
this.container.add(item);

targets[0].x = this.tempX;
targets[0].y = this.tempY;
this.physics.world.enable(item);
this.physics.add.collider(item, this.buildingCover, this.buildingTouch, null, this);

let that = this;

if(targets[0].name == "protect"){
	item.setDataEnabled();
	item.data.set('timer',0);
	protectArray.push(item);
  protectCounter = 1;
  //console.log("The counter in stop drag is : " + protectCounter);
  if(item.body != null){
	  this.enemys.children.iterate(function (child) {
	  
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 6){
		  child.data.set('distracted_protect',1);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  this.enemys_type2.children.iterate(function (child) {
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 6){
		  child.data.set('distracted_protect',1);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  this.enemys_type3.children.iterate(function (child) {
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 6){
		  child.data.set('distracted_protect',1);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  }
  
  
}
if(targets[0].name == "toiletpaper"){
  item.setDataEnabled();
	item.data.set('timer',0);
  toiletPaperArray.push(item);
  toiletpaperCounter = 1;
  
  if(item.body != null){
	  this.enemys.children.iterate(function (child) {
	  
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 3){
		  child.data.set('distracted_protect',2);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  this.enemys_type2.children.iterate(function (child) {
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 3){
		  child.data.set('distracted_protect',2);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  this.enemys_type3.children.iterate(function (child) {
	  var distance = Math.sqrt(Math.pow((pointer.worldX - child.x ),2) + Math.pow((pointer.worldY - child.y),2))/40;
	  if(distance < 3){
		  child.data.set('distracted_protect',2);
		  that.enemyPath.call(that,child.x, child.y, child,item);
	  }
	  
  });
  }
  
}
  this.useProps(targets[0].name);
} 
//===========================================================pointer function=========================================================== addnew
buildingTouch( obj1, obj2 ){
	if(obj1.name == "protect"){
		protectArray.length = 0;
	}
	if(obj1.name == "toiletpaper"){
		toiletPaperArray.length = 0;
	}
   obj1.destroy();
   this.collectProp(player, obj1);
  }
//===========================================================pointer function=========================================================== addnew
pointerEvent(pointer,targets)
{
if (pointer.middleButtonDown())
  {
      this.startDrag(pointer,targets);
  }
     else if(pointer.leftButtonDown())
  {
    if(targets[0].name == "page1"){
      page = 1;
      //console.log('page1');
      this.updatePropBox();
    }  
    else if(targets[0].name == "page2"){
      page = 2;
      //console.log('page2');
      this.updatePropBox();
    }
    else if(targets[0].name == "page3"){
      page = 3;
      //console.log('page3');
      this.updatePropBox();
    }    
    //console.log('right now');
      this.goekMokProps(pointer, targets);
  }
}

//===========================================================goekMokProps function===========================================================
goekMokProps(pointer, targets){
if(targets[0].name == "goggles" && gogglesCounter == 0 || targets[0].name == "protect" && protectUseCounter == 0|| targets[0].name == "alcohol" && alcoholCounter == 0|| targets[0].name == "Rice" && riceCounter == 0|| targets[0].name == "cupnoodle" && noodlesCounter == 0|| targets[0].name == "spray"&& sprayCounter == 0){
//console.log('I use props la');

//gogglesCounter = 1;
//protectUseCounter = 1;
//alcoholCounter = 1;
let that = this;

	if(targets[0].name == "goggles"){
		
		if(shield_level<9){
			shield_level+=3;
			that.shield_update.call(that);
			gogglesCounter = 1;
		}
		
	}
	if(targets[0].name == "protect"){
		if(shield_level<9){
			shield_level+=3;
			that.shield_update.call(that);
			protectUseCounter = 1;
		}
	}
	if(targets[0].name == "alcohol"){
		if(shield_level<9){
			shield_level+=3;
			that.shield_update.call(that);
			alcoholCounter = 1;
		}
	}
	if(targets[0].name == "Rice"){				
		coveredTime+=10;
		this.coverTimerText.setText('Covered countdown:' + this.formatTime(coveredTime));
		riceCounter = 1;
	}
	if(targets[0].name == "cupnoodle"){				
		coveredTime+=5;
		this.coverTimerText.setText('Covered countdown:' + this.formatTime(coveredTime));
		noodlesCounter = 1;
	}
	if(targets[0].name == "spray"){
		
		var temp_direction;

			if (this.cursors.left.isDown) temp_direction = 4
			else if (this.cursors.right.isDown) temp_direction = 2;
			else if (this.cursors.up.isDown) temp_direction = 1;
			else if (this.cursors.down.isDown) temp_direction = 3;
			else if (this.direction == "left") temp_direction = 4;
			else if (this.direction == "right") temp_direction = 2;
			else if (this.direction == "back") temp_direction = 1;
			else if (this.direction == "front") temp_direction = 3;
			that.createSpray.call(that,this.player.x, this.player.y,temp_direction);
			sprayCounter = 1;
	}
	
	

	this.useProps(targets[0].name); // delect the props on the props tool bar
}
}

//===========================================================collection function===========================================================
collectProp (player, props)
{
  var prop_id = this.prop_list[0].findIndex(function(name){
    return name == props.name;
  })
  if(props.name == "protect"){
    protectCounter = 0;
    //console.log("The counter in building touch is : " + protectCounter);
  }
  if(props.name == "toiletpaper"){
    toiletpaperCounter = 0;
  }
  if (prop_id == -1){
    this.prop_list[0].push(props.name);
    this.prop_list[1].push(1);
    //console.log("[create new [prop ]I am console ahhh " + propsName[level]);
  }
  else{
    this.prop_list[1][prop_id] += 1;
    //console.log('there are ' + this.prop_list[1][prop_id] + ' ' + this.prop_list[0][prop_id])
  }
  props.destroy();
  
  this.updatePropBox();
}
//========================================================================================================================================
useProps(name)
{ 
  var prop_id = this.prop_list[0].findIndex(function(indexName){
    return indexName == name;
  })
  if(prop_id==-1){
    //console.log('error');
  }
  else{
    //console.log('before' + this.prop_list[1][prop_id]);
    this.prop_list[1][prop_id] -= 1;
    //console.log('After' + this.prop_list[1][prop_id]);
    if(this.prop_list[1][prop_id] <=0){
      this.prop_list[0].splice(prop_id,1);
      this.prop_list[1].splice(prop_id,1);
      
    }
  }
  this.updatePropBox();
}
//===========================================================PropsBox function===========================================================
updatePropBox()
{ 

  for (var i = 0; i < this.propsText.length; i++){
    this.propsText[i].setText("");
  }
  for (var i = 0; i < this.prop_icon.length; i++){
    this.prop_icon[i].destroy();
  }
  this.prop_icon = new Array();
  var loop;
  if(page*4 > this.prop_list[0].length){
    loop = this.prop_list[0].length;
  }
  else{
    loop = 4*page;
  }
  for (var i = (page - 1)*4; i < loop; i++){
    var icon = this.add.sprite(450, 47*(i%4 +1), this.prop_list[0][i]).setScale(0.1).setInteractive().setScrollFactor(0).setDepth(12); //set bar position
    icon.setName(this.prop_list[0][i])
    this.propsText[i%4].setText(this.prop_list[1][i]);
    this.prop_icon.push(icon);
  }    
}

//===========================================================Rex UI function===========================================================

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
        .on('pointerdown', function () {
            var icon = this.getElement('action').setVisible(false);
            this.resetChildVisibleState(icon);
            if (this.isTyping) {
                this.stop(true);
            } else if (this.isLastPage) {
                //Ed
                if(gameOver == 5){
                  scene.jumpScene = true;
                }
                if(gameOver == 3){
                  scene.music.stop();
                  level = level + 1;
                  playerSurvivalDay = playerSurvivalDay + 1;
                  scene.scene.start("Menu");
                  scene.scene.stop("Game2");
                }
                //console.log(gameOver);
                if(gameOver == 2){
                  playerSurvivalDay = playerSurvivalDay+14;
                  scene.jumpScene = true;
                }
                scene.dialogIsOn = false;
                scene.dialogBox.destroy();
                return true;
            }else {
                this.typeNextPage();
            }
        }, textBox)
        /*.on('pageend', function () {
            if (this.isLastPage) {
                scene.dialogIsOn = false;
                //scene.dialogBox.destroy();
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
        }, textBox)*/
    //.on('type', function () {
    //})
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
        maxLines: 2
    }).setResolution(textResolution)
}    
     
//===========================================================Rex UI Dialog Option===========================================================    

createOptionDialog(scene, message){
     
            scene.dialogChoices = scene.rexUI.add.dialog({
            x: 240,
            y: 135,    
            background: scene.rexUI.add.roundRectangle(0, 0, 50 , 50, 20, 0x1565c0).setAlpha(0.8),

            title: scene.rexUI.add.label({
                background: this.rexUI.add.roundRectangle(0, 0, 50, 20, 10, 0x003c8f).setAlpha(0.8),
                text: this.add.text(0, 0, 'Warning', {
                    fontSize: '12px'
                }).setResolution(textResolution),
                space: {
                    left: 7.5,
                    right: 7.5,
                    top: 5,
                    bottom: 5
                }
            }),

            content: scene.add.text(0, 0, message, {
                fontSize: '12px'
            }).setResolution(textResolution),

            actions: [
                scene.createLabel(this, 'Yes'),
                scene.createLabel(this, 'No')
            ],

            space: {
                title: 12.5,
                content: 12.5,
                action: 7.5,
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },

            align: {
                actions: 'right', // 'center'|'left'|'right'
            },

            expand: {
                content: false, // Content is a pure text object
            }
        })
            .layout()
            .setScrollFactor(0)
            .setDepth(30)
            //.setScale(0.5)
            // .drawBounds(this.add.graphics(), 0xff0000)
            .popUp(500);

        scene.dialogChoices
            .on('button.click', function (button, groupName, index) {
                if(index == 0){
                    //Ed
                    this.music.stop();
                    scene.scene.start("Menu");
                    scene.dialogIsOn = false;
                }else if (index == 1){
                    scene.dialogIsOn = false;
                    scene.dialogChoices.destroy();
                }},scene)
            .on('button.over', function (button, groupName, index) {
                button.getElement('background').setStrokeStyle(1, 0xffffff);
            })
            .on('button.out', function (button, groupName, index) {
                button.getElement('background').setStrokeStyle();
            });
}    
    
createLabel(scene, text) {
    return scene.rexUI.add.label({
        // width: 40,
        // height: 40,

        background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x5e92f3).setAlpha(0.8),

        text: scene.add.text(0, 0, text, {
            fontSize: '12px'
        }).setResolution(textResolution),

        space: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
        }
    });
}    
 
//===========================================================Task creator===========================================================
    
    
taskCreator(scene,destination_1,destination_2,message_1,message_2,message_3){
    
    cursors = this.input.keyboard.addKeys({
            enter: Phaser.Input.Keyboard.KeyCodes.Z
        });
    
    if(Phaser.Input.Keyboard.JustDown(cursors.enter)&& scene.dialogIsOn == false){ 
        
    var i;
      for (i = 0; i < scene.mapLocationList.length; i++) {
          
          if(scene.mapLocationList[i]==destination_1 && destination1IsOpen == false){
              //console.log("IN part 1");
            if (scene.mapLocationList[i].contains(scene.player.x, scene.player.y)){
              scene.dialogIsOn = true;
              scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                  wrapWidth: 300,
              })
              .start(message_1, 50)
              .setScrollFactor(0)
              .setDepth(30)
              .setAlpha(0.8);
              //Ed    
              if(requirement < 2){
                    requirement = requirement + 1;
              }   
              destination1IsOpen = true;   
            }
          }else if((scene.mapLocationList[i] != '')&& (scene.mapLocationList[i]==destination_2)&&(destination2IsOpen == false)) {
              //console.log("IN part 2");
                  if (scene.mapLocationList[i].contains(scene.player.x, scene.player.y)){
                    scene.dialogIsOn = true;
                    scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                        wrapWidth: 300,
                    })
                    .start(message_2, 50)
                    .setScrollFactor(0)
                    .setDepth(30)
                    .setAlpha(0.8);
                    //Ed
                    if(requirement < 2){
                        requirement = requirement + 1;
                    }
                    destination2IsOpen = true;
                  }
          }else if(scene.mapLocationList[i] == scene.homeBlock){
              //console.log("IN part 3");
            if (scene.mapLocationList[i].contains(scene.player.x, scene.player.y)){
              if (missionIsComplete){
                   gameOver = 3;
                  //Ed
                  screenFader.setDepth(14);
                  var scale2 = {               
                      alpha: 0
                  };
                  scene.tweens.add({
                      targets: scale2,
                      alpha: 1,
                      duration: 1500,
                      repeat: 0,
                      paused: false,
				      add: true,
                      onUpdate: function () {                    
                          screenFader.setAlpha(scale2.alpha);
                      }
                  });    
                  
                   scene.dialogIsOn = true;
                    scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                        wrapWidth: 300,
                    })
                    .start("You have Finished the Task. Welcome home!", 50)
                    .setScrollFactor(0)
                    .setDepth(30)
                    .setAlpha(0.8);
              }else{
                if (scene.dialogIsOn == false){
                    scene.dialogIsOn = true; 
                    scene.createOptionDialog(scene, 'You have not finished the mission! \nAre you sure back home?');
                }
              }
            } 
          }else if(scene.mapLocationList[i] == scene.stationBlock){
                if (scene.mapLocationList[i].contains(scene.player.x, scene.player.y)){
                    if (level < 6){    
                        scene.dialogIsOn = true;
                        scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                            wrapWidth: 300,
                        })
                            .start("This train is heading to hometown. You have to stay in town for your family. So You do not need to take a train.", 50)
                            .setScrollFactor(0)
                            .setDepth(30)
                    }else if (level >= 6){
                        //console.log('in part 5' + level);
                        gameOver = 5;
                        scene.dialogIsOn = true;
                        scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                            wrapWidth: 300,
                        })
                            .start("You are Going to Home Town! Be safe!!!", 50)
                            .setScrollFactor(0)
                            .setDepth(30)
                        
                        screenFader.setDepth(14);
                        var scale2 = {               
                            alpha: 0
                        };
                        scene.tweens.add({
                            targets: scale2,
                            alpha: 1,
                            duration: 1500,
                            repeat: 0,
                            paused: false,
				            add: true,
                            onUpdate: function () {                    
                                screenFader.setAlpha(scale2.alpha);
                            }
                        });
                        
                        scene.physics.pause();
                        if(requirement == 2){
                            changeMessage = true;
                        }
                        
                    } 
            }  
          }else if((scene.mapLocationList[i] != '') && (scene.mapLocationList[i] != scene.homeBlock) && (scene.mapLocationList[i] != destination_1) && (scene.mapLocationList[i] != destination_2)){
              //console.log("IN part 4");
            if (scene.mapLocationList[i].contains(scene.player.x, scene.player.y)){
              scene.dialogIsOn = true;
              scene.dialogBox = scene.createTextBox(scene, 35, 150, {
                  wrapWidth: 300,
              })
              .start(message_3, 50)
              .setScrollFactor(0)
              .setDepth(30)
            }
          }
      }
        if(requirement == 2){
          changeMessage = true;
      }  
    }

}    

//===========================================================function End===========================================================
}