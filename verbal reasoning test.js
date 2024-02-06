/****************************** 
 * Verbal Reasoning Test *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'verbal reasoning test';  // from the Builder filename that created this script
let expInfo = {
    'participant': 'Text mit Ihrem ID-Code ersetzen!',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(Item1RoutineBegin());
flowScheduler.add(Item1RoutineEachFrame());
flowScheduler.add(Item1RoutineEnd());
flowScheduler.add(Item2RoutineBegin());
flowScheduler.add(Item2RoutineEachFrame());
flowScheduler.add(Item2RoutineEnd());
flowScheduler.add(Item3RoutineBegin());
flowScheduler.add(Item3RoutineEachFrame());
flowScheduler.add(Item3RoutineEnd());
flowScheduler.add(Item4RoutineBegin());
flowScheduler.add(Item4RoutineEachFrame());
flowScheduler.add(Item4RoutineEnd());
flowScheduler.add(Item5RoutineBegin());
flowScheduler.add(Item5RoutineEachFrame());
flowScheduler.add(Item5RoutineEnd());
flowScheduler.add(Item6RoutineBegin());
flowScheduler.add(Item6RoutineEachFrame());
flowScheduler.add(Item6RoutineEnd());
flowScheduler.add(Item7RoutineBegin());
flowScheduler.add(Item7RoutineEachFrame());
flowScheduler.add(Item7RoutineEnd());
flowScheduler.add(Item8RoutineBegin());
flowScheduler.add(Item8RoutineEachFrame());
flowScheduler.add(Item8RoutineEnd());
flowScheduler.add(Item9RoutineBegin());
flowScheduler.add(Item9RoutineEachFrame());
flowScheduler.add(Item9RoutineEnd());
flowScheduler.add(Item10RoutineBegin());
flowScheduler.add(Item10RoutineEachFrame());
flowScheduler.add(Item10RoutineEnd());
flowScheduler.add(Item11RoutineBegin());
flowScheduler.add(Item11RoutineEachFrame());
flowScheduler.add(Item11RoutineEnd());
flowScheduler.add(Item12RoutineBegin());
flowScheduler.add(Item12RoutineEachFrame());
flowScheduler.add(Item12RoutineEnd());
flowScheduler.add(Pause1RoutineBegin());
flowScheduler.add(Pause1RoutineEachFrame());
flowScheduler.add(Pause1RoutineEnd());
flowScheduler.add(Item13RoutineBegin());
flowScheduler.add(Item13RoutineEachFrame());
flowScheduler.add(Item13RoutineEnd());
flowScheduler.add(Item14RoutineBegin());
flowScheduler.add(Item14RoutineEachFrame());
flowScheduler.add(Item14RoutineEnd());
flowScheduler.add(Item15RoutineBegin());
flowScheduler.add(Item15RoutineEachFrame());
flowScheduler.add(Item15RoutineEnd());
flowScheduler.add(Item16RoutineBegin());
flowScheduler.add(Item16RoutineEachFrame());
flowScheduler.add(Item16RoutineEnd());
flowScheduler.add(Item17RoutineBegin());
flowScheduler.add(Item17RoutineEachFrame());
flowScheduler.add(Item17RoutineEnd());
flowScheduler.add(Item18RoutineBegin());
flowScheduler.add(Item18RoutineEachFrame());
flowScheduler.add(Item18RoutineEnd());
flowScheduler.add(Item19RoutineBegin());
flowScheduler.add(Item19RoutineEachFrame());
flowScheduler.add(Item19RoutineEnd());
flowScheduler.add(Item20RoutineBegin());
flowScheduler.add(Item20RoutineEachFrame());
flowScheduler.add(Item20RoutineEnd());
flowScheduler.add(Item21RoutineBegin());
flowScheduler.add(Item21RoutineEachFrame());
flowScheduler.add(Item21RoutineEnd());
flowScheduler.add(Item22RoutineBegin());
flowScheduler.add(Item22RoutineEachFrame());
flowScheduler.add(Item22RoutineEnd());
flowScheduler.add(Item23RoutineBegin());
flowScheduler.add(Item23RoutineEachFrame());
flowScheduler.add(Item23RoutineEnd());
flowScheduler.add(Item24RoutineBegin());
flowScheduler.add(Item24RoutineEachFrame());
flowScheduler.add(Item24RoutineEnd());
flowScheduler.add(Pause2RoutineBegin());
flowScheduler.add(Pause2RoutineEachFrame());
flowScheduler.add(Pause2RoutineEnd());
flowScheduler.add(Item25RoutineBegin());
flowScheduler.add(Item25RoutineEachFrame());
flowScheduler.add(Item25RoutineEnd());
flowScheduler.add(Item26RoutineBegin());
flowScheduler.add(Item26RoutineEachFrame());
flowScheduler.add(Item26RoutineEnd());
flowScheduler.add(Item27RoutineBegin());
flowScheduler.add(Item27RoutineEachFrame());
flowScheduler.add(Item27RoutineEnd());
flowScheduler.add(Item28RoutineBegin());
flowScheduler.add(Item28RoutineEachFrame());
flowScheduler.add(Item28RoutineEnd());
flowScheduler.add(Item35RoutineBegin());
flowScheduler.add(Item35RoutineEachFrame());
flowScheduler.add(Item35RoutineEnd());
flowScheduler.add(Item29RoutineBegin());
flowScheduler.add(Item29RoutineEachFrame());
flowScheduler.add(Item29RoutineEnd());
flowScheduler.add(Item30RoutineBegin());
flowScheduler.add(Item30RoutineEachFrame());
flowScheduler.add(Item30RoutineEnd());
flowScheduler.add(Item31RoutineBegin());
flowScheduler.add(Item31RoutineEachFrame());
flowScheduler.add(Item31RoutineEnd());
flowScheduler.add(Item32RoutineBegin());
flowScheduler.add(Item32RoutineEachFrame());
flowScheduler.add(Item32RoutineEnd());
flowScheduler.add(Item33RoutineBegin());
flowScheduler.add(Item33RoutineEachFrame());
flowScheduler.add(Item33RoutineEnd());
flowScheduler.add(Item34RoutineBegin());
flowScheduler.add(Item34RoutineEachFrame());
flowScheduler.add(Item34RoutineEnd());
flowScheduler.add(Item36RoutineBegin());
flowScheduler.add(Item36RoutineEachFrame());
flowScheduler.add(Item36RoutineEnd());
flowScheduler.add(Pause3RoutineBegin());
flowScheduler.add(Pause3RoutineEachFrame());
flowScheduler.add(Pause3RoutineEnd());
flowScheduler.add(Item37RoutineBegin());
flowScheduler.add(Item37RoutineEachFrame());
flowScheduler.add(Item37RoutineEnd());
flowScheduler.add(Item38RoutineBegin());
flowScheduler.add(Item38RoutineEachFrame());
flowScheduler.add(Item38RoutineEnd());
flowScheduler.add(Item39RoutineBegin());
flowScheduler.add(Item39RoutineEachFrame());
flowScheduler.add(Item39RoutineEnd());
flowScheduler.add(Item40RoutineBegin());
flowScheduler.add(Item40RoutineEachFrame());
flowScheduler.add(Item40RoutineEnd());
flowScheduler.add(Item41RoutineBegin());
flowScheduler.add(Item41RoutineEachFrame());
flowScheduler.add(Item41RoutineEnd());
flowScheduler.add(Item42RoutineBegin());
flowScheduler.add(Item42RoutineEachFrame());
flowScheduler.add(Item42RoutineEnd());
flowScheduler.add(Item43RoutineBegin());
flowScheduler.add(Item43RoutineEachFrame());
flowScheduler.add(Item43RoutineEnd());
flowScheduler.add(Item44RoutineBegin());
flowScheduler.add(Item44RoutineEachFrame());
flowScheduler.add(Item44RoutineEnd());
flowScheduler.add(Item45RoutineBegin());
flowScheduler.add(Item45RoutineEachFrame());
flowScheduler.add(Item45RoutineEnd());
flowScheduler.add(Item46RoutineBegin());
flowScheduler.add(Item46RoutineEachFrame());
flowScheduler.add(Item46RoutineEnd());
flowScheduler.add(Item47RoutineBegin());
flowScheduler.add(Item47RoutineEachFrame());
flowScheduler.add(Item47RoutineEnd());
flowScheduler.add(Item48RoutineBegin());
flowScheduler.add(Item48RoutineEachFrame());
flowScheduler.add(Item48RoutineEnd());
flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Tabelle Item6.png', 'path': 'Tabelle Item6.png'},
    {'name': 'Bilder_Oasis/oasis/Images/Cat 3.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cat 3.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Bed 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Bed 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cemetery 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cemetery 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cotton swabs 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cotton swabs 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Crosswalk 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Crosswalk 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cardboard 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cardboard 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Dirt 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Dirt 4.jpg'},
    {'name': 'Bildschirmfoto 2023-12-03 um 21.07.58.png', 'path': 'Bildschirmfoto 2023-12-03 um 21.07.58.png'},
    {'name': 'Bilder_Oasis/oasis/Images/Neutral face 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Neutral face 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Paperclips 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Paperclips 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Roofing 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Roofing 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Shark 8.jpg', 'path': 'Bilder_Oasis/oasis/Images/Shark 8.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Sleepy pose 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Sleepy pose 4.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Wall 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Wall 4.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cat 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cat 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Rainbow 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Rainbow 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Dog 12.jpg', 'path': 'Bilder_Oasis/oasis/Images/Dog 12.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Lake 12.jpg', 'path': 'Bilder_Oasis/oasis/Images/Lake 12.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Fireworks 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Fireworks 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Baby 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Baby 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Dog 6.jpg', 'path': 'Bilder_Oasis/oasis/Images/Dog 6.jpg'},
    {'name': 'Tabelle Item29.png', 'path': 'Tabelle Item29.png'},
    {'name': 'Bilder_Oasis/oasis/Images/Beach 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Beach 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Lake 9.jpg', 'path': 'Bilder_Oasis/oasis/Images/Lake 9.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cat 5.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cat 5.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Penguins 2.jpg', 'path': 'Bilder_Oasis/oasis/Images/Penguins 2.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Couple 7.jpg', 'path': 'Bilder_Oasis/oasis/Images/Couple 7.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Fireworks 6.jpg', 'path': 'Bilder_Oasis/oasis/Images/Fireworks 6.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cat 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cat 4.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Explosion 5.jpg', 'path': 'Bilder_Oasis/oasis/Images/Explosion 5.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Feces 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Feces 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Garbage dump 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Garbage dump 4.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Dog 24.jpg', 'path': 'Bilder_Oasis/oasis/Images/Dog 24.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Scary face 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Scary face 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Fire 9.jpg', 'path': 'Bilder_Oasis/oasis/Images/Fire 9.jpg'},
    {'name': 'Tabelle Item 42.png', 'path': 'Tabelle Item 42.png'},
    {'name': 'Bilder_Oasis/oasis/Images/Shot 3.jpg', 'path': 'Bilder_Oasis/oasis/Images/Shot 3.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Car crash 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Car crash 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Cockroach 1.jpg', 'path': 'Bilder_Oasis/oasis/Images/Cockroach 1.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Animal carcass 5.jpg', 'path': 'Bilder_Oasis/oasis/Images/Animal carcass 5.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Destruction 4.jpg', 'path': 'Bilder_Oasis/oasis/Images/Destruction 4.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/War 6.jpg', 'path': 'Bilder_Oasis/oasis/Images/War 6.jpg'},
    {'name': 'Bilder_Oasis/oasis/Images/Dog 21.jpg', 'path': 'Bilder_Oasis/oasis/Images/Dog 21.jpg'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.ERROR);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_Welcome;
var key_Welcome;
var IntroductionClock;
var text_Introduction;
var key_Introduction;
var Item1Clock;
var timer_text;
var Question;
var Answers;
var Key;
var Item2Clock;
var timer_text_2;
var Question_2;
var Answers_2;
var Key_2;
var Item3Clock;
var timer_text_3;
var Question_3;
var Answers_3;
var Key_3;
var Item4Clock;
var timer_text_4;
var Question_4;
var Answers_4;
var Key_4;
var Item5Clock;
var timer_text_5;
var Question_5;
var Answers_5;
var Key_5;
var Item6Clock;
var timer_text_6;
var Answers_6;
var Key_6;
var Question_image_1;
var Item7Clock;
var timer_text_7;
var Question_7;
var Answers_7;
var Key_7;
var Item8Clock;
var timer_text_8;
var Question_8;
var Answers_8;
var Key_8;
var Item9Clock;
var timer_text_9;
var Question_9;
var Answers_9;
var Key_9;
var Item10Clock;
var timer_text_10;
var Question_10;
var Answers_10;
var Key_10;
var Item11Clock;
var timer_text_11;
var Question_11;
var Answers_11;
var Key_11;
var Item12Clock;
var timer_text_12;
var Question_12;
var Answers_12;
var Key_12;
var Pause1Clock;
var text_Pause_1;
var key_Pause_1;
var image_Pause_1;
var text_continueExp_1;
var Item13Clock;
var image_13;
var timer_text_13;
var Question_13;
var Answers_13;
var Key_13;
var Item14Clock;
var image_14;
var timer_text_14;
var Question_14;
var Answers_14;
var Key_14;
var Item15Clock;
var image_15;
var timer_text_15;
var Question_15;
var Answers_15;
var Key_15;
var Item16Clock;
var image_16;
var timer_text_16;
var Question_16;
var Answers_16;
var Key_16;
var Item17Clock;
var image_17;
var timer_text_17;
var Question_17;
var Answers_17;
var Key_17;
var Item18Clock;
var image_18;
var timer_text_18;
var Answers_18;
var Key_18;
var Question_image_2;
var Item19Clock;
var image_19;
var timer_text_19;
var Question_19;
var Answers_19;
var Key_19;
var Item20Clock;
var image_20;
var timer_text_20;
var Question_20;
var Answers_20;
var Key_20;
var Item21Clock;
var image_21;
var timer_text_21;
var Question_21;
var Answers_21;
var Key_21;
var Item22Clock;
var image_22;
var timer_text_22;
var Question_22;
var Answers_22;
var Key_22;
var Item23Clock;
var image_23;
var timer_text_23;
var Question_23;
var Answers_23;
var Key_23;
var Item24Clock;
var image_24;
var timer_text_24;
var Question_24;
var Answers_24;
var Key_24;
var Pause2Clock;
var text_Pause_2;
var key_Pause_2;
var image_Pause_2;
var text_continueExp_2;
var Item25Clock;
var image_25;
var timer_text_25;
var Question_25;
var Answers_25;
var Key_25;
var Item26Clock;
var image_26;
var timer_text_26;
var Question_26;
var Answers_26;
var Key_26;
var Item27Clock;
var image_27;
var timer_text_27;
var Question_27;
var Answers_27;
var Key_27;
var Item28Clock;
var image_28;
var timer_text_28;
var Question_28;
var Answers_28;
var Key_28;
var Item35Clock;
var image_35;
var timer_text_35;
var Question_35;
var Answers_35;
var Key_35;
var Item29Clock;
var image_29;
var timer_text_29;
var Answers_29;
var Key_29;
var Question_image_3;
var Item30Clock;
var image_30;
var timer_text_30;
var Question_30;
var Answers_30;
var Key_30;
var Item31Clock;
var image_31;
var timer_text_31;
var Question_31;
var Answers_31;
var Key_31;
var Item32Clock;
var image_32;
var timer_text_32;
var Question_32;
var Answers_32;
var Key_32;
var Item33Clock;
var image_33;
var timer_text_33;
var Question_33;
var Answers_33;
var Key_33;
var Item34Clock;
var image_34;
var timer_text_34;
var Question_34;
var Answers_34;
var Key_34;
var Item36Clock;
var image_36;
var timer_text_36;
var Question_36;
var Answers_36;
var Key_36;
var Pause3Clock;
var text_Pause_3;
var key_Pause_3;
var image_Pause_3;
var text_continueExp_3;
var Item37Clock;
var image_37;
var timer_text_37;
var Question_37;
var Answers_37;
var Key_37;
var Item38Clock;
var image_38;
var timer_text_38;
var Question_38;
var Answers_38;
var Key_38;
var Item39Clock;
var image_39;
var timer_text_39;
var Question_39;
var Answers_39;
var Key_39;
var Item40Clock;
var image_40;
var timer_text_40;
var Question_40;
var Answers_40;
var Key_40;
var Item41Clock;
var image_41;
var timer_text_41;
var Question_41;
var Answers_41;
var Key_41;
var Item42Clock;
var image_42;
var timer_text_42;
var Answers_42;
var Key_42;
var Question_image;
var Item43Clock;
var image_43;
var timer_text_43;
var Question_43;
var Answers_43;
var Key_43;
var Item44Clock;
var image_44;
var timer_text_44;
var Question_44;
var Answers_44;
var Key_44;
var Item45Clock;
var image_45;
var timer_text_45;
var Question_45;
var Answers_45;
var Key_45;
var Item46Clock;
var image_46;
var timer_text_46;
var Question_46;
var Answers_46;
var Key_46;
var Item47Clock;
var image_47;
var timer_text_47;
var Question_47;
var Answers_47;
var Key_47;
var Item48Clock;
var image_48;
var timer_text_48;
var Question_48;
var Answers_48;
var Key_48;
var GoodbyeClock;
var text_Goodbye;
var key_Goodbye;
var image_Goodbye;
var text_endExp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_Welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Welcome',
    text: 'Herzlich Willkommen!\n\nVielen Dank dafür, dass Sie uns bei unserem Experiment unterstützen.\n\n(Zum Fortsetzen beliebige Taste drücken)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  text_Introduction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Introduction',
    text: "Im Folgenden werden Ihnen Fragen gestellt mit jeweils 4 Antwortmöglichkeiten, wovon genau eine richtig ist. \nBenutzen Sie die Zahlentasten 1, 2, 3 und 4 um ihre Antwort zu geben. Bearbeiten Sie die Aufgaben sorgfältig und so schnell wie möglich.\nAn deutlich markierten Stellen kann eine Pause eingelegt werden. Sie können das Experiment jederzeit mit der 'esc'-Taste abbrechen. Ihre Angaben werden infolge dessen nicht gespeichert und nicht in unsere Erhebung mit aufgenommen.\n\nWir wünschen Ihnen viel Spaß!\n\n\n(Um das Experiment zu starten, beliebige Taste drücken)",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Introduction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item1"
  Item1Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question',
    text: 'Es gilt: Fußballer*in - Fußballplatz. \nWelches Wortpaar passt nicht?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers',
    text: '1) Turner*in - Turnhalle\n\n2) Schwimmer*in - Schwimmbecken\n\n3) Skiläufer*in - Skipiste\n\n4) Leichtathlet*in - Laufband',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item2"
  Item2Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_2',
    text: 'Links ist zu rechts, wie waagerecht zu...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_2',
    text: '1) gerade\n\n2) senkrecht\n\n3) diagonal\n\n4) oben',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item3"
  Item3Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_3',
    text: 'Es gilt: Eisen - Rost.\nWelches Wortpaar passt?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_3',
    text: '1) Leiche - Zerfall\n\n2) Atome - Zerstörung \n\n3) Pflaume - Fäulnis \n\n4) Birke - Abnutzung',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item4"
  Item4Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_4',
    text: 'Trinken -> Essen\ndurstig -> ...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_4',
    text: '1) Appetit \n\n2) hungernd \n\n3) hungrig \n\n4) satt',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item5"
  Item5Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_5',
    text: 'Welches Pseudowort passt nicht zu den anderen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_5',
    text: '1) Quinot \n\n2) Mortoz \n\n3) Zanbof \n\n4) Glonko',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item6"
  Item6Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Answers_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_6',
    text: '1) Kanonenkugel\n\n2) Karte\n\n3) Schutt\n\n4) Kante',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Key_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Question_image_1', units : undefined, 
    image : 'Tabelle Item6.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.0, 0.3], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "Item7"
  Item7Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_7',
    text: 'Folgende Schlussregeln sind wahr: \n1) Entweder Blizz oder Glimm\n2) Wenn Glimm nicht Snazz\n3) Wenn Snazz dann Blizz \nUnd es gilt folgende Aussage: Blizz\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.035,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_7',
    text: '1) Blizz\n \n2) Snazz\n\n3) Nicht Glimm\n\n4) a und c ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item8"
  Item8Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_8',
    text: 'Es gilt: Altar, Anhänger, Architektur, Anker\nWelches Wort passt in die Reihe?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_8',
    text: '1) Affe\n\n2) Apparat \n\n3) Ader\n\n4) Äther',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item9"
  Item9Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_9 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_9',
    text: 'Wenn alle Katzen Säugetiere sind und alle Säugetiere Tiere sind, was kannst du dann über Katzen sagen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_9 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_9',
    text: '1) Alle Katzen sind Tiere\n\n2) Alle Tiere sind Katzen\n\n3) Katzen sind keine Säugetiere \n\n4) Alle Säugetiere sind Katzen',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item10"
  Item10Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_10 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_10',
    text: 'Blubs sind Vögel. Kein Blub kann fliegen.\nWas können Sie über einen fliegenden Vogel schließen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_10 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_10',
    text: '1) Der Vogel ist kein Blub\n\n2) Der Vogel ist ein Blub\n\n3) Blubs können fliegen\n\n4) Fliegende Vögel sind selten Blubs',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item11"
  Item11Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_11 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_11',
    text: 'Manche Meerestiere können orten. \nAlle Tiere, die orten können, sind intelligent. \nKugelfische sind intelligent. \nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_11 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_11',
    text: '1) Manche Meerestiere sind intelligente Lebewesen.\n\n2) Alle intelligenten Tiere können orten\n\n3) Meerestiere sind intelligenter als Landtiere\n\n4) Kugelfische können orten. ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item12"
  Item12Clock = new util.Clock();
  var countdown_started = false;
  
  timer_text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Question_12 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_12',
    text: 'Nur Klux können fliegen.\nAlle Klux haben Flügel und leben.\nAuch andere Lebewesen haben Flügel.\nBobby hat Flügel.\nWelche Aussage ist korrekt?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  Answers_12 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_12',
    text: '1) Bobby kann fliegen\n\n2) Klux sind Lebewesen\n\n3) Bobby ist ein Klux\n\n4) Bobby kann nicht fliegen',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause1"
  Pause1Clock = new util.Clock();
  text_Pause_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Pause_1',
    text: '1/4 des Experiments geschafft, sie können hier eine Pause einlegen!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Pause_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_Pause_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_Pause_1', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cat 3.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_continueExp_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continueExp_1',
    text: '(Zum Fortsetzen beliebige Taste drücken)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item13"
  Item13Clock = new util.Clock();
  var countdown_started = false;
  
  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Bed 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_13 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_13',
    text: 'Es gilt: Tuba → Ton. \n\nWelches Wortpaar passt nicht? ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_13 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_13',
    text: '1) Ofen - Hitze \n\n2) Gefrierfach - Eiswürfel\n\n3) Lampe – Licht\n\n4) Generator - Strom',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item14"
  Item14Clock = new util.Clock();
  var countdown_started = false;
  
  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cemetery 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_14 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_14',
    text: 'Eisen zu feilen ist wie Holz zu…? ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_14 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_14',
    text: '1) hobeln\n\n2) hacken\n\n3) basteln\n\n4) tackern',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item15"
  Item15Clock = new util.Clock();
  var countdown_started = false;
  
  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cotton swabs 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_15 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_15',
    text: 'Es gilt: Nadel - Watte.\nWelches Wortpaar passt?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_15 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_15',
    text: '1) Elefant - Schraube\n\n2) Igel - Schaf\n\n3) Daunen - Decke\n\n4) Blauwal - Spritze',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item16"
  Item16Clock = new util.Clock();
  var countdown_started = false;
  
  image_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_16', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Crosswalk 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_16 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_16',
    text: 'heben -> stehen\nArme -> ...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_16 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_16',
    text: '1) Hände\n\n2) Schulter\n\n3) Nase\n\n4) Beine',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item17"
  Item17Clock = new util.Clock();
  var countdown_started = false;
  
  image_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_17', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cardboard 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_17',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_17 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_17',
    text: 'Welches Pseudowort passt nicht zu den anderen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_17 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_17',
    text: '1) Quizzle\n\n2) Bykyle\n\n3) Blazzle\n\n4) Tixxle',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item18"
  Item18Clock = new util.Clock();
  var countdown_started = false;
  
  image_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_18', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Dirt 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_18',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Answers_18 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_18',
    text: '1) Erde\n\n2) Rede\n\n3) Erbe\n\n4) Parade',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Question_image_2', units : undefined, 
    image : 'Bildschirmfoto 2023-12-03 um 21.07.58.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "Item19"
  Item19Clock = new util.Clock();
  var countdown_started = false;
  
  image_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_19', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Neutral face 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_19 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_19',
    text: 'Folgende Schlussregeln gelten:\n1) AN ist größer als ZET\n2) ZET ist kleiner als BE\n3) BE ist nicht am größten\n4) SU ist nicht am kleinsten, aber kleiner als BE\nWelche Aussage trifft zu?\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_19 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_19',
    text: '1) AN ist kleiner als SU\n\n2) ZET ist am kleinsten\n\n3) BE ist größer als AN\n\n4) ZET ist größer als SU',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item20"
  Item20Clock = new util.Clock();
  var countdown_started = false;
  
  image_20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_20', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Paperclips 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_20',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_20 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_20',
    text: 'Es gilt: Takt, Gabelung, Rohrreiniger.\nWelches Wort passt in die Reihe?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_20 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_20',
    text: '1) Grafikdesign\n\n2) Bananenbrot\n\n3) Tisch\n\n4) Nasenbluten\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item21"
  Item21Clock = new util.Clock();
  var countdown_started = false;
  
  image_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_21', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Roofing 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_21',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_21 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_21',
    text: 'Sokrates ist ein Mensch. \nAlle Menschen sind sterblich.\nWelchen Schluss können Sie daraus ziehen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_21 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_21',
    text: '1) Sokrates ist unsterblich\n\n2) keinen\n\n3) Sokrates ist sterblich \n\n4) Sokrates ist ein Gott\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item22"
  Item22Clock = new util.Clock();
  var countdown_started = false;
  
  image_22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_22', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Shark 8.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_22',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_22 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_22',
    text: 'In der Welt von Mythoria haben alle Säugetiere, die sich heilen können, einen leuchtenden Juwel. Der Glimmer ist ein Säugetier und hat einen leuchtenden Juwel.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_22 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_22',
    text: '1) Alle Tiere mit einem leuchtenden Juwel können sich heilen.  \n\n2) Alle sich heilenden Tiere haben einen leuchtenden Juwel.  \n\n3) Der Glimmer kann sich heilen.  \n\n4) Der Glimmer kann fliegen',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item23"
  Item23Clock = new util.Clock();
  var countdown_started = false;
  
  image_23 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_23', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Sleepy pose 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_23',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_23 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_23',
    text: 'Viele Menschen, darunter Studis, haben einen Test gemacht. \nAlle Studis haben bestanden. Maria hat bestanden. Tom nicht.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_23 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_23',
    text: '1) Tom und Maria sind Menschen\n\n2) Tom ist kein Studi, Maria schon.\n\n3) Maria ist Studi. \n\n4) b und c',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item24"
  Item24Clock = new util.Clock();
  var countdown_started = false;
  
  image_24 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_24', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Wall 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_24 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_24',
    text: 'Alle Wissenschaftler sind gute Denker. \nEinige Wissenschaftler sind Mathematiker. \nEinige Mathematiker sind Künstler. \nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_24 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_24',
    text: '1) Alle Künstler sind gute Denker.\n\n2) Einige Künstler sind Wissenschaftler. \n\n3) Einige Mathematiker sind gute Denker.\n\n4) Alle guten Denker sind Künstler.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause2"
  Pause2Clock = new util.Clock();
  text_Pause_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Pause_2',
    text: '2/4 des Experiments geschafft, sie können hier eine Pause einlegen!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Pause_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_Pause_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_Pause_2', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cat 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_continueExp_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continueExp_2',
    text: '(Zum Fortsetzen beliebige Taste drücken)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item25"
  Item25Clock = new util.Clock();
  var countdown_started = false;
  
  image_25 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_25', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Rainbow 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_25',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_25 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_25',
    text: 'Es gilt: Frühling - Jahreszeit. \nWelches der folgenden Wortpaare passt nicht? ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_25 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_25',
    text: '1) Tee - Getränk\n\n2) Brot - Essen\n\n3) Stuhl - Tisch\n\n4) Messer – Besteck',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item26"
  Item26Clock = new util.Clock();
  var countdown_started = false;
  
  image_26 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_26', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Dog 12.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_26',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_26 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_26',
    text: 'Zahlen sind zu Gleichungen wie Wörter zu....?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_26 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_26',
    text: '1) Sätzen\n\n2) Musik\n\n3) Buchstaben \n\n4) Variablen\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item27"
  Item27Clock = new util.Clock();
  var countdown_started = false;
  
  image_27 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_27', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Lake 12.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_27',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_27 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_27',
    text: 'Es gilt: Schiff - Wasser.\nWelches der folgenden Wortpaare passt?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_27 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_27',
    text: '1) Auto- Parkplatz\n\n2) Fahrrad- Wiese\n\n3) Flugzeug- Flugzeughalle\n\n4) Zug- Schiene',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_27 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item28"
  Item28Clock = new util.Clock();
  var countdown_started = false;
  
  image_28 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_28', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Fireworks 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_28',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_28 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_28',
    text: 'Eisen → fällt\nFeder → ...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_28 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_28',
    text: '1) weich\n\n2) schwebt\n\n3) leicht\n\n4) stürzt',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item35"
  Item35Clock = new util.Clock();
  var countdown_started = false;
  
  image_35 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_35', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Baby 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_35',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_35 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_35',
    text: 'Welches Pseudowort passt nicht zu den anderen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_35 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_35',
    text: '1) Crumplex\n\n2) Snizzle\n\n3) Glorf\n\n4) Rilox',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_35 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item29"
  Item29Clock = new util.Clock();
  var countdown_started = false;
  
  image_29 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_29', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Dog 6.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_29',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Answers_29 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_29',
    text: '1) kalt\n\n2) geld\n\n3) gelb\n\n4) Gestalt',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_29 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Question_image_3', units : undefined, 
    image : 'Tabelle Item29.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "Item30"
  Item30Clock = new util.Clock();
  var countdown_started = false;
  
  image_30 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_30', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Beach 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_30',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_30 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_30',
    text: 'Folgende Aussagen sind wahr    \n1) Wenn nicht B, dann nicht A.  \n2) Wenn nicht C, dann D oder A\nUnd es gilt folgende Aussage: D\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_30 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_30',
    text: '1) D\n\n2) B\n\n3) C\n\n4) A und D ',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_30 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item31"
  Item31Clock = new util.Clock();
  var countdown_started = false;
  
  image_31 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_31', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Lake 9.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_31',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_31 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_31',
    text: 'Es gilt: Norden, Orange, Rasen\nWelches Wort passt in die Reihe?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_31 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_31',
    text: '1) Apfel\n\n2) Leben\n\n3)\xa0Asphalt\n\n4)\xa0Baum\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_31 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item32"
  Item32Clock = new util.Clock();
  var countdown_started = false;
  
  image_32 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_32', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cat 5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_32',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_32 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_32',
    text: 'Alle Studenten, die Hausaufgaben machen, bestehen den Kurs. \nMartin hat den Kurs nicht bestanden.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_32 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_32',
    text: '1) Martin hat seine Hausaufgaben nicht gemacht\n\n2) Martin hat sich zu wenig für die Prüfung vorbereitet\n\n3) Der Lehrer war unfair\n\n4) Der Kurs war zu schwer',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_32 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item33"
  Item33Clock = new util.Clock();
  var countdown_started = false;
  
  image_33 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_33', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Penguins 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_33',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_33 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_33',
    text: 'Alle Vögel haben Federn. Kein Mensch hat Federn.\nHerr Müller hat Federn. \nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_33 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_33',
    text: '1) Herr Müller ist ein Mensch\n\n2) Herr Müller ist ein Vogel\n\n3) Einige Menschen haben Federn\n\n4) Alle Menschen haben Federn',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_33 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item34"
  Item34Clock = new util.Clock();
  var countdown_started = false;
  
  image_34 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_34', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Couple 7.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_34',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_34 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_34',
    text: 'Jeder Tag hat nur ein Wetter\nEs regnet immer zweimal pro Woche.\nEs regnet immer Montags.\nNach Regen kommt immer Sonne.\nWann regnet es nie?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_34 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_34',
    text: '1) Dienstag und Samstag\n\n2) kann man nicht sagen\n\n3) Dienstag und Sonntag\n\n4) Dienstag\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_34 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item36"
  Item36Clock = new util.Clock();
  var countdown_started = false;
  
  image_36 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_36', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Fireworks 6.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_36',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_36 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_36',
    text: "Alle Flumps essen X's.\nKeine Tiere sind grün. \nFlumps sind keine Tiere. \nX’s sind schwarz.\nWelche Aussage ist korrekt?",
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_36 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_36',
    text: '1) X’s sind Tiere\n\n2) Flumps sind immer grün\n\n3) Flumps essen Tiere\n\n4) Keine der obigen',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_36 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pause3"
  Pause3Clock = new util.Clock();
  text_Pause_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Pause_3',
    text: '3/4 des Experiments geschafft, sie können hier eine Pause einlegen!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Pause_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_Pause_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_Pause_3', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cat 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_continueExp_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_continueExp_3',
    text: '(Zum Fortsetzen beliebige Taste drücken)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item37"
  Item37Clock = new util.Clock();
  var countdown_started = false;
  
  image_37 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_37', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Explosion 5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_37',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_37 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_37',
    text: 'Es gilt: Fichte – Baum\nWelches Wortpaar passt nicht?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_37 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_37',
    text: '1) Trompete - Instrument\n\n2) Rose - Blume\n\n3) Benzin - Motor\n\n4) Spinat - Gemüse',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_37 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item38"
  Item38Clock = new util.Clock();
  var countdown_started = false;
  
  image_38 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_38', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Feces 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_38',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_38 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_38',
    text: 'Hand ist zu Finger wie Fuß zu...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_38 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_38',
    text: '1) Bein\n\n2) Kopf\n\n3) Zeh\n\n4) Arm',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_38 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item39"
  Item39Clock = new util.Clock();
  var countdown_started = false;
  
  image_39 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_39', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Garbage dump 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_39',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_39 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_39',
    text: 'Es gilt: Mensch - Schuh\nWelches Wortpaar passt?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_39 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_39',
    text: '1) Lastwagen - Lenkrad\n\n2) Auto - Reifen\n\n3) Zug - Oberleitung\n\n4) Schiff - Motor',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_39 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item40"
  Item40Clock = new util.Clock();
  var countdown_started = false;
  
  image_40 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_40', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Dog 24.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_40',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_40 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_40',
    text: 'Himmel → Wolken\nFoto → ...?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_40 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_40',
    text: '1) Motive\n\n2) Bilder\n\n3) Licht\n\n4) Objektiv',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_40 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item41"
  Item41Clock = new util.Clock();
  var countdown_started = false;
  
  image_41 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_41', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Scary face 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_41',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_41 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_41',
    text: 'Welches Pseudowort passt nicht zu den anderen?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_41 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_41',
    text: '1) Zunkifa\n\n2) Blizle\n\n3) Frungle\n\n4) Quibble',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_41 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item42"
  Item42Clock = new util.Clock();
  var countdown_started = false;
  
  image_42 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_42', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Fire 9.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_42',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Answers_42 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_42',
    text: '1) Senf\n\n2) sechs\n\n3) Sand\n\n4) Welt',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Key_42 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Question_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Question_image', units : undefined, 
    image : 'Tabelle Item 42.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), 0.3], size : [0.6, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "Item43"
  Item43Clock = new util.Clock();
  var countdown_started = false;
  
  image_43 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_43', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Shot 3.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_43',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_43 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_43',
    text: 'Folgende Schlussregeln gelten: \n1) blau ist gelb\n2) gelb ist rot und blau\nEs gilt folgende Aussage: gelb \nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_43 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_43',
    text: '1) rot und blau\n\n2) blau und gelb\n\n3) nur rot\n\n4) rot und gelb',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_43 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item44"
  Item44Clock = new util.Clock();
  var countdown_started = false;
  
  image_44 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_44', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Car crash 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_44',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_44 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_44',
    text: 'Es gilt: Paragraf, Saatgut, Dreckswetter, Mitglied\nWelches Wort passt in die Reihe?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_44 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_44',
    text: '1) Bibliothek\n\n2) Politiker\n\n3) Salatdressing\n\n4) Banane',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_44 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item45"
  Item45Clock = new util.Clock();
  var countdown_started = false;
  
  image_45 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_45', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Cockroach 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_45',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_45 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_45',
    text: 'Alle A’s sind B. \nC ist ein A. \nDemnach ist C ein:',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_45 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_45',
    text: '1) B\n\n2) C\n\n3) A\n\n4) D',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_45 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item46"
  Item46Clock = new util.Clock();
  var countdown_started = false;
  
  image_46 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_46', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Animal carcass 5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_46',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_46 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_46',
    text: 'Alle Fluffs haben Schwänze. \nFluffs sind Tiere.\nNicht alle Tiere haben Schwänze.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_46 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_46',
    text: '1) Alle Tiere mit Schwänzen sind Fluffs\n\n2) Alle Tiere ohne Schwänze sind keine Fluffs\n\n3) Keine Schlussfolgerung möglich\n\n4) Alle Fluffs haben Fell',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_46 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item47"
  Item47Clock = new util.Clock();
  var countdown_started = false;
  
  image_47 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_47', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Destruction 4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_47',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_47 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_47',
    text: 'Essen mit Knob ist lecker\nEssen ohne Knob kann auch lecker sein. \nEssen mit Knob ist nie schlecht.\n\nDas Essen war lecker.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_47 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_47',
    text: '1) Es war Knob im Essen\n\n2) Es war kein Knob im Essen\n\n3) Mit Knob wäre es noch besser gewesen\n\n4) Das Essen war nicht schlecht',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_47 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Item48"
  Item48Clock = new util.Clock();
  var countdown_started = false;
  
  image_48 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_48', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/War 6.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.5, 0], size : [1, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  timer_text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text_48',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Question_48 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Question_48',
    text: 'Viele Blumen sind gelb.\nAlles was gelb ist schmeckt süß. \nManche süße Dinge enthalten Zucker.\nWelche Aussage trifft zu?',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.35], 
    letterHeight: 0.045,
    lineSpacing: 1.0,
    size: [0.65, 0.4],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  Answers_48 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Answers_48',
    text: '1) Alle Blumen sind süß\n\n2) Süße Dinge sind immer gelb\n\n3) Alle gelbe Blumen enthalten Zucker\n\n4) manche gelbe Dinge enthalten Zucker',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.75, 0.6],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  Key_48 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  text_Goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Goodbye',
    text: 'Das Experiment ist hiermit abgeschlossen.\nVielen Dank für Ihre Unterstützung!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Goodbye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_Goodbye = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_Goodbye', units : undefined, 
    image : 'Bilder_Oasis/oasis/Images/Dog 21.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_endExp = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_endExp',
    text: '(Zum Beenden beliebige Taste drücken)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_Welcome_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    key_Welcome.keys = undefined;
    key_Welcome.rt = undefined;
    _key_Welcome_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text_Welcome);
    WelcomeComponents.push(key_Welcome);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Welcome* updates
    if (t >= 0.0 && text_Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Welcome.tStart = t;  // (not accounting for frame time here)
      text_Welcome.frameNStart = frameN;  // exact frame index
      
      text_Welcome.setAutoDraw(true);
    }
    
    
    // *key_Welcome* updates
    if (t >= 0.0 && key_Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Welcome.tStart = t;  // (not accounting for frame time here)
      key_Welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Welcome.clearEvents(); });
    }
    
    if (key_Welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Welcome.getKeys({keyList: [], waitRelease: false});
      _key_Welcome_allKeys = _key_Welcome_allKeys.concat(theseKeys);
      if (_key_Welcome_allKeys.length > 0) {
        key_Welcome.keys = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].name;  // just the last key pressed
        key_Welcome.rt = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].rt;
        key_Welcome.duration = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Welcome.corr, level);
    }
    psychoJS.experiment.addData('key_Welcome.keys', key_Welcome.keys);
    if (typeof key_Welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Welcome.rt', key_Welcome.rt);
        psychoJS.experiment.addData('key_Welcome.duration', key_Welcome.duration);
        routineTimer.reset();
        }
    
    key_Welcome.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Introduction_allKeys;
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Introduction' ---
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Introduction.started', globalClock.getTime());
    key_Introduction.keys = undefined;
    key_Introduction.rt = undefined;
    _key_Introduction_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(text_Introduction);
    IntroductionComponents.push(key_Introduction);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Introduction' ---
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Introduction* updates
    if (t >= 0.0 && text_Introduction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Introduction.tStart = t;  // (not accounting for frame time here)
      text_Introduction.frameNStart = frameN;  // exact frame index
      
      text_Introduction.setAutoDraw(true);
    }
    
    
    // *key_Introduction* updates
    if (t >= 0.0 && key_Introduction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Introduction.tStart = t;  // (not accounting for frame time here)
      key_Introduction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Introduction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Introduction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Introduction.clearEvents(); });
    }
    
    if (key_Introduction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Introduction.getKeys({keyList: [], waitRelease: false});
      _key_Introduction_allKeys = _key_Introduction_allKeys.concat(theseKeys);
      if (_key_Introduction_allKeys.length > 0) {
        key_Introduction.keys = _key_Introduction_allKeys[_key_Introduction_allKeys.length - 1].name;  // just the last key pressed
        key_Introduction.rt = _key_Introduction_allKeys[_key_Introduction_allKeys.length - 1].rt;
        key_Introduction.duration = _key_Introduction_allKeys[_key_Introduction_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroductionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Introduction' ---
    for (const thisComponent of IntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Introduction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Introduction.corr, level);
    }
    psychoJS.experiment.addData('key_Introduction.keys', key_Introduction.keys);
    if (typeof key_Introduction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Introduction.rt', key_Introduction.rt);
        psychoJS.experiment.addData('key_Introduction.duration', key_Introduction.duration);
        routineTimer.reset();
        }
    
    key_Introduction.stop();
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdown_started;
var _Key_allKeys;
var Item1Components;
function Item1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item1' ---
    t = 0;
    Item1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item1.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code
    var time_left = 42
    if (!countdown_started){
        Item1Clock.reset()
        countdown_started = true
    }
    Key.keys = undefined;
    Key.rt = undefined;
    _Key_allKeys = [];
    // keep track of which components have finished
    Item1Components = [];
    Item1Components.push(timer_text);
    Item1Components.push(Question);
    Item1Components.push(Answers);
    Item1Components.push(Key);
    
    for (const thisComponent of Item1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var time_left;
function Item1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item1' ---
    // get current time
    t = Item1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code
    time_left = Math.ceil(42 - Item1Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text.setText(`${time_left}`, false);
    }
    
    // *timer_text* updates
    if (t >= 32 && timer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text.tStart = t;  // (not accounting for frame time here)
      timer_text.frameNStart = frameN;  // exact frame index
      
      timer_text.setAutoDraw(true);
    }
    
    
    // *Question* updates
    if (t >= 2 && Question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question.tStart = t;  // (not accounting for frame time here)
      Question.frameNStart = frameN;  // exact frame index
      
      Question.setAutoDraw(true);
    }
    
    
    // *Answers* updates
    if (t >= 2 && Answers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers.tStart = t;  // (not accounting for frame time here)
      Answers.frameNStart = frameN;  // exact frame index
      
      Answers.setAutoDraw(true);
    }
    
    
    // *Key* updates
    if (t >= 2.0 && Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key.tStart = t;  // (not accounting for frame time here)
      Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key.clearEvents(); });
    }
    
    if (Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_allKeys = _Key_allKeys.concat(theseKeys);
      if (_Key_allKeys.length > 0) {
        Key.keys = _Key_allKeys[_Key_allKeys.length - 1].name;  // just the last key pressed
        Key.rt = _Key_allKeys[_Key_allKeys.length - 1].rt;
        Key.duration = _Key_allKeys[_Key_allKeys.length - 1].duration;
        // was this correct?
        if (Key.keys == '4') {
            Key.corr = 1;
        } else {
            Key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item1' ---
    for (const thisComponent of Item1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key.corr = 1;  // correct non-response
      } else {
         Key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key.corr, level);
    }
    psychoJS.experiment.addData('Key.keys', Key.keys);
    psychoJS.experiment.addData('Key.corr', Key.corr);
    if (typeof Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key.rt', Key.rt);
        psychoJS.experiment.addData('Key.duration', Key.duration);
        routineTimer.reset();
        }
    
    Key.stop();
    // the Routine "Item1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_2_allKeys;
var Item2Components;
function Item2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item2' ---
    t = 0;
    Item2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item2.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_2
    var time_left = 42
    if (!countdown_started){
        Item2Clock.reset()
        countdown_started = true
    }
    Key_2.keys = undefined;
    Key_2.rt = undefined;
    _Key_2_allKeys = [];
    // keep track of which components have finished
    Item2Components = [];
    Item2Components.push(timer_text_2);
    Item2Components.push(Question_2);
    Item2Components.push(Answers_2);
    Item2Components.push(Key_2);
    
    for (const thisComponent of Item2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item2' ---
    // get current time
    t = Item2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_2
    time_left = Math.ceil(42 - Item2Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_2.setText(`${time_left}`, false);
    }
    
    // *timer_text_2* updates
    if (t >= 32 && timer_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_2.tStart = t;  // (not accounting for frame time here)
      timer_text_2.frameNStart = frameN;  // exact frame index
      
      timer_text_2.setAutoDraw(true);
    }
    
    
    // *Question_2* updates
    if (t >= 2 && Question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_2.tStart = t;  // (not accounting for frame time here)
      Question_2.frameNStart = frameN;  // exact frame index
      
      Question_2.setAutoDraw(true);
    }
    
    
    // *Answers_2* updates
    if (t >= 2 && Answers_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_2.tStart = t;  // (not accounting for frame time here)
      Answers_2.frameNStart = frameN;  // exact frame index
      
      Answers_2.setAutoDraw(true);
    }
    
    
    // *Key_2* updates
    if (t >= 2.0 && Key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_2.tStart = t;  // (not accounting for frame time here)
      Key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_2.clearEvents(); });
    }
    
    if (Key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_2.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_2_allKeys = _Key_2_allKeys.concat(theseKeys);
      if (_Key_2_allKeys.length > 0) {
        Key_2.keys = _Key_2_allKeys[_Key_2_allKeys.length - 1].name;  // just the last key pressed
        Key_2.rt = _Key_2_allKeys[_Key_2_allKeys.length - 1].rt;
        Key_2.duration = _Key_2_allKeys[_Key_2_allKeys.length - 1].duration;
        // was this correct?
        if (Key_2.keys == '2') {
            Key_2.corr = 1;
        } else {
            Key_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item2' ---
    for (const thisComponent of Item2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_2.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_2.corr = 1;  // correct non-response
      } else {
         Key_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_2.corr, level);
    }
    psychoJS.experiment.addData('Key_2.keys', Key_2.keys);
    psychoJS.experiment.addData('Key_2.corr', Key_2.corr);
    if (typeof Key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_2.rt', Key_2.rt);
        psychoJS.experiment.addData('Key_2.duration', Key_2.duration);
        routineTimer.reset();
        }
    
    Key_2.stop();
    // the Routine "Item2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_3_allKeys;
var Item3Components;
function Item3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item3' ---
    t = 0;
    Item3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item3.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_3
    var time_left = 42
    if (!countdown_started){
        Item3Clock.reset()
        countdown_started = true
    }
    Key_3.keys = undefined;
    Key_3.rt = undefined;
    _Key_3_allKeys = [];
    // keep track of which components have finished
    Item3Components = [];
    Item3Components.push(timer_text_3);
    Item3Components.push(Question_3);
    Item3Components.push(Answers_3);
    Item3Components.push(Key_3);
    
    for (const thisComponent of Item3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item3' ---
    // get current time
    t = Item3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_3
    time_left = Math.ceil(42 - Item3Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_3.setText(`${time_left}`, false);
    }
    
    // *timer_text_3* updates
    if (t >= 32 && timer_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_3.tStart = t;  // (not accounting for frame time here)
      timer_text_3.frameNStart = frameN;  // exact frame index
      
      timer_text_3.setAutoDraw(true);
    }
    
    
    // *Question_3* updates
    if (t >= 2 && Question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_3.tStart = t;  // (not accounting for frame time here)
      Question_3.frameNStart = frameN;  // exact frame index
      
      Question_3.setAutoDraw(true);
    }
    
    
    // *Answers_3* updates
    if (t >= 2 && Answers_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_3.tStart = t;  // (not accounting for frame time here)
      Answers_3.frameNStart = frameN;  // exact frame index
      
      Answers_3.setAutoDraw(true);
    }
    
    
    // *Key_3* updates
    if (t >= 2.0 && Key_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_3.tStart = t;  // (not accounting for frame time here)
      Key_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_3.clearEvents(); });
    }
    
    if (Key_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_3.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_3_allKeys = _Key_3_allKeys.concat(theseKeys);
      if (_Key_3_allKeys.length > 0) {
        Key_3.keys = _Key_3_allKeys[_Key_3_allKeys.length - 1].name;  // just the last key pressed
        Key_3.rt = _Key_3_allKeys[_Key_3_allKeys.length - 1].rt;
        Key_3.duration = _Key_3_allKeys[_Key_3_allKeys.length - 1].duration;
        // was this correct?
        if (Key_3.keys == '3') {
            Key_3.corr = 1;
        } else {
            Key_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item3' ---
    for (const thisComponent of Item3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item3.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_3.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_3.corr = 1;  // correct non-response
      } else {
         Key_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_3.corr, level);
    }
    psychoJS.experiment.addData('Key_3.keys', Key_3.keys);
    psychoJS.experiment.addData('Key_3.corr', Key_3.corr);
    if (typeof Key_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_3.rt', Key_3.rt);
        psychoJS.experiment.addData('Key_3.duration', Key_3.duration);
        routineTimer.reset();
        }
    
    Key_3.stop();
    // the Routine "Item3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_4_allKeys;
var Item4Components;
function Item4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item4' ---
    t = 0;
    Item4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item4.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_4
    var time_left = 42
    if (!countdown_started){
        Item4Clock.reset()
        countdown_started = true
    }
    Key_4.keys = undefined;
    Key_4.rt = undefined;
    _Key_4_allKeys = [];
    // keep track of which components have finished
    Item4Components = [];
    Item4Components.push(timer_text_4);
    Item4Components.push(Question_4);
    Item4Components.push(Answers_4);
    Item4Components.push(Key_4);
    
    for (const thisComponent of Item4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item4' ---
    // get current time
    t = Item4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_4
    time_left = Math.ceil(42 - Item4Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_4.setText(`${time_left}`, false);
    }
    
    // *timer_text_4* updates
    if (t >= 32 && timer_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_4.tStart = t;  // (not accounting for frame time here)
      timer_text_4.frameNStart = frameN;  // exact frame index
      
      timer_text_4.setAutoDraw(true);
    }
    
    
    // *Question_4* updates
    if (t >= 2 && Question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_4.tStart = t;  // (not accounting for frame time here)
      Question_4.frameNStart = frameN;  // exact frame index
      
      Question_4.setAutoDraw(true);
    }
    
    
    // *Answers_4* updates
    if (t >= 2 && Answers_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_4.tStart = t;  // (not accounting for frame time here)
      Answers_4.frameNStart = frameN;  // exact frame index
      
      Answers_4.setAutoDraw(true);
    }
    
    
    // *Key_4* updates
    if (t >= 2.0 && Key_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_4.tStart = t;  // (not accounting for frame time here)
      Key_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_4.clearEvents(); });
    }
    
    if (Key_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_4.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_4_allKeys = _Key_4_allKeys.concat(theseKeys);
      if (_Key_4_allKeys.length > 0) {
        Key_4.keys = _Key_4_allKeys[_Key_4_allKeys.length - 1].name;  // just the last key pressed
        Key_4.rt = _Key_4_allKeys[_Key_4_allKeys.length - 1].rt;
        Key_4.duration = _Key_4_allKeys[_Key_4_allKeys.length - 1].duration;
        // was this correct?
        if (Key_4.keys == '3') {
            Key_4.corr = 1;
        } else {
            Key_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item4' ---
    for (const thisComponent of Item4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item4.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_4.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_4.corr = 1;  // correct non-response
      } else {
         Key_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_4.corr, level);
    }
    psychoJS.experiment.addData('Key_4.keys', Key_4.keys);
    psychoJS.experiment.addData('Key_4.corr', Key_4.corr);
    if (typeof Key_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_4.rt', Key_4.rt);
        psychoJS.experiment.addData('Key_4.duration', Key_4.duration);
        routineTimer.reset();
        }
    
    Key_4.stop();
    // the Routine "Item4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_5_allKeys;
var Item5Components;
function Item5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item5' ---
    t = 0;
    Item5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item5.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_5
    var time_left = 42
    if (!countdown_started){
        Item5Clock.reset()
        countdown_started = true
    }
    Key_5.keys = undefined;
    Key_5.rt = undefined;
    _Key_5_allKeys = [];
    // keep track of which components have finished
    Item5Components = [];
    Item5Components.push(timer_text_5);
    Item5Components.push(Question_5);
    Item5Components.push(Answers_5);
    Item5Components.push(Key_5);
    
    for (const thisComponent of Item5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item5' ---
    // get current time
    t = Item5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_5
    time_left = Math.ceil(42 - Item5Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_5.setText(`${time_left}`, false);
    }
    
    // *timer_text_5* updates
    if (t >= 32 && timer_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_5.tStart = t;  // (not accounting for frame time here)
      timer_text_5.frameNStart = frameN;  // exact frame index
      
      timer_text_5.setAutoDraw(true);
    }
    
    
    // *Question_5* updates
    if (t >= 2 && Question_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_5.tStart = t;  // (not accounting for frame time here)
      Question_5.frameNStart = frameN;  // exact frame index
      
      Question_5.setAutoDraw(true);
    }
    
    
    // *Answers_5* updates
    if (t >= 2 && Answers_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_5.tStart = t;  // (not accounting for frame time here)
      Answers_5.frameNStart = frameN;  // exact frame index
      
      Answers_5.setAutoDraw(true);
    }
    
    
    // *Key_5* updates
    if (t >= 2.0 && Key_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_5.tStart = t;  // (not accounting for frame time here)
      Key_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_5.clearEvents(); });
    }
    
    if (Key_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_5.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_5_allKeys = _Key_5_allKeys.concat(theseKeys);
      if (_Key_5_allKeys.length > 0) {
        Key_5.keys = _Key_5_allKeys[_Key_5_allKeys.length - 1].name;  // just the last key pressed
        Key_5.rt = _Key_5_allKeys[_Key_5_allKeys.length - 1].rt;
        Key_5.duration = _Key_5_allKeys[_Key_5_allKeys.length - 1].duration;
        // was this correct?
        if (Key_5.keys == '4') {
            Key_5.corr = 1;
        } else {
            Key_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item5' ---
    for (const thisComponent of Item5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item5.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_5.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_5.corr = 1;  // correct non-response
      } else {
         Key_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_5.corr, level);
    }
    psychoJS.experiment.addData('Key_5.keys', Key_5.keys);
    psychoJS.experiment.addData('Key_5.corr', Key_5.corr);
    if (typeof Key_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_5.rt', Key_5.rt);
        psychoJS.experiment.addData('Key_5.duration', Key_5.duration);
        routineTimer.reset();
        }
    
    Key_5.stop();
    // the Routine "Item5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_6_allKeys;
var Item6Components;
function Item6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item6' ---
    t = 0;
    Item6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item6.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_6
    var time_left = 42
    if (!countdown_started){
        Item6Clock.reset()
        countdown_started = true
    }
    Key_6.keys = undefined;
    Key_6.rt = undefined;
    _Key_6_allKeys = [];
    // keep track of which components have finished
    Item6Components = [];
    Item6Components.push(timer_text_6);
    Item6Components.push(Answers_6);
    Item6Components.push(Key_6);
    Item6Components.push(Question_image_1);
    
    for (const thisComponent of Item6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item6' ---
    // get current time
    t = Item6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_6
    time_left = Math.ceil(42 - Item6Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_6.setText(`${time_left}`, false);
    }
    
    // *timer_text_6* updates
    if (t >= 32 && timer_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_6.tStart = t;  // (not accounting for frame time here)
      timer_text_6.frameNStart = frameN;  // exact frame index
      
      timer_text_6.setAutoDraw(true);
    }
    
    
    // *Answers_6* updates
    if (t >= 2 && Answers_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_6.tStart = t;  // (not accounting for frame time here)
      Answers_6.frameNStart = frameN;  // exact frame index
      
      Answers_6.setAutoDraw(true);
    }
    
    
    // *Key_6* updates
    if (t >= 2.0 && Key_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_6.tStart = t;  // (not accounting for frame time here)
      Key_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_6.clearEvents(); });
    }
    
    if (Key_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_6.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_6_allKeys = _Key_6_allKeys.concat(theseKeys);
      if (_Key_6_allKeys.length > 0) {
        Key_6.keys = _Key_6_allKeys[_Key_6_allKeys.length - 1].name;  // just the last key pressed
        Key_6.rt = _Key_6_allKeys[_Key_6_allKeys.length - 1].rt;
        Key_6.duration = _Key_6_allKeys[_Key_6_allKeys.length - 1].duration;
        // was this correct?
        if (Key_6.keys == '4') {
            Key_6.corr = 1;
        } else {
            Key_6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Question_image_1* updates
    if (t >= 2 && Question_image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_image_1.tStart = t;  // (not accounting for frame time here)
      Question_image_1.frameNStart = frameN;  // exact frame index
      
      Question_image_1.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item6' ---
    for (const thisComponent of Item6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item6.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_6.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_6.corr = 1;  // correct non-response
      } else {
         Key_6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_6.corr, level);
    }
    psychoJS.experiment.addData('Key_6.keys', Key_6.keys);
    psychoJS.experiment.addData('Key_6.corr', Key_6.corr);
    if (typeof Key_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_6.rt', Key_6.rt);
        psychoJS.experiment.addData('Key_6.duration', Key_6.duration);
        routineTimer.reset();
        }
    
    Key_6.stop();
    // the Routine "Item6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_7_allKeys;
var Item7Components;
function Item7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item7' ---
    t = 0;
    Item7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item7.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_7
    var time_left = 42
    if (!countdown_started){
        Item7Clock.reset()
        countdown_started = true
    }
    Key_7.keys = undefined;
    Key_7.rt = undefined;
    _Key_7_allKeys = [];
    // keep track of which components have finished
    Item7Components = [];
    Item7Components.push(timer_text_7);
    Item7Components.push(Question_7);
    Item7Components.push(Answers_7);
    Item7Components.push(Key_7);
    
    for (const thisComponent of Item7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item7' ---
    // get current time
    t = Item7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_7
    time_left = Math.ceil(42 - Item7Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_7.setText(`${time_left}`, false);
    }
    
    // *timer_text_7* updates
    if (t >= 32 && timer_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_7.tStart = t;  // (not accounting for frame time here)
      timer_text_7.frameNStart = frameN;  // exact frame index
      
      timer_text_7.setAutoDraw(true);
    }
    
    
    // *Question_7* updates
    if (t >= 2 && Question_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_7.tStart = t;  // (not accounting for frame time here)
      Question_7.frameNStart = frameN;  // exact frame index
      
      Question_7.setAutoDraw(true);
    }
    
    
    // *Answers_7* updates
    if (t >= 2 && Answers_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_7.tStart = t;  // (not accounting for frame time here)
      Answers_7.frameNStart = frameN;  // exact frame index
      
      Answers_7.setAutoDraw(true);
    }
    
    
    // *Key_7* updates
    if (t >= 2.0 && Key_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_7.tStart = t;  // (not accounting for frame time here)
      Key_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_7.clearEvents(); });
    }
    
    if (Key_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_7.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_7_allKeys = _Key_7_allKeys.concat(theseKeys);
      if (_Key_7_allKeys.length > 0) {
        Key_7.keys = _Key_7_allKeys[_Key_7_allKeys.length - 1].name;  // just the last key pressed
        Key_7.rt = _Key_7_allKeys[_Key_7_allKeys.length - 1].rt;
        Key_7.duration = _Key_7_allKeys[_Key_7_allKeys.length - 1].duration;
        // was this correct?
        if (Key_7.keys == '4') {
            Key_7.corr = 1;
        } else {
            Key_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item7' ---
    for (const thisComponent of Item7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item7.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_7.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_7.corr = 1;  // correct non-response
      } else {
         Key_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_7.corr, level);
    }
    psychoJS.experiment.addData('Key_7.keys', Key_7.keys);
    psychoJS.experiment.addData('Key_7.corr', Key_7.corr);
    if (typeof Key_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_7.rt', Key_7.rt);
        psychoJS.experiment.addData('Key_7.duration', Key_7.duration);
        routineTimer.reset();
        }
    
    Key_7.stop();
    // the Routine "Item7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_8_allKeys;
var Item8Components;
function Item8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item8' ---
    t = 0;
    Item8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item8.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_8
    var time_left = 42
    if (!countdown_started){
        Item8Clock.reset()
        countdown_started = true
    }
    Key_8.keys = undefined;
    Key_8.rt = undefined;
    _Key_8_allKeys = [];
    // keep track of which components have finished
    Item8Components = [];
    Item8Components.push(timer_text_8);
    Item8Components.push(Question_8);
    Item8Components.push(Answers_8);
    Item8Components.push(Key_8);
    
    for (const thisComponent of Item8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item8' ---
    // get current time
    t = Item8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_8
    time_left = Math.ceil(42 - Item8Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_8.setText(`${time_left}`, false);
    }
    
    // *timer_text_8* updates
    if (t >= 32 && timer_text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_8.tStart = t;  // (not accounting for frame time here)
      timer_text_8.frameNStart = frameN;  // exact frame index
      
      timer_text_8.setAutoDraw(true);
    }
    
    
    // *Question_8* updates
    if (t >= 2 && Question_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_8.tStart = t;  // (not accounting for frame time here)
      Question_8.frameNStart = frameN;  // exact frame index
      
      Question_8.setAutoDraw(true);
    }
    
    
    // *Answers_8* updates
    if (t >= 2 && Answers_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_8.tStart = t;  // (not accounting for frame time here)
      Answers_8.frameNStart = frameN;  // exact frame index
      
      Answers_8.setAutoDraw(true);
    }
    
    
    // *Key_8* updates
    if (t >= 2.0 && Key_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_8.tStart = t;  // (not accounting for frame time here)
      Key_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_8.clearEvents(); });
    }
    
    if (Key_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_8.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_8_allKeys = _Key_8_allKeys.concat(theseKeys);
      if (_Key_8_allKeys.length > 0) {
        Key_8.keys = _Key_8_allKeys[_Key_8_allKeys.length - 1].name;  // just the last key pressed
        Key_8.rt = _Key_8_allKeys[_Key_8_allKeys.length - 1].rt;
        Key_8.duration = _Key_8_allKeys[_Key_8_allKeys.length - 1].duration;
        // was this correct?
        if (Key_8.keys == '3') {
            Key_8.corr = 1;
        } else {
            Key_8.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item8' ---
    for (const thisComponent of Item8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item8.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_8.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_8.corr = 1;  // correct non-response
      } else {
         Key_8.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_8.corr, level);
    }
    psychoJS.experiment.addData('Key_8.keys', Key_8.keys);
    psychoJS.experiment.addData('Key_8.corr', Key_8.corr);
    if (typeof Key_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_8.rt', Key_8.rt);
        psychoJS.experiment.addData('Key_8.duration', Key_8.duration);
        routineTimer.reset();
        }
    
    Key_8.stop();
    // the Routine "Item8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_9_allKeys;
var Item9Components;
function Item9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item9' ---
    t = 0;
    Item9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item9.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_9
    var time_left = 42
    if (!countdown_started){
        Item9Clock.reset()
        countdown_started = true
    }
    Key_9.keys = undefined;
    Key_9.rt = undefined;
    _Key_9_allKeys = [];
    // keep track of which components have finished
    Item9Components = [];
    Item9Components.push(timer_text_9);
    Item9Components.push(Question_9);
    Item9Components.push(Answers_9);
    Item9Components.push(Key_9);
    
    for (const thisComponent of Item9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item9' ---
    // get current time
    t = Item9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_9
    time_left = Math.ceil(42 - Item9Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_9.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_9.setText(`${time_left}`, false);
    }
    
    // *timer_text_9* updates
    if (t >= 32 && timer_text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_9.tStart = t;  // (not accounting for frame time here)
      timer_text_9.frameNStart = frameN;  // exact frame index
      
      timer_text_9.setAutoDraw(true);
    }
    
    
    // *Question_9* updates
    if (t >= 2 && Question_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_9.tStart = t;  // (not accounting for frame time here)
      Question_9.frameNStart = frameN;  // exact frame index
      
      Question_9.setAutoDraw(true);
    }
    
    
    // *Answers_9* updates
    if (t >= 2 && Answers_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_9.tStart = t;  // (not accounting for frame time here)
      Answers_9.frameNStart = frameN;  // exact frame index
      
      Answers_9.setAutoDraw(true);
    }
    
    
    // *Key_9* updates
    if (t >= 2.0 && Key_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_9.tStart = t;  // (not accounting for frame time here)
      Key_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_9.clearEvents(); });
    }
    
    if (Key_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_9.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_9_allKeys = _Key_9_allKeys.concat(theseKeys);
      if (_Key_9_allKeys.length > 0) {
        Key_9.keys = _Key_9_allKeys[_Key_9_allKeys.length - 1].name;  // just the last key pressed
        Key_9.rt = _Key_9_allKeys[_Key_9_allKeys.length - 1].rt;
        Key_9.duration = _Key_9_allKeys[_Key_9_allKeys.length - 1].duration;
        // was this correct?
        if (Key_9.keys == '1') {
            Key_9.corr = 1;
        } else {
            Key_9.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item9' ---
    for (const thisComponent of Item9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item9.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_9.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_9.corr = 1;  // correct non-response
      } else {
         Key_9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_9.corr, level);
    }
    psychoJS.experiment.addData('Key_9.keys', Key_9.keys);
    psychoJS.experiment.addData('Key_9.corr', Key_9.corr);
    if (typeof Key_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_9.rt', Key_9.rt);
        psychoJS.experiment.addData('Key_9.duration', Key_9.duration);
        routineTimer.reset();
        }
    
    Key_9.stop();
    // the Routine "Item9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_10_allKeys;
var Item10Components;
function Item10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item10' ---
    t = 0;
    Item10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item10.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_10
    var time_left = 42
    if (!countdown_started){
        Item10Clock.reset()
        countdown_started = true
    }
    Key_10.keys = undefined;
    Key_10.rt = undefined;
    _Key_10_allKeys = [];
    // keep track of which components have finished
    Item10Components = [];
    Item10Components.push(timer_text_10);
    Item10Components.push(Question_10);
    Item10Components.push(Answers_10);
    Item10Components.push(Key_10);
    
    for (const thisComponent of Item10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item10' ---
    // get current time
    t = Item10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_10
    time_left = Math.ceil(42 - Item10Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_10.setText(`${time_left}`, false);
    }
    
    // *timer_text_10* updates
    if (t >= 32 && timer_text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_10.tStart = t;  // (not accounting for frame time here)
      timer_text_10.frameNStart = frameN;  // exact frame index
      
      timer_text_10.setAutoDraw(true);
    }
    
    
    // *Question_10* updates
    if (t >= 2 && Question_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_10.tStart = t;  // (not accounting for frame time here)
      Question_10.frameNStart = frameN;  // exact frame index
      
      Question_10.setAutoDraw(true);
    }
    
    
    // *Answers_10* updates
    if (t >= 2 && Answers_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_10.tStart = t;  // (not accounting for frame time here)
      Answers_10.frameNStart = frameN;  // exact frame index
      
      Answers_10.setAutoDraw(true);
    }
    
    
    // *Key_10* updates
    if (t >= 2.0 && Key_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_10.tStart = t;  // (not accounting for frame time here)
      Key_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_10.clearEvents(); });
    }
    
    if (Key_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_10.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_10_allKeys = _Key_10_allKeys.concat(theseKeys);
      if (_Key_10_allKeys.length > 0) {
        Key_10.keys = _Key_10_allKeys[_Key_10_allKeys.length - 1].name;  // just the last key pressed
        Key_10.rt = _Key_10_allKeys[_Key_10_allKeys.length - 1].rt;
        Key_10.duration = _Key_10_allKeys[_Key_10_allKeys.length - 1].duration;
        // was this correct?
        if (Key_10.keys == '1') {
            Key_10.corr = 1;
        } else {
            Key_10.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item10' ---
    for (const thisComponent of Item10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item10.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_10.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_10.corr = 1;  // correct non-response
      } else {
         Key_10.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_10.corr, level);
    }
    psychoJS.experiment.addData('Key_10.keys', Key_10.keys);
    psychoJS.experiment.addData('Key_10.corr', Key_10.corr);
    if (typeof Key_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_10.rt', Key_10.rt);
        psychoJS.experiment.addData('Key_10.duration', Key_10.duration);
        routineTimer.reset();
        }
    
    Key_10.stop();
    // the Routine "Item10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_11_allKeys;
var Item11Components;
function Item11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item11' ---
    t = 0;
    Item11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item11.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_11
    var time_left = 42
    if (!countdown_started){
        Item11Clock.reset()
        countdown_started = true
    }
    Key_11.keys = undefined;
    Key_11.rt = undefined;
    _Key_11_allKeys = [];
    // keep track of which components have finished
    Item11Components = [];
    Item11Components.push(timer_text_11);
    Item11Components.push(Question_11);
    Item11Components.push(Answers_11);
    Item11Components.push(Key_11);
    
    for (const thisComponent of Item11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item11' ---
    // get current time
    t = Item11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_11
    time_left = Math.ceil(42 - Item11Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_11.setText(`${time_left}`, false);
    }
    
    // *timer_text_11* updates
    if (t >= 32 && timer_text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_11.tStart = t;  // (not accounting for frame time here)
      timer_text_11.frameNStart = frameN;  // exact frame index
      
      timer_text_11.setAutoDraw(true);
    }
    
    
    // *Question_11* updates
    if (t >= 2 && Question_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_11.tStart = t;  // (not accounting for frame time here)
      Question_11.frameNStart = frameN;  // exact frame index
      
      Question_11.setAutoDraw(true);
    }
    
    
    // *Answers_11* updates
    if (t >= 2 && Answers_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_11.tStart = t;  // (not accounting for frame time here)
      Answers_11.frameNStart = frameN;  // exact frame index
      
      Answers_11.setAutoDraw(true);
    }
    
    
    // *Key_11* updates
    if (t >= 2.0 && Key_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_11.tStart = t;  // (not accounting for frame time here)
      Key_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_11.clearEvents(); });
    }
    
    if (Key_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_11.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_11_allKeys = _Key_11_allKeys.concat(theseKeys);
      if (_Key_11_allKeys.length > 0) {
        Key_11.keys = _Key_11_allKeys[_Key_11_allKeys.length - 1].name;  // just the last key pressed
        Key_11.rt = _Key_11_allKeys[_Key_11_allKeys.length - 1].rt;
        Key_11.duration = _Key_11_allKeys[_Key_11_allKeys.length - 1].duration;
        // was this correct?
        if (Key_11.keys == '1') {
            Key_11.corr = 1;
        } else {
            Key_11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item11' ---
    for (const thisComponent of Item11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item11.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_11.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_11.corr = 1;  // correct non-response
      } else {
         Key_11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_11.corr, level);
    }
    psychoJS.experiment.addData('Key_11.keys', Key_11.keys);
    psychoJS.experiment.addData('Key_11.corr', Key_11.corr);
    if (typeof Key_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_11.rt', Key_11.rt);
        psychoJS.experiment.addData('Key_11.duration', Key_11.duration);
        routineTimer.reset();
        }
    
    Key_11.stop();
    // the Routine "Item11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_12_allKeys;
var Item12Components;
function Item12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item12' ---
    t = 0;
    Item12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item12.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_12
    var time_left = 42
    if (!countdown_started){
        Item12Clock.reset()
        countdown_started = true
    }
    Key_12.keys = undefined;
    Key_12.rt = undefined;
    _Key_12_allKeys = [];
    // keep track of which components have finished
    Item12Components = [];
    Item12Components.push(timer_text_12);
    Item12Components.push(Question_12);
    Item12Components.push(Answers_12);
    Item12Components.push(Key_12);
    
    for (const thisComponent of Item12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item12' ---
    // get current time
    t = Item12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_12
    time_left = Math.ceil(42 - Item12Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    if (timer_text_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_12.setText(`${time_left}`, false);
    }
    
    // *timer_text_12* updates
    if (t >= 32 && timer_text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_12.tStart = t;  // (not accounting for frame time here)
      timer_text_12.frameNStart = frameN;  // exact frame index
      
      timer_text_12.setAutoDraw(true);
    }
    
    
    // *Question_12* updates
    if (t >= 2 && Question_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_12.tStart = t;  // (not accounting for frame time here)
      Question_12.frameNStart = frameN;  // exact frame index
      
      Question_12.setAutoDraw(true);
    }
    
    
    // *Answers_12* updates
    if (t >= 2 && Answers_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_12.tStart = t;  // (not accounting for frame time here)
      Answers_12.frameNStart = frameN;  // exact frame index
      
      Answers_12.setAutoDraw(true);
    }
    
    
    // *Key_12* updates
    if (t >= 2.0 && Key_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_12.tStart = t;  // (not accounting for frame time here)
      Key_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_12.clearEvents(); });
    }
    
    if (Key_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_12.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_12_allKeys = _Key_12_allKeys.concat(theseKeys);
      if (_Key_12_allKeys.length > 0) {
        Key_12.keys = _Key_12_allKeys[_Key_12_allKeys.length - 1].name;  // just the last key pressed
        Key_12.rt = _Key_12_allKeys[_Key_12_allKeys.length - 1].rt;
        Key_12.duration = _Key_12_allKeys[_Key_12_allKeys.length - 1].duration;
        // was this correct?
        if (Key_12.keys == '2') {
            Key_12.corr = 1;
        } else {
            Key_12.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item12' ---
    for (const thisComponent of Item12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item12.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_12.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_12.corr = 1;  // correct non-response
      } else {
         Key_12.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_12.corr, level);
    }
    psychoJS.experiment.addData('Key_12.keys', Key_12.keys);
    psychoJS.experiment.addData('Key_12.corr', Key_12.corr);
    if (typeof Key_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_12.rt', Key_12.rt);
        psychoJS.experiment.addData('Key_12.duration', Key_12.duration);
        routineTimer.reset();
        }
    
    Key_12.stop();
    // the Routine "Item12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Pause_1_allKeys;
var Pause1Components;
function Pause1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause1' ---
    t = 0;
    Pause1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause1.started', globalClock.getTime());
    key_Pause_1.keys = undefined;
    key_Pause_1.rt = undefined;
    _key_Pause_1_allKeys = [];
    // keep track of which components have finished
    Pause1Components = [];
    Pause1Components.push(text_Pause_1);
    Pause1Components.push(key_Pause_1);
    Pause1Components.push(image_Pause_1);
    Pause1Components.push(text_continueExp_1);
    
    for (const thisComponent of Pause1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Pause1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause1' ---
    // get current time
    t = Pause1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Pause_1* updates
    if (t >= 0.0 && text_Pause_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Pause_1.tStart = t;  // (not accounting for frame time here)
      text_Pause_1.frameNStart = frameN;  // exact frame index
      
      text_Pause_1.setAutoDraw(true);
    }
    
    
    // *key_Pause_1* updates
    if (t >= 0.0 && key_Pause_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Pause_1.tStart = t;  // (not accounting for frame time here)
      key_Pause_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Pause_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_1.clearEvents(); });
    }
    
    if (key_Pause_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Pause_1.getKeys({keyList: [], waitRelease: false});
      _key_Pause_1_allKeys = _key_Pause_1_allKeys.concat(theseKeys);
      if (_key_Pause_1_allKeys.length > 0) {
        key_Pause_1.keys = _key_Pause_1_allKeys[_key_Pause_1_allKeys.length - 1].name;  // just the last key pressed
        key_Pause_1.rt = _key_Pause_1_allKeys[_key_Pause_1_allKeys.length - 1].rt;
        key_Pause_1.duration = _key_Pause_1_allKeys[_key_Pause_1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_Pause_1* updates
    if (t >= 0.0 && image_Pause_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_Pause_1.tStart = t;  // (not accounting for frame time here)
      image_Pause_1.frameNStart = frameN;  // exact frame index
      
      image_Pause_1.setAutoDraw(true);
    }
    
    
    // *text_continueExp_1* updates
    if (t >= 0.0 && text_continueExp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continueExp_1.tStart = t;  // (not accounting for frame time here)
      text_continueExp_1.frameNStart = frameN;  // exact frame index
      
      text_continueExp_1.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pause1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause1' ---
    for (const thisComponent of Pause1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Pause1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Pause_1.corr, level);
    }
    psychoJS.experiment.addData('key_Pause_1.keys', key_Pause_1.keys);
    if (typeof key_Pause_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Pause_1.rt', key_Pause_1.rt);
        psychoJS.experiment.addData('key_Pause_1.duration', key_Pause_1.duration);
        routineTimer.reset();
        }
    
    key_Pause_1.stop();
    // the Routine "Pause1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_13_allKeys;
var Item13Components;
function Item13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item13' ---
    t = 0;
    Item13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item13.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_13
    var time_left = 42
    if (!countdown_started){
        Item13Clock.reset()
        countdown_started = true
    }
    Key_13.keys = undefined;
    Key_13.rt = undefined;
    _Key_13_allKeys = [];
    // keep track of which components have finished
    Item13Components = [];
    Item13Components.push(image_13);
    Item13Components.push(timer_text_13);
    Item13Components.push(Question_13);
    Item13Components.push(Answers_13);
    Item13Components.push(Key_13);
    
    for (const thisComponent of Item13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item13' ---
    // get current time
    t = Item13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_13
    time_left = Math.ceil(42 - Item13Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_13* updates
    if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index
      
      image_13.setAutoDraw(true);
    }
    
    
    if (timer_text_13.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_13.setText(`${time_left}`, false);
    }
    
    // *timer_text_13* updates
    if (t >= 32 && timer_text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_13.tStart = t;  // (not accounting for frame time here)
      timer_text_13.frameNStart = frameN;  // exact frame index
      
      timer_text_13.setAutoDraw(true);
    }
    
    
    // *Question_13* updates
    if (t >= 2 && Question_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_13.tStart = t;  // (not accounting for frame time here)
      Question_13.frameNStart = frameN;  // exact frame index
      
      Question_13.setAutoDraw(true);
    }
    
    
    // *Answers_13* updates
    if (t >= 2 && Answers_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_13.tStart = t;  // (not accounting for frame time here)
      Answers_13.frameNStart = frameN;  // exact frame index
      
      Answers_13.setAutoDraw(true);
    }
    
    
    // *Key_13* updates
    if (t >= 2.0 && Key_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_13.tStart = t;  // (not accounting for frame time here)
      Key_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_13.clearEvents(); });
    }
    
    if (Key_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_13.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_13_allKeys = _Key_13_allKeys.concat(theseKeys);
      if (_Key_13_allKeys.length > 0) {
        Key_13.keys = _Key_13_allKeys[_Key_13_allKeys.length - 1].name;  // just the last key pressed
        Key_13.rt = _Key_13_allKeys[_Key_13_allKeys.length - 1].rt;
        Key_13.duration = _Key_13_allKeys[_Key_13_allKeys.length - 1].duration;
        // was this correct?
        if (Key_13.keys == '2') {
            Key_13.corr = 1;
        } else {
            Key_13.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item13' ---
    for (const thisComponent of Item13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item13.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_13.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_13.corr = 1;  // correct non-response
      } else {
         Key_13.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_13.corr, level);
    }
    psychoJS.experiment.addData('Key_13.keys', Key_13.keys);
    psychoJS.experiment.addData('Key_13.corr', Key_13.corr);
    if (typeof Key_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_13.rt', Key_13.rt);
        psychoJS.experiment.addData('Key_13.duration', Key_13.duration);
        routineTimer.reset();
        }
    
    Key_13.stop();
    // the Routine "Item13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_14_allKeys;
var Item14Components;
function Item14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item14' ---
    t = 0;
    Item14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item14.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_14
    var time_left = 42
    if (!countdown_started){
        Item14Clock.reset()
        countdown_started = true
    }
    Key_14.keys = undefined;
    Key_14.rt = undefined;
    _Key_14_allKeys = [];
    // keep track of which components have finished
    Item14Components = [];
    Item14Components.push(image_14);
    Item14Components.push(timer_text_14);
    Item14Components.push(Question_14);
    Item14Components.push(Answers_14);
    Item14Components.push(Key_14);
    
    for (const thisComponent of Item14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item14' ---
    // get current time
    t = Item14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_14
    time_left = Math.ceil(42 - Item14Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index
      
      image_14.setAutoDraw(true);
    }
    
    
    if (timer_text_14.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_14.setText(`${time_left}`, false);
    }
    
    // *timer_text_14* updates
    if (t >= 32 && timer_text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_14.tStart = t;  // (not accounting for frame time here)
      timer_text_14.frameNStart = frameN;  // exact frame index
      
      timer_text_14.setAutoDraw(true);
    }
    
    
    // *Question_14* updates
    if (t >= 2 && Question_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_14.tStart = t;  // (not accounting for frame time here)
      Question_14.frameNStart = frameN;  // exact frame index
      
      Question_14.setAutoDraw(true);
    }
    
    
    // *Answers_14* updates
    if (t >= 2 && Answers_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_14.tStart = t;  // (not accounting for frame time here)
      Answers_14.frameNStart = frameN;  // exact frame index
      
      Answers_14.setAutoDraw(true);
    }
    
    
    // *Key_14* updates
    if (t >= 2.0 && Key_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_14.tStart = t;  // (not accounting for frame time here)
      Key_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_14.clearEvents(); });
    }
    
    if (Key_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_14.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_14_allKeys = _Key_14_allKeys.concat(theseKeys);
      if (_Key_14_allKeys.length > 0) {
        Key_14.keys = _Key_14_allKeys[_Key_14_allKeys.length - 1].name;  // just the last key pressed
        Key_14.rt = _Key_14_allKeys[_Key_14_allKeys.length - 1].rt;
        Key_14.duration = _Key_14_allKeys[_Key_14_allKeys.length - 1].duration;
        // was this correct?
        if (Key_14.keys == '1') {
            Key_14.corr = 1;
        } else {
            Key_14.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item14' ---
    for (const thisComponent of Item14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item14.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_14.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_14.corr = 1;  // correct non-response
      } else {
         Key_14.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_14.corr, level);
    }
    psychoJS.experiment.addData('Key_14.keys', Key_14.keys);
    psychoJS.experiment.addData('Key_14.corr', Key_14.corr);
    if (typeof Key_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_14.rt', Key_14.rt);
        psychoJS.experiment.addData('Key_14.duration', Key_14.duration);
        routineTimer.reset();
        }
    
    Key_14.stop();
    // the Routine "Item14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_15_allKeys;
var Item15Components;
function Item15RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item15' ---
    t = 0;
    Item15Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item15.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_15
    var time_left = 42
    if (!countdown_started){
        Item15Clock.reset()
        countdown_started = true
    }
    Key_15.keys = undefined;
    Key_15.rt = undefined;
    _Key_15_allKeys = [];
    // keep track of which components have finished
    Item15Components = [];
    Item15Components.push(image_15);
    Item15Components.push(timer_text_15);
    Item15Components.push(Question_15);
    Item15Components.push(Answers_15);
    Item15Components.push(Key_15);
    
    for (const thisComponent of Item15Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item15RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item15' ---
    // get current time
    t = Item15Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_15
    time_left = Math.ceil(42 - Item15Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index
      
      image_15.setAutoDraw(true);
    }
    
    
    if (timer_text_15.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_15.setText(`${time_left}`, false);
    }
    
    // *timer_text_15* updates
    if (t >= 32 && timer_text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_15.tStart = t;  // (not accounting for frame time here)
      timer_text_15.frameNStart = frameN;  // exact frame index
      
      timer_text_15.setAutoDraw(true);
    }
    
    
    // *Question_15* updates
    if (t >= 2 && Question_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_15.tStart = t;  // (not accounting for frame time here)
      Question_15.frameNStart = frameN;  // exact frame index
      
      Question_15.setAutoDraw(true);
    }
    
    
    // *Answers_15* updates
    if (t >= 2 && Answers_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_15.tStart = t;  // (not accounting for frame time here)
      Answers_15.frameNStart = frameN;  // exact frame index
      
      Answers_15.setAutoDraw(true);
    }
    
    
    // *Key_15* updates
    if (t >= 2.0 && Key_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_15.tStart = t;  // (not accounting for frame time here)
      Key_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_15.clearEvents(); });
    }
    
    if (Key_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_15.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_15_allKeys = _Key_15_allKeys.concat(theseKeys);
      if (_Key_15_allKeys.length > 0) {
        Key_15.keys = _Key_15_allKeys[_Key_15_allKeys.length - 1].name;  // just the last key pressed
        Key_15.rt = _Key_15_allKeys[_Key_15_allKeys.length - 1].rt;
        Key_15.duration = _Key_15_allKeys[_Key_15_allKeys.length - 1].duration;
        // was this correct?
        if (Key_15.keys == '2') {
            Key_15.corr = 1;
        } else {
            Key_15.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item15Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item15RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item15' ---
    for (const thisComponent of Item15Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item15.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_15.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_15.corr = 1;  // correct non-response
      } else {
         Key_15.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_15.corr, level);
    }
    psychoJS.experiment.addData('Key_15.keys', Key_15.keys);
    psychoJS.experiment.addData('Key_15.corr', Key_15.corr);
    if (typeof Key_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_15.rt', Key_15.rt);
        psychoJS.experiment.addData('Key_15.duration', Key_15.duration);
        routineTimer.reset();
        }
    
    Key_15.stop();
    // the Routine "Item15" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_16_allKeys;
var Item16Components;
function Item16RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item16' ---
    t = 0;
    Item16Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item16.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_16
    var time_left = 42
    if (!countdown_started){
        Item16Clock.reset()
        countdown_started = true
    }
    Key_16.keys = undefined;
    Key_16.rt = undefined;
    _Key_16_allKeys = [];
    // keep track of which components have finished
    Item16Components = [];
    Item16Components.push(image_16);
    Item16Components.push(timer_text_16);
    Item16Components.push(Question_16);
    Item16Components.push(Answers_16);
    Item16Components.push(Key_16);
    
    for (const thisComponent of Item16Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item16RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item16' ---
    // get current time
    t = Item16Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_16
    time_left = Math.ceil(42 - Item16Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_16* updates
    if (t >= 0.0 && image_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_16.tStart = t;  // (not accounting for frame time here)
      image_16.frameNStart = frameN;  // exact frame index
      
      image_16.setAutoDraw(true);
    }
    
    
    if (timer_text_16.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_16.setText(`${time_left}`, false);
    }
    
    // *timer_text_16* updates
    if (t >= 32 && timer_text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_16.tStart = t;  // (not accounting for frame time here)
      timer_text_16.frameNStart = frameN;  // exact frame index
      
      timer_text_16.setAutoDraw(true);
    }
    
    
    // *Question_16* updates
    if (t >= 2 && Question_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_16.tStart = t;  // (not accounting for frame time here)
      Question_16.frameNStart = frameN;  // exact frame index
      
      Question_16.setAutoDraw(true);
    }
    
    
    // *Answers_16* updates
    if (t >= 2 && Answers_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_16.tStart = t;  // (not accounting for frame time here)
      Answers_16.frameNStart = frameN;  // exact frame index
      
      Answers_16.setAutoDraw(true);
    }
    
    
    // *Key_16* updates
    if (t >= 2.0 && Key_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_16.tStart = t;  // (not accounting for frame time here)
      Key_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_16.clearEvents(); });
    }
    
    if (Key_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_16.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_16_allKeys = _Key_16_allKeys.concat(theseKeys);
      if (_Key_16_allKeys.length > 0) {
        Key_16.keys = _Key_16_allKeys[_Key_16_allKeys.length - 1].name;  // just the last key pressed
        Key_16.rt = _Key_16_allKeys[_Key_16_allKeys.length - 1].rt;
        Key_16.duration = _Key_16_allKeys[_Key_16_allKeys.length - 1].duration;
        // was this correct?
        if (Key_16.keys == '4') {
            Key_16.corr = 1;
        } else {
            Key_16.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item16Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item16RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item16' ---
    for (const thisComponent of Item16Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item16.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_16.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_16.corr = 1;  // correct non-response
      } else {
         Key_16.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_16.corr, level);
    }
    psychoJS.experiment.addData('Key_16.keys', Key_16.keys);
    psychoJS.experiment.addData('Key_16.corr', Key_16.corr);
    if (typeof Key_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_16.rt', Key_16.rt);
        psychoJS.experiment.addData('Key_16.duration', Key_16.duration);
        routineTimer.reset();
        }
    
    Key_16.stop();
    // the Routine "Item16" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_17_allKeys;
var Item17Components;
function Item17RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item17' ---
    t = 0;
    Item17Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item17.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_17
    var time_left = 42
    if (!countdown_started){
        Item17Clock.reset()
        countdown_started = true
    }
    Key_17.keys = undefined;
    Key_17.rt = undefined;
    _Key_17_allKeys = [];
    // keep track of which components have finished
    Item17Components = [];
    Item17Components.push(image_17);
    Item17Components.push(timer_text_17);
    Item17Components.push(Question_17);
    Item17Components.push(Answers_17);
    Item17Components.push(Key_17);
    
    for (const thisComponent of Item17Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item17RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item17' ---
    // get current time
    t = Item17Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_17
    time_left = Math.ceil(42 - Item17Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_17* updates
    if (t >= 0.0 && image_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_17.tStart = t;  // (not accounting for frame time here)
      image_17.frameNStart = frameN;  // exact frame index
      
      image_17.setAutoDraw(true);
    }
    
    
    if (timer_text_17.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_17.setText(`${time_left}`, false);
    }
    
    // *timer_text_17* updates
    if (t >= 32 && timer_text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_17.tStart = t;  // (not accounting for frame time here)
      timer_text_17.frameNStart = frameN;  // exact frame index
      
      timer_text_17.setAutoDraw(true);
    }
    
    
    // *Question_17* updates
    if (t >= 2 && Question_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_17.tStart = t;  // (not accounting for frame time here)
      Question_17.frameNStart = frameN;  // exact frame index
      
      Question_17.setAutoDraw(true);
    }
    
    
    // *Answers_17* updates
    if (t >= 2 && Answers_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_17.tStart = t;  // (not accounting for frame time here)
      Answers_17.frameNStart = frameN;  // exact frame index
      
      Answers_17.setAutoDraw(true);
    }
    
    
    // *Key_17* updates
    if (t >= 2.0 && Key_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_17.tStart = t;  // (not accounting for frame time here)
      Key_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_17.clearEvents(); });
    }
    
    if (Key_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_17.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_17_allKeys = _Key_17_allKeys.concat(theseKeys);
      if (_Key_17_allKeys.length > 0) {
        Key_17.keys = _Key_17_allKeys[_Key_17_allKeys.length - 1].name;  // just the last key pressed
        Key_17.rt = _Key_17_allKeys[_Key_17_allKeys.length - 1].rt;
        Key_17.duration = _Key_17_allKeys[_Key_17_allKeys.length - 1].duration;
        // was this correct?
        if (Key_17.keys == '2') {
            Key_17.corr = 1;
        } else {
            Key_17.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item17Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item17RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item17' ---
    for (const thisComponent of Item17Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item17.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_17.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_17.corr = 1;  // correct non-response
      } else {
         Key_17.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_17.corr, level);
    }
    psychoJS.experiment.addData('Key_17.keys', Key_17.keys);
    psychoJS.experiment.addData('Key_17.corr', Key_17.corr);
    if (typeof Key_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_17.rt', Key_17.rt);
        psychoJS.experiment.addData('Key_17.duration', Key_17.duration);
        routineTimer.reset();
        }
    
    Key_17.stop();
    // the Routine "Item17" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_18_allKeys;
var Item18Components;
function Item18RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item18' ---
    t = 0;
    Item18Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item18.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_18
    var time_left = 42
    if (!countdown_started){
        Item18Clock.reset()
        countdown_started = true
    }
    Key_18.keys = undefined;
    Key_18.rt = undefined;
    _Key_18_allKeys = [];
    // keep track of which components have finished
    Item18Components = [];
    Item18Components.push(image_18);
    Item18Components.push(timer_text_18);
    Item18Components.push(Answers_18);
    Item18Components.push(Key_18);
    Item18Components.push(Question_image_2);
    
    for (const thisComponent of Item18Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item18RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item18' ---
    // get current time
    t = Item18Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_18
    time_left = Math.ceil(42 - Item18Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_18* updates
    if (t >= 0.0 && image_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_18.tStart = t;  // (not accounting for frame time here)
      image_18.frameNStart = frameN;  // exact frame index
      
      image_18.setAutoDraw(true);
    }
    
    
    if (timer_text_18.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_18.setText(`${time_left}`, false);
    }
    
    // *timer_text_18* updates
    if (t >= 32 && timer_text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_18.tStart = t;  // (not accounting for frame time here)
      timer_text_18.frameNStart = frameN;  // exact frame index
      
      timer_text_18.setAutoDraw(true);
    }
    
    
    // *Answers_18* updates
    if (t >= 2 && Answers_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_18.tStart = t;  // (not accounting for frame time here)
      Answers_18.frameNStart = frameN;  // exact frame index
      
      Answers_18.setAutoDraw(true);
    }
    
    
    // *Key_18* updates
    if (t >= 2.0 && Key_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_18.tStart = t;  // (not accounting for frame time here)
      Key_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_18.clearEvents(); });
    }
    
    if (Key_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_18.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_18_allKeys = _Key_18_allKeys.concat(theseKeys);
      if (_Key_18_allKeys.length > 0) {
        Key_18.keys = _Key_18_allKeys[_Key_18_allKeys.length - 1].name;  // just the last key pressed
        Key_18.rt = _Key_18_allKeys[_Key_18_allKeys.length - 1].rt;
        Key_18.duration = _Key_18_allKeys[_Key_18_allKeys.length - 1].duration;
        // was this correct?
        if (Key_18.keys == '1') {
            Key_18.corr = 1;
        } else {
            Key_18.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Question_image_2* updates
    if (t >= 2 && Question_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_image_2.tStart = t;  // (not accounting for frame time here)
      Question_image_2.frameNStart = frameN;  // exact frame index
      
      Question_image_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item18Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item18RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item18' ---
    for (const thisComponent of Item18Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item18.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_18.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_18.corr = 1;  // correct non-response
      } else {
         Key_18.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_18.corr, level);
    }
    psychoJS.experiment.addData('Key_18.keys', Key_18.keys);
    psychoJS.experiment.addData('Key_18.corr', Key_18.corr);
    if (typeof Key_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_18.rt', Key_18.rt);
        psychoJS.experiment.addData('Key_18.duration', Key_18.duration);
        routineTimer.reset();
        }
    
    Key_18.stop();
    // the Routine "Item18" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_19_allKeys;
var Item19Components;
function Item19RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item19' ---
    t = 0;
    Item19Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item19.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_19
    var time_left = 42
    if (!countdown_started){
        Item19Clock.reset()
        countdown_started = true
    }
    Key_19.keys = undefined;
    Key_19.rt = undefined;
    _Key_19_allKeys = [];
    // keep track of which components have finished
    Item19Components = [];
    Item19Components.push(image_19);
    Item19Components.push(timer_text_19);
    Item19Components.push(Question_19);
    Item19Components.push(Answers_19);
    Item19Components.push(Key_19);
    
    for (const thisComponent of Item19Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item19RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item19' ---
    // get current time
    t = Item19Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_19
    time_left = Math.ceil(42 - Item19Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_19* updates
    if (t >= 0.0 && image_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_19.tStart = t;  // (not accounting for frame time here)
      image_19.frameNStart = frameN;  // exact frame index
      
      image_19.setAutoDraw(true);
    }
    
    
    if (timer_text_19.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_19.setText(`${time_left}`, false);
    }
    
    // *timer_text_19* updates
    if (t >= 32 && timer_text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_19.tStart = t;  // (not accounting for frame time here)
      timer_text_19.frameNStart = frameN;  // exact frame index
      
      timer_text_19.setAutoDraw(true);
    }
    
    
    // *Question_19* updates
    if (t >= 2 && Question_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_19.tStart = t;  // (not accounting for frame time here)
      Question_19.frameNStart = frameN;  // exact frame index
      
      Question_19.setAutoDraw(true);
    }
    
    
    // *Answers_19* updates
    if (t >= 2 && Answers_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_19.tStart = t;  // (not accounting for frame time here)
      Answers_19.frameNStart = frameN;  // exact frame index
      
      Answers_19.setAutoDraw(true);
    }
    
    
    // *Key_19* updates
    if (t >= 2.0 && Key_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_19.tStart = t;  // (not accounting for frame time here)
      Key_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_19.clearEvents(); });
    }
    
    if (Key_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_19.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_19_allKeys = _Key_19_allKeys.concat(theseKeys);
      if (_Key_19_allKeys.length > 0) {
        Key_19.keys = _Key_19_allKeys[_Key_19_allKeys.length - 1].name;  // just the last key pressed
        Key_19.rt = _Key_19_allKeys[_Key_19_allKeys.length - 1].rt;
        Key_19.duration = _Key_19_allKeys[_Key_19_allKeys.length - 1].duration;
        // was this correct?
        if (Key_19.keys == '2') {
            Key_19.corr = 1;
        } else {
            Key_19.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item19Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item19RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item19' ---
    for (const thisComponent of Item19Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item19.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_19.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_19.corr = 1;  // correct non-response
      } else {
         Key_19.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_19.corr, level);
    }
    psychoJS.experiment.addData('Key_19.keys', Key_19.keys);
    psychoJS.experiment.addData('Key_19.corr', Key_19.corr);
    if (typeof Key_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_19.rt', Key_19.rt);
        psychoJS.experiment.addData('Key_19.duration', Key_19.duration);
        routineTimer.reset();
        }
    
    Key_19.stop();
    // the Routine "Item19" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_20_allKeys;
var Item20Components;
function Item20RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item20' ---
    t = 0;
    Item20Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item20.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_20
    var time_left = 42
    if (!countdown_started){
        Item20Clock.reset()
        countdown_started = true
    }
    Key_20.keys = undefined;
    Key_20.rt = undefined;
    _Key_20_allKeys = [];
    // keep track of which components have finished
    Item20Components = [];
    Item20Components.push(image_20);
    Item20Components.push(timer_text_20);
    Item20Components.push(Question_20);
    Item20Components.push(Answers_20);
    Item20Components.push(Key_20);
    
    for (const thisComponent of Item20Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item20RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item20' ---
    // get current time
    t = Item20Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_20
    time_left = Math.ceil(42 - Item20Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_20* updates
    if (t >= 0.0 && image_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_20.tStart = t;  // (not accounting for frame time here)
      image_20.frameNStart = frameN;  // exact frame index
      
      image_20.setAutoDraw(true);
    }
    
    
    if (timer_text_20.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_20.setText(`${time_left}`, false);
    }
    
    // *timer_text_20* updates
    if (t >= 32 && timer_text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_20.tStart = t;  // (not accounting for frame time here)
      timer_text_20.frameNStart = frameN;  // exact frame index
      
      timer_text_20.setAutoDraw(true);
    }
    
    
    // *Question_20* updates
    if (t >= 2 && Question_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_20.tStart = t;  // (not accounting for frame time here)
      Question_20.frameNStart = frameN;  // exact frame index
      
      Question_20.setAutoDraw(true);
    }
    
    
    // *Answers_20* updates
    if (t >= 2 && Answers_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_20.tStart = t;  // (not accounting for frame time here)
      Answers_20.frameNStart = frameN;  // exact frame index
      
      Answers_20.setAutoDraw(true);
    }
    
    
    // *Key_20* updates
    if (t >= 2.0 && Key_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_20.tStart = t;  // (not accounting for frame time here)
      Key_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_20.clearEvents(); });
    }
    
    if (Key_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_20.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_20_allKeys = _Key_20_allKeys.concat(theseKeys);
      if (_Key_20_allKeys.length > 0) {
        Key_20.keys = _Key_20_allKeys[_Key_20_allKeys.length - 1].name;  // just the last key pressed
        Key_20.rt = _Key_20_allKeys[_Key_20_allKeys.length - 1].rt;
        Key_20.duration = _Key_20_allKeys[_Key_20_allKeys.length - 1].duration;
        // was this correct?
        if (Key_20.keys == '4') {
            Key_20.corr = 1;
        } else {
            Key_20.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item20Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item20RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item20' ---
    for (const thisComponent of Item20Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item20.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_20.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_20.corr = 1;  // correct non-response
      } else {
         Key_20.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_20.corr, level);
    }
    psychoJS.experiment.addData('Key_20.keys', Key_20.keys);
    psychoJS.experiment.addData('Key_20.corr', Key_20.corr);
    if (typeof Key_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_20.rt', Key_20.rt);
        psychoJS.experiment.addData('Key_20.duration', Key_20.duration);
        routineTimer.reset();
        }
    
    Key_20.stop();
    // the Routine "Item20" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_21_allKeys;
var Item21Components;
function Item21RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item21' ---
    t = 0;
    Item21Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item21.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_21
    var time_left = 42
    if (!countdown_started){
        Item21Clock.reset()
        countdown_started = true
    }
    Key_21.keys = undefined;
    Key_21.rt = undefined;
    _Key_21_allKeys = [];
    // keep track of which components have finished
    Item21Components = [];
    Item21Components.push(image_21);
    Item21Components.push(timer_text_21);
    Item21Components.push(Question_21);
    Item21Components.push(Answers_21);
    Item21Components.push(Key_21);
    
    for (const thisComponent of Item21Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item21RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item21' ---
    // get current time
    t = Item21Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_21
    time_left = Math.ceil(42 - Item21Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_21* updates
    if (t >= 0.0 && image_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_21.tStart = t;  // (not accounting for frame time here)
      image_21.frameNStart = frameN;  // exact frame index
      
      image_21.setAutoDraw(true);
    }
    
    
    if (timer_text_21.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_21.setText(`${time_left}`, false);
    }
    
    // *timer_text_21* updates
    if (t >= 32 && timer_text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_21.tStart = t;  // (not accounting for frame time here)
      timer_text_21.frameNStart = frameN;  // exact frame index
      
      timer_text_21.setAutoDraw(true);
    }
    
    
    // *Question_21* updates
    if (t >= 2 && Question_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_21.tStart = t;  // (not accounting for frame time here)
      Question_21.frameNStart = frameN;  // exact frame index
      
      Question_21.setAutoDraw(true);
    }
    
    
    // *Answers_21* updates
    if (t >= 2 && Answers_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_21.tStart = t;  // (not accounting for frame time here)
      Answers_21.frameNStart = frameN;  // exact frame index
      
      Answers_21.setAutoDraw(true);
    }
    
    
    // *Key_21* updates
    if (t >= 2.0 && Key_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_21.tStart = t;  // (not accounting for frame time here)
      Key_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_21.clearEvents(); });
    }
    
    if (Key_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_21.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_21_allKeys = _Key_21_allKeys.concat(theseKeys);
      if (_Key_21_allKeys.length > 0) {
        Key_21.keys = _Key_21_allKeys[_Key_21_allKeys.length - 1].name;  // just the last key pressed
        Key_21.rt = _Key_21_allKeys[_Key_21_allKeys.length - 1].rt;
        Key_21.duration = _Key_21_allKeys[_Key_21_allKeys.length - 1].duration;
        // was this correct?
        if (Key_21.keys == '3') {
            Key_21.corr = 1;
        } else {
            Key_21.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item21Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item21RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item21' ---
    for (const thisComponent of Item21Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item21.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_21.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_21.corr = 1;  // correct non-response
      } else {
         Key_21.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_21.corr, level);
    }
    psychoJS.experiment.addData('Key_21.keys', Key_21.keys);
    psychoJS.experiment.addData('Key_21.corr', Key_21.corr);
    if (typeof Key_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_21.rt', Key_21.rt);
        psychoJS.experiment.addData('Key_21.duration', Key_21.duration);
        routineTimer.reset();
        }
    
    Key_21.stop();
    // the Routine "Item21" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_22_allKeys;
var Item22Components;
function Item22RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item22' ---
    t = 0;
    Item22Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item22.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_22
    var time_left = 42
    if (!countdown_started){
        Item22Clock.reset()
        countdown_started = true
    }
    Key_22.keys = undefined;
    Key_22.rt = undefined;
    _Key_22_allKeys = [];
    // keep track of which components have finished
    Item22Components = [];
    Item22Components.push(image_22);
    Item22Components.push(timer_text_22);
    Item22Components.push(Question_22);
    Item22Components.push(Answers_22);
    Item22Components.push(Key_22);
    
    for (const thisComponent of Item22Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item22RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item22' ---
    // get current time
    t = Item22Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_22
    time_left = Math.ceil(42 - Item22Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_22* updates
    if (t >= 0.0 && image_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_22.tStart = t;  // (not accounting for frame time here)
      image_22.frameNStart = frameN;  // exact frame index
      
      image_22.setAutoDraw(true);
    }
    
    
    if (timer_text_22.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_22.setText(`${time_left}`, false);
    }
    
    // *timer_text_22* updates
    if (t >= 32 && timer_text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_22.tStart = t;  // (not accounting for frame time here)
      timer_text_22.frameNStart = frameN;  // exact frame index
      
      timer_text_22.setAutoDraw(true);
    }
    
    
    // *Question_22* updates
    if (t >= 2 && Question_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_22.tStart = t;  // (not accounting for frame time here)
      Question_22.frameNStart = frameN;  // exact frame index
      
      Question_22.setAutoDraw(true);
    }
    
    
    // *Answers_22* updates
    if (t >= 2 && Answers_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_22.tStart = t;  // (not accounting for frame time here)
      Answers_22.frameNStart = frameN;  // exact frame index
      
      Answers_22.setAutoDraw(true);
    }
    
    
    // *Key_22* updates
    if (t >= 2.0 && Key_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_22.tStart = t;  // (not accounting for frame time here)
      Key_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_22.clearEvents(); });
    }
    
    if (Key_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_22.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_22_allKeys = _Key_22_allKeys.concat(theseKeys);
      if (_Key_22_allKeys.length > 0) {
        Key_22.keys = _Key_22_allKeys[_Key_22_allKeys.length - 1].name;  // just the last key pressed
        Key_22.rt = _Key_22_allKeys[_Key_22_allKeys.length - 1].rt;
        Key_22.duration = _Key_22_allKeys[_Key_22_allKeys.length - 1].duration;
        // was this correct?
        if (Key_22.keys == '3') {
            Key_22.corr = 1;
        } else {
            Key_22.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item22Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item22RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item22' ---
    for (const thisComponent of Item22Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item22.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_22.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_22.corr = 1;  // correct non-response
      } else {
         Key_22.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_22.corr, level);
    }
    psychoJS.experiment.addData('Key_22.keys', Key_22.keys);
    psychoJS.experiment.addData('Key_22.corr', Key_22.corr);
    if (typeof Key_22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_22.rt', Key_22.rt);
        psychoJS.experiment.addData('Key_22.duration', Key_22.duration);
        routineTimer.reset();
        }
    
    Key_22.stop();
    // the Routine "Item22" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_23_allKeys;
var Item23Components;
function Item23RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item23' ---
    t = 0;
    Item23Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item23.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_23
    var time_left = 42
    if (!countdown_started){
        Item23Clock.reset()
        countdown_started = true
    }
    Key_23.keys = undefined;
    Key_23.rt = undefined;
    _Key_23_allKeys = [];
    // keep track of which components have finished
    Item23Components = [];
    Item23Components.push(image_23);
    Item23Components.push(timer_text_23);
    Item23Components.push(Question_23);
    Item23Components.push(Answers_23);
    Item23Components.push(Key_23);
    
    for (const thisComponent of Item23Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item23RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item23' ---
    // get current time
    t = Item23Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_23
    time_left = Math.ceil(42 - Item23Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_23* updates
    if (t >= 0.0 && image_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_23.tStart = t;  // (not accounting for frame time here)
      image_23.frameNStart = frameN;  // exact frame index
      
      image_23.setAutoDraw(true);
    }
    
    
    if (timer_text_23.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_23.setText(`${time_left}`, false);
    }
    
    // *timer_text_23* updates
    if (t >= 32 && timer_text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_23.tStart = t;  // (not accounting for frame time here)
      timer_text_23.frameNStart = frameN;  // exact frame index
      
      timer_text_23.setAutoDraw(true);
    }
    
    
    // *Question_23* updates
    if (t >= 2 && Question_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_23.tStart = t;  // (not accounting for frame time here)
      Question_23.frameNStart = frameN;  // exact frame index
      
      Question_23.setAutoDraw(true);
    }
    
    
    // *Answers_23* updates
    if (t >= 2 && Answers_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_23.tStart = t;  // (not accounting for frame time here)
      Answers_23.frameNStart = frameN;  // exact frame index
      
      Answers_23.setAutoDraw(true);
    }
    
    
    // *Key_23* updates
    if (t >= 2.0 && Key_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_23.tStart = t;  // (not accounting for frame time here)
      Key_23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_23.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_23.clearEvents(); });
    }
    
    if (Key_23.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_23.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_23_allKeys = _Key_23_allKeys.concat(theseKeys);
      if (_Key_23_allKeys.length > 0) {
        Key_23.keys = _Key_23_allKeys[_Key_23_allKeys.length - 1].name;  // just the last key pressed
        Key_23.rt = _Key_23_allKeys[_Key_23_allKeys.length - 1].rt;
        Key_23.duration = _Key_23_allKeys[_Key_23_allKeys.length - 1].duration;
        // was this correct?
        if (Key_23.keys == '1') {
            Key_23.corr = 1;
        } else {
            Key_23.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item23Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item23RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item23' ---
    for (const thisComponent of Item23Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item23.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_23.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_23.corr = 1;  // correct non-response
      } else {
         Key_23.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_23.corr, level);
    }
    psychoJS.experiment.addData('Key_23.keys', Key_23.keys);
    psychoJS.experiment.addData('Key_23.corr', Key_23.corr);
    if (typeof Key_23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_23.rt', Key_23.rt);
        psychoJS.experiment.addData('Key_23.duration', Key_23.duration);
        routineTimer.reset();
        }
    
    Key_23.stop();
    // the Routine "Item23" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_24_allKeys;
var Item24Components;
function Item24RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item24' ---
    t = 0;
    Item24Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item24.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_24
    var time_left = 42
    if (!countdown_started){
        Item24Clock.reset()
        countdown_started = true
    }
    Key_24.keys = undefined;
    Key_24.rt = undefined;
    _Key_24_allKeys = [];
    // keep track of which components have finished
    Item24Components = [];
    Item24Components.push(image_24);
    Item24Components.push(timer_text_24);
    Item24Components.push(Question_24);
    Item24Components.push(Answers_24);
    Item24Components.push(Key_24);
    
    for (const thisComponent of Item24Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item24RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item24' ---
    // get current time
    t = Item24Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_24
    time_left = Math.ceil(42 - Item24Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_24* updates
    if (t >= 0.0 && image_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_24.tStart = t;  // (not accounting for frame time here)
      image_24.frameNStart = frameN;  // exact frame index
      
      image_24.setAutoDraw(true);
    }
    
    
    if (timer_text_24.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_24.setText(`${time_left}`, false);
    }
    
    // *timer_text_24* updates
    if (t >= 32 && timer_text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_24.tStart = t;  // (not accounting for frame time here)
      timer_text_24.frameNStart = frameN;  // exact frame index
      
      timer_text_24.setAutoDraw(true);
    }
    
    
    // *Question_24* updates
    if (t >= 2 && Question_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_24.tStart = t;  // (not accounting for frame time here)
      Question_24.frameNStart = frameN;  // exact frame index
      
      Question_24.setAutoDraw(true);
    }
    
    
    // *Answers_24* updates
    if (t >= 2 && Answers_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_24.tStart = t;  // (not accounting for frame time here)
      Answers_24.frameNStart = frameN;  // exact frame index
      
      Answers_24.setAutoDraw(true);
    }
    
    
    // *Key_24* updates
    if (t >= 2.0 && Key_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_24.tStart = t;  // (not accounting for frame time here)
      Key_24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_24.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_24.clearEvents(); });
    }
    
    if (Key_24.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_24.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_24_allKeys = _Key_24_allKeys.concat(theseKeys);
      if (_Key_24_allKeys.length > 0) {
        Key_24.keys = _Key_24_allKeys[_Key_24_allKeys.length - 1].name;  // just the last key pressed
        Key_24.rt = _Key_24_allKeys[_Key_24_allKeys.length - 1].rt;
        Key_24.duration = _Key_24_allKeys[_Key_24_allKeys.length - 1].duration;
        // was this correct?
        if (Key_24.keys == '2') {
            Key_24.corr = 1;
        } else {
            Key_24.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item24Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item24RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item24' ---
    for (const thisComponent of Item24Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item24.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_24.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_24.corr = 1;  // correct non-response
      } else {
         Key_24.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_24.corr, level);
    }
    psychoJS.experiment.addData('Key_24.keys', Key_24.keys);
    psychoJS.experiment.addData('Key_24.corr', Key_24.corr);
    if (typeof Key_24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_24.rt', Key_24.rt);
        psychoJS.experiment.addData('Key_24.duration', Key_24.duration);
        routineTimer.reset();
        }
    
    Key_24.stop();
    // the Routine "Item24" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Pause_2_allKeys;
var Pause2Components;
function Pause2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause2' ---
    t = 0;
    Pause2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause2.started', globalClock.getTime());
    key_Pause_2.keys = undefined;
    key_Pause_2.rt = undefined;
    _key_Pause_2_allKeys = [];
    // keep track of which components have finished
    Pause2Components = [];
    Pause2Components.push(text_Pause_2);
    Pause2Components.push(key_Pause_2);
    Pause2Components.push(image_Pause_2);
    Pause2Components.push(text_continueExp_2);
    
    for (const thisComponent of Pause2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Pause2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause2' ---
    // get current time
    t = Pause2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Pause_2* updates
    if (t >= 0.0 && text_Pause_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Pause_2.tStart = t;  // (not accounting for frame time here)
      text_Pause_2.frameNStart = frameN;  // exact frame index
      
      text_Pause_2.setAutoDraw(true);
    }
    
    
    // *key_Pause_2* updates
    if (t >= 0.0 && key_Pause_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Pause_2.tStart = t;  // (not accounting for frame time here)
      key_Pause_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Pause_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_2.clearEvents(); });
    }
    
    if (key_Pause_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Pause_2.getKeys({keyList: [], waitRelease: false});
      _key_Pause_2_allKeys = _key_Pause_2_allKeys.concat(theseKeys);
      if (_key_Pause_2_allKeys.length > 0) {
        key_Pause_2.keys = _key_Pause_2_allKeys[_key_Pause_2_allKeys.length - 1].name;  // just the last key pressed
        key_Pause_2.rt = _key_Pause_2_allKeys[_key_Pause_2_allKeys.length - 1].rt;
        key_Pause_2.duration = _key_Pause_2_allKeys[_key_Pause_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_Pause_2* updates
    if (t >= 0.0 && image_Pause_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_Pause_2.tStart = t;  // (not accounting for frame time here)
      image_Pause_2.frameNStart = frameN;  // exact frame index
      
      image_Pause_2.setAutoDraw(true);
    }
    
    
    // *text_continueExp_2* updates
    if (t >= 0.0 && text_continueExp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continueExp_2.tStart = t;  // (not accounting for frame time here)
      text_continueExp_2.frameNStart = frameN;  // exact frame index
      
      text_continueExp_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pause2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause2' ---
    for (const thisComponent of Pause2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Pause2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Pause_2.corr, level);
    }
    psychoJS.experiment.addData('key_Pause_2.keys', key_Pause_2.keys);
    if (typeof key_Pause_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Pause_2.rt', key_Pause_2.rt);
        psychoJS.experiment.addData('key_Pause_2.duration', key_Pause_2.duration);
        routineTimer.reset();
        }
    
    key_Pause_2.stop();
    // the Routine "Pause2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_25_allKeys;
var Item25Components;
function Item25RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item25' ---
    t = 0;
    Item25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item25.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_25
    var time_left = 42
    if (!countdown_started){
        Item25Clock.reset()
        countdown_started = true
    }
    Key_25.keys = undefined;
    Key_25.rt = undefined;
    _Key_25_allKeys = [];
    // keep track of which components have finished
    Item25Components = [];
    Item25Components.push(image_25);
    Item25Components.push(timer_text_25);
    Item25Components.push(Question_25);
    Item25Components.push(Answers_25);
    Item25Components.push(Key_25);
    
    for (const thisComponent of Item25Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item25RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item25' ---
    // get current time
    t = Item25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_25
    time_left = Math.ceil(42 - Item25Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_25* updates
    if (t >= 0.0 && image_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_25.tStart = t;  // (not accounting for frame time here)
      image_25.frameNStart = frameN;  // exact frame index
      
      image_25.setAutoDraw(true);
    }
    
    
    if (timer_text_25.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_25.setText(`${time_left}`, false);
    }
    
    // *timer_text_25* updates
    if (t >= 32 && timer_text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_25.tStart = t;  // (not accounting for frame time here)
      timer_text_25.frameNStart = frameN;  // exact frame index
      
      timer_text_25.setAutoDraw(true);
    }
    
    
    // *Question_25* updates
    if (t >= 2 && Question_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_25.tStart = t;  // (not accounting for frame time here)
      Question_25.frameNStart = frameN;  // exact frame index
      
      Question_25.setAutoDraw(true);
    }
    
    
    // *Answers_25* updates
    if (t >= 2 && Answers_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_25.tStart = t;  // (not accounting for frame time here)
      Answers_25.frameNStart = frameN;  // exact frame index
      
      Answers_25.setAutoDraw(true);
    }
    
    
    // *Key_25* updates
    if (t >= 2.0 && Key_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_25.tStart = t;  // (not accounting for frame time here)
      Key_25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_25.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_25.clearEvents(); });
    }
    
    if (Key_25.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_25.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_25_allKeys = _Key_25_allKeys.concat(theseKeys);
      if (_Key_25_allKeys.length > 0) {
        Key_25.keys = _Key_25_allKeys[_Key_25_allKeys.length - 1].name;  // just the last key pressed
        Key_25.rt = _Key_25_allKeys[_Key_25_allKeys.length - 1].rt;
        Key_25.duration = _Key_25_allKeys[_Key_25_allKeys.length - 1].duration;
        // was this correct?
        if (Key_25.keys == '3') {
            Key_25.corr = 1;
        } else {
            Key_25.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item25Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item25RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item25' ---
    for (const thisComponent of Item25Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item25.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_25.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_25.corr = 1;  // correct non-response
      } else {
         Key_25.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_25.corr, level);
    }
    psychoJS.experiment.addData('Key_25.keys', Key_25.keys);
    psychoJS.experiment.addData('Key_25.corr', Key_25.corr);
    if (typeof Key_25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_25.rt', Key_25.rt);
        psychoJS.experiment.addData('Key_25.duration', Key_25.duration);
        routineTimer.reset();
        }
    
    Key_25.stop();
    // the Routine "Item25" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_26_allKeys;
var Item26Components;
function Item26RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item26' ---
    t = 0;
    Item26Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item26.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_26
    var time_left = 42
    if (!countdown_started){
        Item26Clock.reset()
        countdown_started = true
    }
    Key_26.keys = undefined;
    Key_26.rt = undefined;
    _Key_26_allKeys = [];
    // keep track of which components have finished
    Item26Components = [];
    Item26Components.push(image_26);
    Item26Components.push(timer_text_26);
    Item26Components.push(Question_26);
    Item26Components.push(Answers_26);
    Item26Components.push(Key_26);
    
    for (const thisComponent of Item26Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item26RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item26' ---
    // get current time
    t = Item26Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_26
    time_left = Math.ceil(42 - Item26Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_26* updates
    if (t >= 0.0 && image_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_26.tStart = t;  // (not accounting for frame time here)
      image_26.frameNStart = frameN;  // exact frame index
      
      image_26.setAutoDraw(true);
    }
    
    
    if (timer_text_26.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_26.setText(`${time_left}`, false);
    }
    
    // *timer_text_26* updates
    if (t >= 32 && timer_text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_26.tStart = t;  // (not accounting for frame time here)
      timer_text_26.frameNStart = frameN;  // exact frame index
      
      timer_text_26.setAutoDraw(true);
    }
    
    
    // *Question_26* updates
    if (t >= 2 && Question_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_26.tStart = t;  // (not accounting for frame time here)
      Question_26.frameNStart = frameN;  // exact frame index
      
      Question_26.setAutoDraw(true);
    }
    
    
    // *Answers_26* updates
    if (t >= 2 && Answers_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_26.tStart = t;  // (not accounting for frame time here)
      Answers_26.frameNStart = frameN;  // exact frame index
      
      Answers_26.setAutoDraw(true);
    }
    
    
    // *Key_26* updates
    if (t >= 2.0 && Key_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_26.tStart = t;  // (not accounting for frame time here)
      Key_26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_26.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_26.clearEvents(); });
    }
    
    if (Key_26.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_26.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_26_allKeys = _Key_26_allKeys.concat(theseKeys);
      if (_Key_26_allKeys.length > 0) {
        Key_26.keys = _Key_26_allKeys[_Key_26_allKeys.length - 1].name;  // just the last key pressed
        Key_26.rt = _Key_26_allKeys[_Key_26_allKeys.length - 1].rt;
        Key_26.duration = _Key_26_allKeys[_Key_26_allKeys.length - 1].duration;
        // was this correct?
        if (Key_26.keys == '1') {
            Key_26.corr = 1;
        } else {
            Key_26.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item26Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item26RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item26' ---
    for (const thisComponent of Item26Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item26.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_26.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_26.corr = 1;  // correct non-response
      } else {
         Key_26.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_26.corr, level);
    }
    psychoJS.experiment.addData('Key_26.keys', Key_26.keys);
    psychoJS.experiment.addData('Key_26.corr', Key_26.corr);
    if (typeof Key_26.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_26.rt', Key_26.rt);
        psychoJS.experiment.addData('Key_26.duration', Key_26.duration);
        routineTimer.reset();
        }
    
    Key_26.stop();
    // the Routine "Item26" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_27_allKeys;
var Item27Components;
function Item27RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item27' ---
    t = 0;
    Item27Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item27.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_27
    var time_left = 42
    if (!countdown_started){
        Item27Clock.reset()
        countdown_started = true
    }
    Key_27.keys = undefined;
    Key_27.rt = undefined;
    _Key_27_allKeys = [];
    // keep track of which components have finished
    Item27Components = [];
    Item27Components.push(image_27);
    Item27Components.push(timer_text_27);
    Item27Components.push(Question_27);
    Item27Components.push(Answers_27);
    Item27Components.push(Key_27);
    
    for (const thisComponent of Item27Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item27RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item27' ---
    // get current time
    t = Item27Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_27
    time_left = Math.ceil(42 - Item27Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_27* updates
    if (t >= 0.0 && image_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_27.tStart = t;  // (not accounting for frame time here)
      image_27.frameNStart = frameN;  // exact frame index
      
      image_27.setAutoDraw(true);
    }
    
    
    if (timer_text_27.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_27.setText(`${time_left}`, false);
    }
    
    // *timer_text_27* updates
    if (t >= 32 && timer_text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_27.tStart = t;  // (not accounting for frame time here)
      timer_text_27.frameNStart = frameN;  // exact frame index
      
      timer_text_27.setAutoDraw(true);
    }
    
    
    // *Question_27* updates
    if (t >= 2 && Question_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_27.tStart = t;  // (not accounting for frame time here)
      Question_27.frameNStart = frameN;  // exact frame index
      
      Question_27.setAutoDraw(true);
    }
    
    
    // *Answers_27* updates
    if (t >= 2 && Answers_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_27.tStart = t;  // (not accounting for frame time here)
      Answers_27.frameNStart = frameN;  // exact frame index
      
      Answers_27.setAutoDraw(true);
    }
    
    
    // *Key_27* updates
    if (t >= 2.0 && Key_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_27.tStart = t;  // (not accounting for frame time here)
      Key_27.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_27.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_27.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_27.clearEvents(); });
    }
    
    if (Key_27.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_27.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_27_allKeys = _Key_27_allKeys.concat(theseKeys);
      if (_Key_27_allKeys.length > 0) {
        Key_27.keys = _Key_27_allKeys[_Key_27_allKeys.length - 1].name;  // just the last key pressed
        Key_27.rt = _Key_27_allKeys[_Key_27_allKeys.length - 1].rt;
        Key_27.duration = _Key_27_allKeys[_Key_27_allKeys.length - 1].duration;
        // was this correct?
        if (Key_27.keys == '4') {
            Key_27.corr = 1;
        } else {
            Key_27.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item27Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item27RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item27' ---
    for (const thisComponent of Item27Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item27.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_27.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_27.corr = 1;  // correct non-response
      } else {
         Key_27.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_27.corr, level);
    }
    psychoJS.experiment.addData('Key_27.keys', Key_27.keys);
    psychoJS.experiment.addData('Key_27.corr', Key_27.corr);
    if (typeof Key_27.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_27.rt', Key_27.rt);
        psychoJS.experiment.addData('Key_27.duration', Key_27.duration);
        routineTimer.reset();
        }
    
    Key_27.stop();
    // the Routine "Item27" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_28_allKeys;
var Item28Components;
function Item28RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item28' ---
    t = 0;
    Item28Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item28.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_28
    var time_left = 42
    if (!countdown_started){
        Item28Clock.reset()
        countdown_started = true
    }
    Key_28.keys = undefined;
    Key_28.rt = undefined;
    _Key_28_allKeys = [];
    // keep track of which components have finished
    Item28Components = [];
    Item28Components.push(image_28);
    Item28Components.push(timer_text_28);
    Item28Components.push(Question_28);
    Item28Components.push(Answers_28);
    Item28Components.push(Key_28);
    
    for (const thisComponent of Item28Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item28RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item28' ---
    // get current time
    t = Item28Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_28
    time_left = Math.ceil(42 - Item28Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_28* updates
    if (t >= 0.0 && image_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_28.tStart = t;  // (not accounting for frame time here)
      image_28.frameNStart = frameN;  // exact frame index
      
      image_28.setAutoDraw(true);
    }
    
    
    if (timer_text_28.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_28.setText(`${time_left}`, false);
    }
    
    // *timer_text_28* updates
    if (t >= 32 && timer_text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_28.tStart = t;  // (not accounting for frame time here)
      timer_text_28.frameNStart = frameN;  // exact frame index
      
      timer_text_28.setAutoDraw(true);
    }
    
    
    // *Question_28* updates
    if (t >= 2 && Question_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_28.tStart = t;  // (not accounting for frame time here)
      Question_28.frameNStart = frameN;  // exact frame index
      
      Question_28.setAutoDraw(true);
    }
    
    
    // *Answers_28* updates
    if (t >= 2 && Answers_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_28.tStart = t;  // (not accounting for frame time here)
      Answers_28.frameNStart = frameN;  // exact frame index
      
      Answers_28.setAutoDraw(true);
    }
    
    
    // *Key_28* updates
    if (t >= 2.0 && Key_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_28.tStart = t;  // (not accounting for frame time here)
      Key_28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_28.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_28.clearEvents(); });
    }
    
    if (Key_28.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_28.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_28_allKeys = _Key_28_allKeys.concat(theseKeys);
      if (_Key_28_allKeys.length > 0) {
        Key_28.keys = _Key_28_allKeys[_Key_28_allKeys.length - 1].name;  // just the last key pressed
        Key_28.rt = _Key_28_allKeys[_Key_28_allKeys.length - 1].rt;
        Key_28.duration = _Key_28_allKeys[_Key_28_allKeys.length - 1].duration;
        // was this correct?
        if (Key_28.keys == '2') {
            Key_28.corr = 1;
        } else {
            Key_28.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item28Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item28RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item28' ---
    for (const thisComponent of Item28Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item28.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_28.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_28.corr = 1;  // correct non-response
      } else {
         Key_28.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_28.corr, level);
    }
    psychoJS.experiment.addData('Key_28.keys', Key_28.keys);
    psychoJS.experiment.addData('Key_28.corr', Key_28.corr);
    if (typeof Key_28.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_28.rt', Key_28.rt);
        psychoJS.experiment.addData('Key_28.duration', Key_28.duration);
        routineTimer.reset();
        }
    
    Key_28.stop();
    // the Routine "Item28" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_35_allKeys;
var Item35Components;
function Item35RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item35' ---
    t = 0;
    Item35Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item35.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_35
    var time_left = 42
    if (!countdown_started){
        Item35Clock.reset()
        countdown_started = true
    }
    Key_35.keys = undefined;
    Key_35.rt = undefined;
    _Key_35_allKeys = [];
    // keep track of which components have finished
    Item35Components = [];
    Item35Components.push(image_35);
    Item35Components.push(timer_text_35);
    Item35Components.push(Question_35);
    Item35Components.push(Answers_35);
    Item35Components.push(Key_35);
    
    for (const thisComponent of Item35Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item35RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item35' ---
    // get current time
    t = Item35Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_35
    time_left = Math.ceil(42 - Item35Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_35* updates
    if (t >= 0.0 && image_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_35.tStart = t;  // (not accounting for frame time here)
      image_35.frameNStart = frameN;  // exact frame index
      
      image_35.setAutoDraw(true);
    }
    
    
    if (timer_text_35.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_35.setText(`${time_left}`, false);
    }
    
    // *timer_text_35* updates
    if (t >= 32 && timer_text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_35.tStart = t;  // (not accounting for frame time here)
      timer_text_35.frameNStart = frameN;  // exact frame index
      
      timer_text_35.setAutoDraw(true);
    }
    
    
    // *Question_35* updates
    if (t >= 2 && Question_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_35.tStart = t;  // (not accounting for frame time here)
      Question_35.frameNStart = frameN;  // exact frame index
      
      Question_35.setAutoDraw(true);
    }
    
    
    // *Answers_35* updates
    if (t >= 2 && Answers_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_35.tStart = t;  // (not accounting for frame time here)
      Answers_35.frameNStart = frameN;  // exact frame index
      
      Answers_35.setAutoDraw(true);
    }
    
    
    // *Key_35* updates
    if (t >= 2.0 && Key_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_35.tStart = t;  // (not accounting for frame time here)
      Key_35.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_35.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_35.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_35.clearEvents(); });
    }
    
    if (Key_35.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_35.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_35_allKeys = _Key_35_allKeys.concat(theseKeys);
      if (_Key_35_allKeys.length > 0) {
        Key_35.keys = _Key_35_allKeys[_Key_35_allKeys.length - 1].name;  // just the last key pressed
        Key_35.rt = _Key_35_allKeys[_Key_35_allKeys.length - 1].rt;
        Key_35.duration = _Key_35_allKeys[_Key_35_allKeys.length - 1].duration;
        // was this correct?
        if (Key_35.keys == '3') {
            Key_35.corr = 1;
        } else {
            Key_35.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item35Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item35RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item35' ---
    for (const thisComponent of Item35Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item35.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_35.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_35.corr = 1;  // correct non-response
      } else {
         Key_35.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_35.corr, level);
    }
    psychoJS.experiment.addData('Key_35.keys', Key_35.keys);
    psychoJS.experiment.addData('Key_35.corr', Key_35.corr);
    if (typeof Key_35.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_35.rt', Key_35.rt);
        psychoJS.experiment.addData('Key_35.duration', Key_35.duration);
        routineTimer.reset();
        }
    
    Key_35.stop();
    // the Routine "Item35" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_29_allKeys;
var Item29Components;
function Item29RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item29' ---
    t = 0;
    Item29Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item29.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_29
    var time_left = 42
    if (!countdown_started){
        Item29Clock.reset()
        countdown_started = true
    }
    Key_29.keys = undefined;
    Key_29.rt = undefined;
    _Key_29_allKeys = [];
    // keep track of which components have finished
    Item29Components = [];
    Item29Components.push(image_29);
    Item29Components.push(timer_text_29);
    Item29Components.push(Answers_29);
    Item29Components.push(Key_29);
    Item29Components.push(Question_image_3);
    
    for (const thisComponent of Item29Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item29RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item29' ---
    // get current time
    t = Item29Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_29
    time_left = Math.ceil(42 - Item29Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_29* updates
    if (t >= 0.0 && image_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_29.tStart = t;  // (not accounting for frame time here)
      image_29.frameNStart = frameN;  // exact frame index
      
      image_29.setAutoDraw(true);
    }
    
    
    if (timer_text_29.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_29.setText(`${time_left}`, false);
    }
    
    // *timer_text_29* updates
    if (t >= 32 && timer_text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_29.tStart = t;  // (not accounting for frame time here)
      timer_text_29.frameNStart = frameN;  // exact frame index
      
      timer_text_29.setAutoDraw(true);
    }
    
    
    // *Answers_29* updates
    if (t >= 2 && Answers_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_29.tStart = t;  // (not accounting for frame time here)
      Answers_29.frameNStart = frameN;  // exact frame index
      
      Answers_29.setAutoDraw(true);
    }
    
    
    // *Key_29* updates
    if (t >= 2.0 && Key_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_29.tStart = t;  // (not accounting for frame time here)
      Key_29.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_29.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_29.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_29.clearEvents(); });
    }
    
    if (Key_29.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_29.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_29_allKeys = _Key_29_allKeys.concat(theseKeys);
      if (_Key_29_allKeys.length > 0) {
        Key_29.keys = _Key_29_allKeys[_Key_29_allKeys.length - 1].name;  // just the last key pressed
        Key_29.rt = _Key_29_allKeys[_Key_29_allKeys.length - 1].rt;
        Key_29.duration = _Key_29_allKeys[_Key_29_allKeys.length - 1].duration;
        // was this correct?
        if (Key_29.keys == '3') {
            Key_29.corr = 1;
        } else {
            Key_29.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Question_image_3* updates
    if (t >= 2 && Question_image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_image_3.tStart = t;  // (not accounting for frame time here)
      Question_image_3.frameNStart = frameN;  // exact frame index
      
      Question_image_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item29Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item29RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item29' ---
    for (const thisComponent of Item29Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item29.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_29.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_29.corr = 1;  // correct non-response
      } else {
         Key_29.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_29.corr, level);
    }
    psychoJS.experiment.addData('Key_29.keys', Key_29.keys);
    psychoJS.experiment.addData('Key_29.corr', Key_29.corr);
    if (typeof Key_29.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_29.rt', Key_29.rt);
        psychoJS.experiment.addData('Key_29.duration', Key_29.duration);
        routineTimer.reset();
        }
    
    Key_29.stop();
    // the Routine "Item29" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_30_allKeys;
var Item30Components;
function Item30RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item30' ---
    t = 0;
    Item30Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item30.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_30
    var time_left = 42
    if (!countdown_started){
        Item30Clock.reset()
        countdown_started = true
    }
    Key_30.keys = undefined;
    Key_30.rt = undefined;
    _Key_30_allKeys = [];
    // keep track of which components have finished
    Item30Components = [];
    Item30Components.push(image_30);
    Item30Components.push(timer_text_30);
    Item30Components.push(Question_30);
    Item30Components.push(Answers_30);
    Item30Components.push(Key_30);
    
    for (const thisComponent of Item30Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item30RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item30' ---
    // get current time
    t = Item30Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_30
    time_left = Math.ceil(42 - Item30Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_30* updates
    if (t >= 0.0 && image_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_30.tStart = t;  // (not accounting for frame time here)
      image_30.frameNStart = frameN;  // exact frame index
      
      image_30.setAutoDraw(true);
    }
    
    
    if (timer_text_30.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_30.setText(`${time_left}`, false);
    }
    
    // *timer_text_30* updates
    if (t >= 32 && timer_text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_30.tStart = t;  // (not accounting for frame time here)
      timer_text_30.frameNStart = frameN;  // exact frame index
      
      timer_text_30.setAutoDraw(true);
    }
    
    
    // *Question_30* updates
    if (t >= 2 && Question_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_30.tStart = t;  // (not accounting for frame time here)
      Question_30.frameNStart = frameN;  // exact frame index
      
      Question_30.setAutoDraw(true);
    }
    
    
    // *Answers_30* updates
    if (t >= 2 && Answers_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_30.tStart = t;  // (not accounting for frame time here)
      Answers_30.frameNStart = frameN;  // exact frame index
      
      Answers_30.setAutoDraw(true);
    }
    
    
    // *Key_30* updates
    if (t >= 2.0 && Key_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_30.tStart = t;  // (not accounting for frame time here)
      Key_30.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_30.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_30.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_30.clearEvents(); });
    }
    
    if (Key_30.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_30.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_30_allKeys = _Key_30_allKeys.concat(theseKeys);
      if (_Key_30_allKeys.length > 0) {
        Key_30.keys = _Key_30_allKeys[_Key_30_allKeys.length - 1].name;  // just the last key pressed
        Key_30.rt = _Key_30_allKeys[_Key_30_allKeys.length - 1].rt;
        Key_30.duration = _Key_30_allKeys[_Key_30_allKeys.length - 1].duration;
        // was this correct?
        if (Key_30.keys == '1') {
            Key_30.corr = 1;
        } else {
            Key_30.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item30Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item30RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item30' ---
    for (const thisComponent of Item30Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item30.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_30.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_30.corr = 1;  // correct non-response
      } else {
         Key_30.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_30.corr, level);
    }
    psychoJS.experiment.addData('Key_30.keys', Key_30.keys);
    psychoJS.experiment.addData('Key_30.corr', Key_30.corr);
    if (typeof Key_30.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_30.rt', Key_30.rt);
        psychoJS.experiment.addData('Key_30.duration', Key_30.duration);
        routineTimer.reset();
        }
    
    Key_30.stop();
    // the Routine "Item30" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_31_allKeys;
var Item31Components;
function Item31RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item31' ---
    t = 0;
    Item31Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item31.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_31
    var time_left = 42
    if (!countdown_started){
        Item31Clock.reset()
        countdown_started = true
    }
    Key_31.keys = undefined;
    Key_31.rt = undefined;
    _Key_31_allKeys = [];
    // keep track of which components have finished
    Item31Components = [];
    Item31Components.push(image_31);
    Item31Components.push(timer_text_31);
    Item31Components.push(Question_31);
    Item31Components.push(Answers_31);
    Item31Components.push(Key_31);
    
    for (const thisComponent of Item31Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item31RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item31' ---
    // get current time
    t = Item31Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_31
    time_left = Math.ceil(42 - Item31Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_31* updates
    if (t >= 0.0 && image_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_31.tStart = t;  // (not accounting for frame time here)
      image_31.frameNStart = frameN;  // exact frame index
      
      image_31.setAutoDraw(true);
    }
    
    
    if (timer_text_31.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_31.setText(`${time_left}`, false);
    }
    
    // *timer_text_31* updates
    if (t >= 32 && timer_text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_31.tStart = t;  // (not accounting for frame time here)
      timer_text_31.frameNStart = frameN;  // exact frame index
      
      timer_text_31.setAutoDraw(true);
    }
    
    
    // *Question_31* updates
    if (t >= 2 && Question_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_31.tStart = t;  // (not accounting for frame time here)
      Question_31.frameNStart = frameN;  // exact frame index
      
      Question_31.setAutoDraw(true);
    }
    
    
    // *Answers_31* updates
    if (t >= 2 && Answers_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_31.tStart = t;  // (not accounting for frame time here)
      Answers_31.frameNStart = frameN;  // exact frame index
      
      Answers_31.setAutoDraw(true);
    }
    
    
    // *Key_31* updates
    if (t >= 2.0 && Key_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_31.tStart = t;  // (not accounting for frame time here)
      Key_31.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_31.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_31.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_31.clearEvents(); });
    }
    
    if (Key_31.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_31.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_31_allKeys = _Key_31_allKeys.concat(theseKeys);
      if (_Key_31_allKeys.length > 0) {
        Key_31.keys = _Key_31_allKeys[_Key_31_allKeys.length - 1].name;  // just the last key pressed
        Key_31.rt = _Key_31_allKeys[_Key_31_allKeys.length - 1].rt;
        Key_31.duration = _Key_31_allKeys[_Key_31_allKeys.length - 1].duration;
        // was this correct?
        if (Key_31.keys == '3') {
            Key_31.corr = 1;
        } else {
            Key_31.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item31Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item31RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item31' ---
    for (const thisComponent of Item31Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item31.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_31.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_31.corr = 1;  // correct non-response
      } else {
         Key_31.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_31.corr, level);
    }
    psychoJS.experiment.addData('Key_31.keys', Key_31.keys);
    psychoJS.experiment.addData('Key_31.corr', Key_31.corr);
    if (typeof Key_31.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_31.rt', Key_31.rt);
        psychoJS.experiment.addData('Key_31.duration', Key_31.duration);
        routineTimer.reset();
        }
    
    Key_31.stop();
    // the Routine "Item31" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_32_allKeys;
var Item32Components;
function Item32RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item32' ---
    t = 0;
    Item32Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item32.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_32
    var time_left = 42
    if (!countdown_started){
        Item32Clock.reset()
        countdown_started = true
    }
    Key_32.keys = undefined;
    Key_32.rt = undefined;
    _Key_32_allKeys = [];
    // keep track of which components have finished
    Item32Components = [];
    Item32Components.push(image_32);
    Item32Components.push(timer_text_32);
    Item32Components.push(Question_32);
    Item32Components.push(Answers_32);
    Item32Components.push(Key_32);
    
    for (const thisComponent of Item32Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item32RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item32' ---
    // get current time
    t = Item32Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_32
    time_left = Math.ceil(42 - Item32Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_32* updates
    if (t >= 0.0 && image_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_32.tStart = t;  // (not accounting for frame time here)
      image_32.frameNStart = frameN;  // exact frame index
      
      image_32.setAutoDraw(true);
    }
    
    
    if (timer_text_32.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_32.setText(`${time_left}`, false);
    }
    
    // *timer_text_32* updates
    if (t >= 32 && timer_text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_32.tStart = t;  // (not accounting for frame time here)
      timer_text_32.frameNStart = frameN;  // exact frame index
      
      timer_text_32.setAutoDraw(true);
    }
    
    
    // *Question_32* updates
    if (t >= 2 && Question_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_32.tStart = t;  // (not accounting for frame time here)
      Question_32.frameNStart = frameN;  // exact frame index
      
      Question_32.setAutoDraw(true);
    }
    
    
    // *Answers_32* updates
    if (t >= 2 && Answers_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_32.tStart = t;  // (not accounting for frame time here)
      Answers_32.frameNStart = frameN;  // exact frame index
      
      Answers_32.setAutoDraw(true);
    }
    
    
    // *Key_32* updates
    if (t >= 2.0 && Key_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_32.tStart = t;  // (not accounting for frame time here)
      Key_32.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_32.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_32.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_32.clearEvents(); });
    }
    
    if (Key_32.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_32.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_32_allKeys = _Key_32_allKeys.concat(theseKeys);
      if (_Key_32_allKeys.length > 0) {
        Key_32.keys = _Key_32_allKeys[_Key_32_allKeys.length - 1].name;  // just the last key pressed
        Key_32.rt = _Key_32_allKeys[_Key_32_allKeys.length - 1].rt;
        Key_32.duration = _Key_32_allKeys[_Key_32_allKeys.length - 1].duration;
        // was this correct?
        if (Key_32.keys == '1') {
            Key_32.corr = 1;
        } else {
            Key_32.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item32Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item32RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item32' ---
    for (const thisComponent of Item32Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item32.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_32.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_32.corr = 1;  // correct non-response
      } else {
         Key_32.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_32.corr, level);
    }
    psychoJS.experiment.addData('Key_32.keys', Key_32.keys);
    psychoJS.experiment.addData('Key_32.corr', Key_32.corr);
    if (typeof Key_32.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_32.rt', Key_32.rt);
        psychoJS.experiment.addData('Key_32.duration', Key_32.duration);
        routineTimer.reset();
        }
    
    Key_32.stop();
    // the Routine "Item32" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_33_allKeys;
var Item33Components;
function Item33RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item33' ---
    t = 0;
    Item33Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item33.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_33
    var time_left = 42
    if (!countdown_started){
        Item34Clock.reset()
        countdown_started = true
    }
    Key_33.keys = undefined;
    Key_33.rt = undefined;
    _Key_33_allKeys = [];
    // keep track of which components have finished
    Item33Components = [];
    Item33Components.push(image_33);
    Item33Components.push(timer_text_33);
    Item33Components.push(Question_33);
    Item33Components.push(Answers_33);
    Item33Components.push(Key_33);
    
    for (const thisComponent of Item33Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item33RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item33' ---
    // get current time
    t = Item33Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_33
    time_left = Math.ceil(42 - Item34Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_33* updates
    if (t >= 0.0 && image_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_33.tStart = t;  // (not accounting for frame time here)
      image_33.frameNStart = frameN;  // exact frame index
      
      image_33.setAutoDraw(true);
    }
    
    
    if (timer_text_33.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_33.setText(`${time_left}`, false);
    }
    
    // *timer_text_33* updates
    if (t >= 32 && timer_text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_33.tStart = t;  // (not accounting for frame time here)
      timer_text_33.frameNStart = frameN;  // exact frame index
      
      timer_text_33.setAutoDraw(true);
    }
    
    
    // *Question_33* updates
    if (t >= 2 && Question_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_33.tStart = t;  // (not accounting for frame time here)
      Question_33.frameNStart = frameN;  // exact frame index
      
      Question_33.setAutoDraw(true);
    }
    
    
    // *Answers_33* updates
    if (t >= 2 && Answers_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_33.tStart = t;  // (not accounting for frame time here)
      Answers_33.frameNStart = frameN;  // exact frame index
      
      Answers_33.setAutoDraw(true);
    }
    
    
    // *Key_33* updates
    if (t >= 2.0 && Key_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_33.tStart = t;  // (not accounting for frame time here)
      Key_33.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_33.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_33.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_33.clearEvents(); });
    }
    
    if (Key_33.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_33.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_33_allKeys = _Key_33_allKeys.concat(theseKeys);
      if (_Key_33_allKeys.length > 0) {
        Key_33.keys = _Key_33_allKeys[_Key_33_allKeys.length - 1].name;  // just the last key pressed
        Key_33.rt = _Key_33_allKeys[_Key_33_allKeys.length - 1].rt;
        Key_33.duration = _Key_33_allKeys[_Key_33_allKeys.length - 1].duration;
        // was this correct?
        if (Key_33.keys == '2') {
            Key_33.corr = 1;
        } else {
            Key_33.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item33Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item33RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item33' ---
    for (const thisComponent of Item33Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item33.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_33.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_33.corr = 1;  // correct non-response
      } else {
         Key_33.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_33.corr, level);
    }
    psychoJS.experiment.addData('Key_33.keys', Key_33.keys);
    psychoJS.experiment.addData('Key_33.corr', Key_33.corr);
    if (typeof Key_33.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_33.rt', Key_33.rt);
        psychoJS.experiment.addData('Key_33.duration', Key_33.duration);
        routineTimer.reset();
        }
    
    Key_33.stop();
    // the Routine "Item33" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_34_allKeys;
var Item34Components;
function Item34RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item34' ---
    t = 0;
    Item34Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item34.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_34
    var time_left = 42
    if (!countdown_started){
        Item34Clock.reset()
        countdown_started = true
    }
    Key_34.keys = undefined;
    Key_34.rt = undefined;
    _Key_34_allKeys = [];
    // keep track of which components have finished
    Item34Components = [];
    Item34Components.push(image_34);
    Item34Components.push(timer_text_34);
    Item34Components.push(Question_34);
    Item34Components.push(Answers_34);
    Item34Components.push(Key_34);
    
    for (const thisComponent of Item34Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item34RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item34' ---
    // get current time
    t = Item34Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_34
    time_left = Math.ceil(42 - Item34Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_34* updates
    if (t >= 0.0 && image_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_34.tStart = t;  // (not accounting for frame time here)
      image_34.frameNStart = frameN;  // exact frame index
      
      image_34.setAutoDraw(true);
    }
    
    
    if (timer_text_34.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_34.setText(`${time_left}`, false);
    }
    
    // *timer_text_34* updates
    if (t >= 32 && timer_text_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_34.tStart = t;  // (not accounting for frame time here)
      timer_text_34.frameNStart = frameN;  // exact frame index
      
      timer_text_34.setAutoDraw(true);
    }
    
    
    // *Question_34* updates
    if (t >= 2 && Question_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_34.tStart = t;  // (not accounting for frame time here)
      Question_34.frameNStart = frameN;  // exact frame index
      
      Question_34.setAutoDraw(true);
    }
    
    
    // *Answers_34* updates
    if (t >= 2 && Answers_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_34.tStart = t;  // (not accounting for frame time here)
      Answers_34.frameNStart = frameN;  // exact frame index
      
      Answers_34.setAutoDraw(true);
    }
    
    
    // *Key_34* updates
    if (t >= 2.0 && Key_34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_34.tStart = t;  // (not accounting for frame time here)
      Key_34.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_34.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_34.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_34.clearEvents(); });
    }
    
    if (Key_34.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_34.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_34_allKeys = _Key_34_allKeys.concat(theseKeys);
      if (_Key_34_allKeys.length > 0) {
        Key_34.keys = _Key_34_allKeys[_Key_34_allKeys.length - 1].name;  // just the last key pressed
        Key_34.rt = _Key_34_allKeys[_Key_34_allKeys.length - 1].rt;
        Key_34.duration = _Key_34_allKeys[_Key_34_allKeys.length - 1].duration;
        // was this correct?
        if (Key_34.keys == '3') {
            Key_34.corr = 1;
        } else {
            Key_34.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item34Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item34RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item34' ---
    for (const thisComponent of Item34Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item34.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_34.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_34.corr = 1;  // correct non-response
      } else {
         Key_34.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_34.corr, level);
    }
    psychoJS.experiment.addData('Key_34.keys', Key_34.keys);
    psychoJS.experiment.addData('Key_34.corr', Key_34.corr);
    if (typeof Key_34.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_34.rt', Key_34.rt);
        psychoJS.experiment.addData('Key_34.duration', Key_34.duration);
        routineTimer.reset();
        }
    
    Key_34.stop();
    // the Routine "Item34" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_36_allKeys;
var Item36Components;
function Item36RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item36' ---
    t = 0;
    Item36Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item36.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_36
    var time_left = 42
    if (!countdown_started){
        Item36Clock.reset()
        countdown_started = true
    }
    Key_36.keys = undefined;
    Key_36.rt = undefined;
    _Key_36_allKeys = [];
    // keep track of which components have finished
    Item36Components = [];
    Item36Components.push(image_36);
    Item36Components.push(timer_text_36);
    Item36Components.push(Question_36);
    Item36Components.push(Answers_36);
    Item36Components.push(Key_36);
    
    for (const thisComponent of Item36Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item36RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item36' ---
    // get current time
    t = Item36Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_36
    time_left = Math.ceil(42 - Item36Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_36* updates
    if (t >= 0.0 && image_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_36.tStart = t;  // (not accounting for frame time here)
      image_36.frameNStart = frameN;  // exact frame index
      
      image_36.setAutoDraw(true);
    }
    
    
    if (timer_text_36.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_36.setText(`${time_left}`, false);
    }
    
    // *timer_text_36* updates
    if (t >= 32 && timer_text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_36.tStart = t;  // (not accounting for frame time here)
      timer_text_36.frameNStart = frameN;  // exact frame index
      
      timer_text_36.setAutoDraw(true);
    }
    
    
    // *Question_36* updates
    if (t >= 2 && Question_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_36.tStart = t;  // (not accounting for frame time here)
      Question_36.frameNStart = frameN;  // exact frame index
      
      Question_36.setAutoDraw(true);
    }
    
    
    // *Answers_36* updates
    if (t >= 2 && Answers_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_36.tStart = t;  // (not accounting for frame time here)
      Answers_36.frameNStart = frameN;  // exact frame index
      
      Answers_36.setAutoDraw(true);
    }
    
    
    // *Key_36* updates
    if (t >= 2.0 && Key_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_36.tStart = t;  // (not accounting for frame time here)
      Key_36.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_36.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_36.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_36.clearEvents(); });
    }
    
    if (Key_36.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_36.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_36_allKeys = _Key_36_allKeys.concat(theseKeys);
      if (_Key_36_allKeys.length > 0) {
        Key_36.keys = _Key_36_allKeys[_Key_36_allKeys.length - 1].name;  // just the last key pressed
        Key_36.rt = _Key_36_allKeys[_Key_36_allKeys.length - 1].rt;
        Key_36.duration = _Key_36_allKeys[_Key_36_allKeys.length - 1].duration;
        // was this correct?
        if (Key_36.keys == '4') {
            Key_36.corr = 1;
        } else {
            Key_36.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item36Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item36RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item36' ---
    for (const thisComponent of Item36Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item36.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_36.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_36.corr = 1;  // correct non-response
      } else {
         Key_36.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_36.corr, level);
    }
    psychoJS.experiment.addData('Key_36.keys', Key_36.keys);
    psychoJS.experiment.addData('Key_36.corr', Key_36.corr);
    if (typeof Key_36.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_36.rt', Key_36.rt);
        psychoJS.experiment.addData('Key_36.duration', Key_36.duration);
        routineTimer.reset();
        }
    
    Key_36.stop();
    // the Routine "Item36" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Pause_3_allKeys;
var Pause3Components;
function Pause3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Pause3' ---
    t = 0;
    Pause3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Pause3.started', globalClock.getTime());
    key_Pause_3.keys = undefined;
    key_Pause_3.rt = undefined;
    _key_Pause_3_allKeys = [];
    // keep track of which components have finished
    Pause3Components = [];
    Pause3Components.push(text_Pause_3);
    Pause3Components.push(key_Pause_3);
    Pause3Components.push(image_Pause_3);
    Pause3Components.push(text_continueExp_3);
    
    for (const thisComponent of Pause3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Pause3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Pause3' ---
    // get current time
    t = Pause3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Pause_3* updates
    if (t >= 0.0 && text_Pause_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Pause_3.tStart = t;  // (not accounting for frame time here)
      text_Pause_3.frameNStart = frameN;  // exact frame index
      
      text_Pause_3.setAutoDraw(true);
    }
    
    
    // *key_Pause_3* updates
    if (t >= 0.0 && key_Pause_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Pause_3.tStart = t;  // (not accounting for frame time here)
      key_Pause_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Pause_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Pause_3.clearEvents(); });
    }
    
    if (key_Pause_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Pause_3.getKeys({keyList: [], waitRelease: false});
      _key_Pause_3_allKeys = _key_Pause_3_allKeys.concat(theseKeys);
      if (_key_Pause_3_allKeys.length > 0) {
        key_Pause_3.keys = _key_Pause_3_allKeys[_key_Pause_3_allKeys.length - 1].name;  // just the last key pressed
        key_Pause_3.rt = _key_Pause_3_allKeys[_key_Pause_3_allKeys.length - 1].rt;
        key_Pause_3.duration = _key_Pause_3_allKeys[_key_Pause_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_Pause_3* updates
    if (t >= 0.0 && image_Pause_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_Pause_3.tStart = t;  // (not accounting for frame time here)
      image_Pause_3.frameNStart = frameN;  // exact frame index
      
      image_Pause_3.setAutoDraw(true);
    }
    
    
    // *text_continueExp_3* updates
    if (t >= 0.0 && text_continueExp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_continueExp_3.tStart = t;  // (not accounting for frame time here)
      text_continueExp_3.frameNStart = frameN;  // exact frame index
      
      text_continueExp_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pause3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pause3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Pause3' ---
    for (const thisComponent of Pause3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Pause3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Pause_3.corr, level);
    }
    psychoJS.experiment.addData('key_Pause_3.keys', key_Pause_3.keys);
    if (typeof key_Pause_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Pause_3.rt', key_Pause_3.rt);
        psychoJS.experiment.addData('key_Pause_3.duration', key_Pause_3.duration);
        routineTimer.reset();
        }
    
    key_Pause_3.stop();
    // the Routine "Pause3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_37_allKeys;
var Item37Components;
function Item37RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item37' ---
    t = 0;
    Item37Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item37.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_37
    var time_left = 42
    if (!countdown_started){
        Item37Clock.reset()
        countdown_started = true
    }
    Key_37.keys = undefined;
    Key_37.rt = undefined;
    _Key_37_allKeys = [];
    // keep track of which components have finished
    Item37Components = [];
    Item37Components.push(image_37);
    Item37Components.push(timer_text_37);
    Item37Components.push(Question_37);
    Item37Components.push(Answers_37);
    Item37Components.push(Key_37);
    
    for (const thisComponent of Item37Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item37RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item37' ---
    // get current time
    t = Item37Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_37
    time_left = Math.ceil(42 - Item37Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_37* updates
    if (t >= 0.0 && image_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_37.tStart = t;  // (not accounting for frame time here)
      image_37.frameNStart = frameN;  // exact frame index
      
      image_37.setAutoDraw(true);
    }
    
    
    if (timer_text_37.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_37.setText(`${time_left}`, false);
    }
    
    // *timer_text_37* updates
    if (t >= 32 && timer_text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_37.tStart = t;  // (not accounting for frame time here)
      timer_text_37.frameNStart = frameN;  // exact frame index
      
      timer_text_37.setAutoDraw(true);
    }
    
    
    // *Question_37* updates
    if (t >= 2 && Question_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_37.tStart = t;  // (not accounting for frame time here)
      Question_37.frameNStart = frameN;  // exact frame index
      
      Question_37.setAutoDraw(true);
    }
    
    
    // *Answers_37* updates
    if (t >= 2 && Answers_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_37.tStart = t;  // (not accounting for frame time here)
      Answers_37.frameNStart = frameN;  // exact frame index
      
      Answers_37.setAutoDraw(true);
    }
    
    
    // *Key_37* updates
    if (t >= 2.0 && Key_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_37.tStart = t;  // (not accounting for frame time here)
      Key_37.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_37.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_37.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_37.clearEvents(); });
    }
    
    if (Key_37.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_37.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_37_allKeys = _Key_37_allKeys.concat(theseKeys);
      if (_Key_37_allKeys.length > 0) {
        Key_37.keys = _Key_37_allKeys[_Key_37_allKeys.length - 1].name;  // just the last key pressed
        Key_37.rt = _Key_37_allKeys[_Key_37_allKeys.length - 1].rt;
        Key_37.duration = _Key_37_allKeys[_Key_37_allKeys.length - 1].duration;
        // was this correct?
        if (Key_37.keys == '3') {
            Key_37.corr = 1;
        } else {
            Key_37.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item37Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item37RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item37' ---
    for (const thisComponent of Item37Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item37.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_37.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_37.corr = 1;  // correct non-response
      } else {
         Key_37.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_37.corr, level);
    }
    psychoJS.experiment.addData('Key_37.keys', Key_37.keys);
    psychoJS.experiment.addData('Key_37.corr', Key_37.corr);
    if (typeof Key_37.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_37.rt', Key_37.rt);
        psychoJS.experiment.addData('Key_37.duration', Key_37.duration);
        routineTimer.reset();
        }
    
    Key_37.stop();
    // the Routine "Item37" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_38_allKeys;
var Item38Components;
function Item38RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item38' ---
    t = 0;
    Item38Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item38.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_38
    var time_left = 42
    if (!countdown_started){
        Item38Clock.reset()
        countdown_started = true
    }
    Key_38.keys = undefined;
    Key_38.rt = undefined;
    _Key_38_allKeys = [];
    // keep track of which components have finished
    Item38Components = [];
    Item38Components.push(image_38);
    Item38Components.push(timer_text_38);
    Item38Components.push(Question_38);
    Item38Components.push(Answers_38);
    Item38Components.push(Key_38);
    
    for (const thisComponent of Item38Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item38RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item38' ---
    // get current time
    t = Item38Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_38
    time_left = Math.ceil(42 - Item38Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_38* updates
    if (t >= 0.0 && image_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_38.tStart = t;  // (not accounting for frame time here)
      image_38.frameNStart = frameN;  // exact frame index
      
      image_38.setAutoDraw(true);
    }
    
    
    if (timer_text_38.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_38.setText(`${time_left}`, false);
    }
    
    // *timer_text_38* updates
    if (t >= 32 && timer_text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_38.tStart = t;  // (not accounting for frame time here)
      timer_text_38.frameNStart = frameN;  // exact frame index
      
      timer_text_38.setAutoDraw(true);
    }
    
    
    // *Question_38* updates
    if (t >= 2 && Question_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_38.tStart = t;  // (not accounting for frame time here)
      Question_38.frameNStart = frameN;  // exact frame index
      
      Question_38.setAutoDraw(true);
    }
    
    
    // *Answers_38* updates
    if (t >= 2 && Answers_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_38.tStart = t;  // (not accounting for frame time here)
      Answers_38.frameNStart = frameN;  // exact frame index
      
      Answers_38.setAutoDraw(true);
    }
    
    
    // *Key_38* updates
    if (t >= 2.0 && Key_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_38.tStart = t;  // (not accounting for frame time here)
      Key_38.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_38.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_38.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_38.clearEvents(); });
    }
    
    if (Key_38.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_38.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_38_allKeys = _Key_38_allKeys.concat(theseKeys);
      if (_Key_38_allKeys.length > 0) {
        Key_38.keys = _Key_38_allKeys[_Key_38_allKeys.length - 1].name;  // just the last key pressed
        Key_38.rt = _Key_38_allKeys[_Key_38_allKeys.length - 1].rt;
        Key_38.duration = _Key_38_allKeys[_Key_38_allKeys.length - 1].duration;
        // was this correct?
        if (Key_38.keys == '3') {
            Key_38.corr = 1;
        } else {
            Key_38.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item38Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item38RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item38' ---
    for (const thisComponent of Item38Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item38.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_38.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         Key_38.corr = 1;  // correct non-response
      } else {
         Key_38.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_38.corr, level);
    }
    psychoJS.experiment.addData('Key_38.keys', Key_38.keys);
    psychoJS.experiment.addData('Key_38.corr', Key_38.corr);
    if (typeof Key_38.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_38.rt', Key_38.rt);
        psychoJS.experiment.addData('Key_38.duration', Key_38.duration);
        routineTimer.reset();
        }
    
    Key_38.stop();
    // the Routine "Item38" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_39_allKeys;
var Item39Components;
function Item39RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item39' ---
    t = 0;
    Item39Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item39.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_39
    var time_left = 42
    if (!countdown_started){
        Item39Clock.reset()
        countdown_started = true
    }
    Key_39.keys = undefined;
    Key_39.rt = undefined;
    _Key_39_allKeys = [];
    // keep track of which components have finished
    Item39Components = [];
    Item39Components.push(image_39);
    Item39Components.push(timer_text_39);
    Item39Components.push(Question_39);
    Item39Components.push(Answers_39);
    Item39Components.push(Key_39);
    
    for (const thisComponent of Item39Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item39RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item39' ---
    // get current time
    t = Item39Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_39
    time_left = Math.ceil(42 - Item39Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_39* updates
    if (t >= 0.0 && image_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_39.tStart = t;  // (not accounting for frame time here)
      image_39.frameNStart = frameN;  // exact frame index
      
      image_39.setAutoDraw(true);
    }
    
    
    if (timer_text_39.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_39.setText(`${time_left}`, false);
    }
    
    // *timer_text_39* updates
    if (t >= 32 && timer_text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_39.tStart = t;  // (not accounting for frame time here)
      timer_text_39.frameNStart = frameN;  // exact frame index
      
      timer_text_39.setAutoDraw(true);
    }
    
    
    // *Question_39* updates
    if (t >= 2 && Question_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_39.tStart = t;  // (not accounting for frame time here)
      Question_39.frameNStart = frameN;  // exact frame index
      
      Question_39.setAutoDraw(true);
    }
    
    
    // *Answers_39* updates
    if (t >= 2 && Answers_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_39.tStart = t;  // (not accounting for frame time here)
      Answers_39.frameNStart = frameN;  // exact frame index
      
      Answers_39.setAutoDraw(true);
    }
    
    
    // *Key_39* updates
    if (t >= 2.0 && Key_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_39.tStart = t;  // (not accounting for frame time here)
      Key_39.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_39.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_39.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_39.clearEvents(); });
    }
    
    if (Key_39.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_39.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_39_allKeys = _Key_39_allKeys.concat(theseKeys);
      if (_Key_39_allKeys.length > 0) {
        Key_39.keys = _Key_39_allKeys[_Key_39_allKeys.length - 1].name;  // just the last key pressed
        Key_39.rt = _Key_39_allKeys[_Key_39_allKeys.length - 1].rt;
        Key_39.duration = _Key_39_allKeys[_Key_39_allKeys.length - 1].duration;
        // was this correct?
        if (Key_39.keys == '2') {
            Key_39.corr = 1;
        } else {
            Key_39.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item39Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item39RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item39' ---
    for (const thisComponent of Item39Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item39.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_39.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_39.corr = 1;  // correct non-response
      } else {
         Key_39.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_39.corr, level);
    }
    psychoJS.experiment.addData('Key_39.keys', Key_39.keys);
    psychoJS.experiment.addData('Key_39.corr', Key_39.corr);
    if (typeof Key_39.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_39.rt', Key_39.rt);
        psychoJS.experiment.addData('Key_39.duration', Key_39.duration);
        routineTimer.reset();
        }
    
    Key_39.stop();
    // the Routine "Item39" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_40_allKeys;
var Item40Components;
function Item40RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item40' ---
    t = 0;
    Item40Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item40.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_40
    var time_left = 42
    if (!countdown_started){
        Item40Clock.reset()
        countdown_started = true
    }
    Key_40.keys = undefined;
    Key_40.rt = undefined;
    _Key_40_allKeys = [];
    // keep track of which components have finished
    Item40Components = [];
    Item40Components.push(image_40);
    Item40Components.push(timer_text_40);
    Item40Components.push(Question_40);
    Item40Components.push(Answers_40);
    Item40Components.push(Key_40);
    
    for (const thisComponent of Item40Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item40RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item40' ---
    // get current time
    t = Item40Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_40
    time_left = Math.ceil(42 - Item40Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_40* updates
    if (t >= 0.0 && image_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_40.tStart = t;  // (not accounting for frame time here)
      image_40.frameNStart = frameN;  // exact frame index
      
      image_40.setAutoDraw(true);
    }
    
    
    if (timer_text_40.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_40.setText(`${time_left}`, false);
    }
    
    // *timer_text_40* updates
    if (t >= 32 && timer_text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_40.tStart = t;  // (not accounting for frame time here)
      timer_text_40.frameNStart = frameN;  // exact frame index
      
      timer_text_40.setAutoDraw(true);
    }
    
    
    // *Question_40* updates
    if (t >= 2 && Question_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_40.tStart = t;  // (not accounting for frame time here)
      Question_40.frameNStart = frameN;  // exact frame index
      
      Question_40.setAutoDraw(true);
    }
    
    
    // *Answers_40* updates
    if (t >= 2 && Answers_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_40.tStart = t;  // (not accounting for frame time here)
      Answers_40.frameNStart = frameN;  // exact frame index
      
      Answers_40.setAutoDraw(true);
    }
    
    
    // *Key_40* updates
    if (t >= 2.0 && Key_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_40.tStart = t;  // (not accounting for frame time here)
      Key_40.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_40.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_40.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_40.clearEvents(); });
    }
    
    if (Key_40.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_40.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_40_allKeys = _Key_40_allKeys.concat(theseKeys);
      if (_Key_40_allKeys.length > 0) {
        Key_40.keys = _Key_40_allKeys[_Key_40_allKeys.length - 1].name;  // just the last key pressed
        Key_40.rt = _Key_40_allKeys[_Key_40_allKeys.length - 1].rt;
        Key_40.duration = _Key_40_allKeys[_Key_40_allKeys.length - 1].duration;
        // was this correct?
        if (Key_40.keys == '1') {
            Key_40.corr = 1;
        } else {
            Key_40.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item40Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item40RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item40' ---
    for (const thisComponent of Item40Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item40.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_40.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_40.corr = 1;  // correct non-response
      } else {
         Key_40.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_40.corr, level);
    }
    psychoJS.experiment.addData('Key_40.keys', Key_40.keys);
    psychoJS.experiment.addData('Key_40.corr', Key_40.corr);
    if (typeof Key_40.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_40.rt', Key_40.rt);
        psychoJS.experiment.addData('Key_40.duration', Key_40.duration);
        routineTimer.reset();
        }
    
    Key_40.stop();
    // the Routine "Item40" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_41_allKeys;
var Item41Components;
function Item41RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item41' ---
    t = 0;
    Item41Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item41.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_41
    var time_left = 42
    if (!countdown_started){
        Item41Clock.reset()
        countdown_started = true
    }
    Key_41.keys = undefined;
    Key_41.rt = undefined;
    _Key_41_allKeys = [];
    // keep track of which components have finished
    Item41Components = [];
    Item41Components.push(image_41);
    Item41Components.push(timer_text_41);
    Item41Components.push(Question_41);
    Item41Components.push(Answers_41);
    Item41Components.push(Key_41);
    
    for (const thisComponent of Item41Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item41RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item41' ---
    // get current time
    t = Item41Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_41
    time_left = Math.ceil(42 - Item41Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_41* updates
    if (t >= 0.0 && image_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_41.tStart = t;  // (not accounting for frame time here)
      image_41.frameNStart = frameN;  // exact frame index
      
      image_41.setAutoDraw(true);
    }
    
    
    if (timer_text_41.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_41.setText(`${time_left}`, false);
    }
    
    // *timer_text_41* updates
    if (t >= 32 && timer_text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_41.tStart = t;  // (not accounting for frame time here)
      timer_text_41.frameNStart = frameN;  // exact frame index
      
      timer_text_41.setAutoDraw(true);
    }
    
    
    // *Question_41* updates
    if (t >= 2 && Question_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_41.tStart = t;  // (not accounting for frame time here)
      Question_41.frameNStart = frameN;  // exact frame index
      
      Question_41.setAutoDraw(true);
    }
    
    
    // *Answers_41* updates
    if (t >= 2 && Answers_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_41.tStart = t;  // (not accounting for frame time here)
      Answers_41.frameNStart = frameN;  // exact frame index
      
      Answers_41.setAutoDraw(true);
    }
    
    
    // *Key_41* updates
    if (t >= 2.0 && Key_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_41.tStart = t;  // (not accounting for frame time here)
      Key_41.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_41.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_41.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_41.clearEvents(); });
    }
    
    if (Key_41.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_41.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_41_allKeys = _Key_41_allKeys.concat(theseKeys);
      if (_Key_41_allKeys.length > 0) {
        Key_41.keys = _Key_41_allKeys[_Key_41_allKeys.length - 1].name;  // just the last key pressed
        Key_41.rt = _Key_41_allKeys[_Key_41_allKeys.length - 1].rt;
        Key_41.duration = _Key_41_allKeys[_Key_41_allKeys.length - 1].duration;
        // was this correct?
        if (Key_41.keys == '1') {
            Key_41.corr = 1;
        } else {
            Key_41.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item41Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item41RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item41' ---
    for (const thisComponent of Item41Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item41.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_41.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_41.corr = 1;  // correct non-response
      } else {
         Key_41.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_41.corr, level);
    }
    psychoJS.experiment.addData('Key_41.keys', Key_41.keys);
    psychoJS.experiment.addData('Key_41.corr', Key_41.corr);
    if (typeof Key_41.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_41.rt', Key_41.rt);
        psychoJS.experiment.addData('Key_41.duration', Key_41.duration);
        routineTimer.reset();
        }
    
    Key_41.stop();
    // the Routine "Item41" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_42_allKeys;
var Item42Components;
function Item42RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item42' ---
    t = 0;
    Item42Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item42.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_42
    var time_left = 42
    if (!countdown_started){
        Item42Clock.reset()
        countdown_started = true
    }
    Key_42.keys = undefined;
    Key_42.rt = undefined;
    _Key_42_allKeys = [];
    // keep track of which components have finished
    Item42Components = [];
    Item42Components.push(image_42);
    Item42Components.push(timer_text_42);
    Item42Components.push(Answers_42);
    Item42Components.push(Key_42);
    Item42Components.push(Question_image);
    
    for (const thisComponent of Item42Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item42RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item42' ---
    // get current time
    t = Item42Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_42
    time_left = Math.ceil(42 - Item42Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_42* updates
    if (t >= 0.0 && image_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_42.tStart = t;  // (not accounting for frame time here)
      image_42.frameNStart = frameN;  // exact frame index
      
      image_42.setAutoDraw(true);
    }
    
    
    if (timer_text_42.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_42.setText(`${time_left}`, false);
    }
    
    // *timer_text_42* updates
    if (t >= 32 && timer_text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_42.tStart = t;  // (not accounting for frame time here)
      timer_text_42.frameNStart = frameN;  // exact frame index
      
      timer_text_42.setAutoDraw(true);
    }
    
    
    // *Answers_42* updates
    if (t >= 2 && Answers_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_42.tStart = t;  // (not accounting for frame time here)
      Answers_42.frameNStart = frameN;  // exact frame index
      
      Answers_42.setAutoDraw(true);
    }
    
    
    // *Key_42* updates
    if (t >= 2.0 && Key_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_42.tStart = t;  // (not accounting for frame time here)
      Key_42.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_42.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_42.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_42.clearEvents(); });
    }
    
    if (Key_42.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_42.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_42_allKeys = _Key_42_allKeys.concat(theseKeys);
      if (_Key_42_allKeys.length > 0) {
        Key_42.keys = _Key_42_allKeys[_Key_42_allKeys.length - 1].name;  // just the last key pressed
        Key_42.rt = _Key_42_allKeys[_Key_42_allKeys.length - 1].rt;
        Key_42.duration = _Key_42_allKeys[_Key_42_allKeys.length - 1].duration;
        // was this correct?
        if (Key_42.keys == '2') {
            Key_42.corr = 1;
        } else {
            Key_42.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Question_image* updates
    if (t >= 2 && Question_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_image.tStart = t;  // (not accounting for frame time here)
      Question_image.frameNStart = frameN;  // exact frame index
      
      Question_image.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item42Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item42RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item42' ---
    for (const thisComponent of Item42Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item42.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_42.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_42.corr = 1;  // correct non-response
      } else {
         Key_42.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_42.corr, level);
    }
    psychoJS.experiment.addData('Key_42.keys', Key_42.keys);
    psychoJS.experiment.addData('Key_42.corr', Key_42.corr);
    if (typeof Key_42.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_42.rt', Key_42.rt);
        psychoJS.experiment.addData('Key_42.duration', Key_42.duration);
        routineTimer.reset();
        }
    
    Key_42.stop();
    // the Routine "Item42" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_43_allKeys;
var Item43Components;
function Item43RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item43' ---
    t = 0;
    Item43Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item43.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_43
    var time_left = 42
    if (!countdown_started){
        Item43Clock.reset()
        countdown_started = true
    }
    Key_43.keys = undefined;
    Key_43.rt = undefined;
    _Key_43_allKeys = [];
    // keep track of which components have finished
    Item43Components = [];
    Item43Components.push(image_43);
    Item43Components.push(timer_text_43);
    Item43Components.push(Question_43);
    Item43Components.push(Answers_43);
    Item43Components.push(Key_43);
    
    for (const thisComponent of Item43Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item43RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item43' ---
    // get current time
    t = Item43Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_43
    time_left = Math.ceil(42 - Item43Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_43* updates
    if (t >= 0.0 && image_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_43.tStart = t;  // (not accounting for frame time here)
      image_43.frameNStart = frameN;  // exact frame index
      
      image_43.setAutoDraw(true);
    }
    
    
    if (timer_text_43.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_43.setText(`${time_left}`, false);
    }
    
    // *timer_text_43* updates
    if (t >= 32 && timer_text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_43.tStart = t;  // (not accounting for frame time here)
      timer_text_43.frameNStart = frameN;  // exact frame index
      
      timer_text_43.setAutoDraw(true);
    }
    
    
    // *Question_43* updates
    if (t >= 2 && Question_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_43.tStart = t;  // (not accounting for frame time here)
      Question_43.frameNStart = frameN;  // exact frame index
      
      Question_43.setAutoDraw(true);
    }
    
    
    // *Answers_43* updates
    if (t >= 2 && Answers_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_43.tStart = t;  // (not accounting for frame time here)
      Answers_43.frameNStart = frameN;  // exact frame index
      
      Answers_43.setAutoDraw(true);
    }
    
    
    // *Key_43* updates
    if (t >= 2.0 && Key_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_43.tStart = t;  // (not accounting for frame time here)
      Key_43.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_43.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_43.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_43.clearEvents(); });
    }
    
    if (Key_43.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_43.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_43_allKeys = _Key_43_allKeys.concat(theseKeys);
      if (_Key_43_allKeys.length > 0) {
        Key_43.keys = _Key_43_allKeys[_Key_43_allKeys.length - 1].name;  // just the last key pressed
        Key_43.rt = _Key_43_allKeys[_Key_43_allKeys.length - 1].rt;
        Key_43.duration = _Key_43_allKeys[_Key_43_allKeys.length - 1].duration;
        // was this correct?
        if (Key_43.keys == '4') {
            Key_43.corr = 1;
        } else {
            Key_43.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item43Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item43RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item43' ---
    for (const thisComponent of Item43Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item43.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_43.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_43.corr = 1;  // correct non-response
      } else {
         Key_43.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_43.corr, level);
    }
    psychoJS.experiment.addData('Key_43.keys', Key_43.keys);
    psychoJS.experiment.addData('Key_43.corr', Key_43.corr);
    if (typeof Key_43.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_43.rt', Key_43.rt);
        psychoJS.experiment.addData('Key_43.duration', Key_43.duration);
        routineTimer.reset();
        }
    
    Key_43.stop();
    // the Routine "Item43" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_44_allKeys;
var Item44Components;
function Item44RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item44' ---
    t = 0;
    Item44Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item44.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_44
    var time_left = 42
    if (!countdown_started){
        Item44Clock.reset()
        countdown_started = true
    }
    Key_44.keys = undefined;
    Key_44.rt = undefined;
    _Key_44_allKeys = [];
    // keep track of which components have finished
    Item44Components = [];
    Item44Components.push(image_44);
    Item44Components.push(timer_text_44);
    Item44Components.push(Question_44);
    Item44Components.push(Answers_44);
    Item44Components.push(Key_44);
    
    for (const thisComponent of Item44Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item44RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item44' ---
    // get current time
    t = Item44Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_44
    time_left = Math.ceil(42 - Item44Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_44* updates
    if (t >= 0.0 && image_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_44.tStart = t;  // (not accounting for frame time here)
      image_44.frameNStart = frameN;  // exact frame index
      
      image_44.setAutoDraw(true);
    }
    
    
    if (timer_text_44.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_44.setText(`${time_left}`, false);
    }
    
    // *timer_text_44* updates
    if (t >= 32 && timer_text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_44.tStart = t;  // (not accounting for frame time here)
      timer_text_44.frameNStart = frameN;  // exact frame index
      
      timer_text_44.setAutoDraw(true);
    }
    
    
    // *Question_44* updates
    if (t >= 2 && Question_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_44.tStart = t;  // (not accounting for frame time here)
      Question_44.frameNStart = frameN;  // exact frame index
      
      Question_44.setAutoDraw(true);
    }
    
    
    // *Answers_44* updates
    if (t >= 2 && Answers_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_44.tStart = t;  // (not accounting for frame time here)
      Answers_44.frameNStart = frameN;  // exact frame index
      
      Answers_44.setAutoDraw(true);
    }
    
    
    // *Key_44* updates
    if (t >= 2.0 && Key_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_44.tStart = t;  // (not accounting for frame time here)
      Key_44.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_44.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_44.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_44.clearEvents(); });
    }
    
    if (Key_44.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_44.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_44_allKeys = _Key_44_allKeys.concat(theseKeys);
      if (_Key_44_allKeys.length > 0) {
        Key_44.keys = _Key_44_allKeys[_Key_44_allKeys.length - 1].name;  // just the last key pressed
        Key_44.rt = _Key_44_allKeys[_Key_44_allKeys.length - 1].rt;
        Key_44.duration = _Key_44_allKeys[_Key_44_allKeys.length - 1].duration;
        // was this correct?
        if (Key_44.keys == '4') {
            Key_44.corr = 1;
        } else {
            Key_44.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item44Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item44RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item44' ---
    for (const thisComponent of Item44Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item44.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_44.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_44.corr = 1;  // correct non-response
      } else {
         Key_44.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_44.corr, level);
    }
    psychoJS.experiment.addData('Key_44.keys', Key_44.keys);
    psychoJS.experiment.addData('Key_44.corr', Key_44.corr);
    if (typeof Key_44.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_44.rt', Key_44.rt);
        psychoJS.experiment.addData('Key_44.duration', Key_44.duration);
        routineTimer.reset();
        }
    
    Key_44.stop();
    // the Routine "Item44" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_45_allKeys;
var Item45Components;
function Item45RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item45' ---
    t = 0;
    Item45Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item45.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_45
    var time_left = 42
    if (!countdown_started){
        Item45Clock.reset()
        countdown_started = true
    }
    Key_45.keys = undefined;
    Key_45.rt = undefined;
    _Key_45_allKeys = [];
    // keep track of which components have finished
    Item45Components = [];
    Item45Components.push(image_45);
    Item45Components.push(timer_text_45);
    Item45Components.push(Question_45);
    Item45Components.push(Answers_45);
    Item45Components.push(Key_45);
    
    for (const thisComponent of Item45Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item45RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item45' ---
    // get current time
    t = Item45Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_45
    time_left = Math.ceil(42 - Item45Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_45* updates
    if (t >= 0.0 && image_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_45.tStart = t;  // (not accounting for frame time here)
      image_45.frameNStart = frameN;  // exact frame index
      
      image_45.setAutoDraw(true);
    }
    
    
    if (timer_text_45.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_45.setText(`${time_left}`, false);
    }
    
    // *timer_text_45* updates
    if (t >= 32 && timer_text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_45.tStart = t;  // (not accounting for frame time here)
      timer_text_45.frameNStart = frameN;  // exact frame index
      
      timer_text_45.setAutoDraw(true);
    }
    
    
    // *Question_45* updates
    if (t >= 2 && Question_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_45.tStart = t;  // (not accounting for frame time here)
      Question_45.frameNStart = frameN;  // exact frame index
      
      Question_45.setAutoDraw(true);
    }
    
    
    // *Answers_45* updates
    if (t >= 2 && Answers_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_45.tStart = t;  // (not accounting for frame time here)
      Answers_45.frameNStart = frameN;  // exact frame index
      
      Answers_45.setAutoDraw(true);
    }
    
    
    // *Key_45* updates
    if (t >= 2.0 && Key_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_45.tStart = t;  // (not accounting for frame time here)
      Key_45.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_45.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_45.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_45.clearEvents(); });
    }
    
    if (Key_45.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_45.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_45_allKeys = _Key_45_allKeys.concat(theseKeys);
      if (_Key_45_allKeys.length > 0) {
        Key_45.keys = _Key_45_allKeys[_Key_45_allKeys.length - 1].name;  // just the last key pressed
        Key_45.rt = _Key_45_allKeys[_Key_45_allKeys.length - 1].rt;
        Key_45.duration = _Key_45_allKeys[_Key_45_allKeys.length - 1].duration;
        // was this correct?
        if (Key_45.keys == '1') {
            Key_45.corr = 1;
        } else {
            Key_45.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item45Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item45RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item45' ---
    for (const thisComponent of Item45Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item45.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_45.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         Key_45.corr = 1;  // correct non-response
      } else {
         Key_45.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_45.corr, level);
    }
    psychoJS.experiment.addData('Key_45.keys', Key_45.keys);
    psychoJS.experiment.addData('Key_45.corr', Key_45.corr);
    if (typeof Key_45.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_45.rt', Key_45.rt);
        psychoJS.experiment.addData('Key_45.duration', Key_45.duration);
        routineTimer.reset();
        }
    
    Key_45.stop();
    // the Routine "Item45" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_46_allKeys;
var Item46Components;
function Item46RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item46' ---
    t = 0;
    Item46Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item46.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_46
    var time_left = 42
    if (!countdown_started){
        Item46Clock.reset()
        countdown_started = true
    }
    Key_46.keys = undefined;
    Key_46.rt = undefined;
    _Key_46_allKeys = [];
    // keep track of which components have finished
    Item46Components = [];
    Item46Components.push(image_46);
    Item46Components.push(timer_text_46);
    Item46Components.push(Question_46);
    Item46Components.push(Answers_46);
    Item46Components.push(Key_46);
    
    for (const thisComponent of Item46Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item46RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item46' ---
    // get current time
    t = Item46Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_46
    time_left = Math.ceil(42 - Item46Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_46* updates
    if (t >= 0.0 && image_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_46.tStart = t;  // (not accounting for frame time here)
      image_46.frameNStart = frameN;  // exact frame index
      
      image_46.setAutoDraw(true);
    }
    
    
    if (timer_text_46.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_46.setText(`${time_left}`, false);
    }
    
    // *timer_text_46* updates
    if (t >= 32 && timer_text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_46.tStart = t;  // (not accounting for frame time here)
      timer_text_46.frameNStart = frameN;  // exact frame index
      
      timer_text_46.setAutoDraw(true);
    }
    
    
    // *Question_46* updates
    if (t >= 2 && Question_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_46.tStart = t;  // (not accounting for frame time here)
      Question_46.frameNStart = frameN;  // exact frame index
      
      Question_46.setAutoDraw(true);
    }
    
    
    // *Answers_46* updates
    if (t >= 2 && Answers_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_46.tStart = t;  // (not accounting for frame time here)
      Answers_46.frameNStart = frameN;  // exact frame index
      
      Answers_46.setAutoDraw(true);
    }
    
    
    // *Key_46* updates
    if (t >= 2.0 && Key_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_46.tStart = t;  // (not accounting for frame time here)
      Key_46.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_46.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_46.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_46.clearEvents(); });
    }
    
    if (Key_46.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_46.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_46_allKeys = _Key_46_allKeys.concat(theseKeys);
      if (_Key_46_allKeys.length > 0) {
        Key_46.keys = _Key_46_allKeys[_Key_46_allKeys.length - 1].name;  // just the last key pressed
        Key_46.rt = _Key_46_allKeys[_Key_46_allKeys.length - 1].rt;
        Key_46.duration = _Key_46_allKeys[_Key_46_allKeys.length - 1].duration;
        // was this correct?
        if (Key_46.keys == '2') {
            Key_46.corr = 1;
        } else {
            Key_46.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item46Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item46RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item46' ---
    for (const thisComponent of Item46Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item46.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_46.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         Key_46.corr = 1;  // correct non-response
      } else {
         Key_46.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_46.corr, level);
    }
    psychoJS.experiment.addData('Key_46.keys', Key_46.keys);
    psychoJS.experiment.addData('Key_46.corr', Key_46.corr);
    if (typeof Key_46.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_46.rt', Key_46.rt);
        psychoJS.experiment.addData('Key_46.duration', Key_46.duration);
        routineTimer.reset();
        }
    
    Key_46.stop();
    // the Routine "Item46" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_47_allKeys;
var Item47Components;
function Item47RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item47' ---
    t = 0;
    Item47Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item47.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_47
    var time_left = 42
    if (!countdown_started){
        Item47Clock.reset()
        countdown_started = true
    }
    Key_47.keys = undefined;
    Key_47.rt = undefined;
    _Key_47_allKeys = [];
    // keep track of which components have finished
    Item47Components = [];
    Item47Components.push(image_47);
    Item47Components.push(timer_text_47);
    Item47Components.push(Question_47);
    Item47Components.push(Answers_47);
    Item47Components.push(Key_47);
    
    for (const thisComponent of Item47Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item47RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item47' ---
    // get current time
    t = Item47Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_47
    time_left = Math.ceil(42 - Item47Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_47* updates
    if (t >= 0.0 && image_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_47.tStart = t;  // (not accounting for frame time here)
      image_47.frameNStart = frameN;  // exact frame index
      
      image_47.setAutoDraw(true);
    }
    
    
    if (timer_text_47.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_47.setText(`${time_left}`, false);
    }
    
    // *timer_text_47* updates
    if (t >= 32 && timer_text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_47.tStart = t;  // (not accounting for frame time here)
      timer_text_47.frameNStart = frameN;  // exact frame index
      
      timer_text_47.setAutoDraw(true);
    }
    
    
    // *Question_47* updates
    if (t >= 2 && Question_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_47.tStart = t;  // (not accounting for frame time here)
      Question_47.frameNStart = frameN;  // exact frame index
      
      Question_47.setAutoDraw(true);
    }
    
    
    // *Answers_47* updates
    if (t >= 2 && Answers_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_47.tStart = t;  // (not accounting for frame time here)
      Answers_47.frameNStart = frameN;  // exact frame index
      
      Answers_47.setAutoDraw(true);
    }
    
    
    // *Key_47* updates
    if (t >= 2.0 && Key_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_47.tStart = t;  // (not accounting for frame time here)
      Key_47.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_47.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_47.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_47.clearEvents(); });
    }
    
    if (Key_47.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_47.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_47_allKeys = _Key_47_allKeys.concat(theseKeys);
      if (_Key_47_allKeys.length > 0) {
        Key_47.keys = _Key_47_allKeys[_Key_47_allKeys.length - 1].name;  // just the last key pressed
        Key_47.rt = _Key_47_allKeys[_Key_47_allKeys.length - 1].rt;
        Key_47.duration = _Key_47_allKeys[_Key_47_allKeys.length - 1].duration;
        // was this correct?
        if (Key_47.keys == '4') {
            Key_47.corr = 1;
        } else {
            Key_47.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item47Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item47RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item47' ---
    for (const thisComponent of Item47Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item47.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_47.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_47.corr = 1;  // correct non-response
      } else {
         Key_47.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_47.corr, level);
    }
    psychoJS.experiment.addData('Key_47.keys', Key_47.keys);
    psychoJS.experiment.addData('Key_47.corr', Key_47.corr);
    if (typeof Key_47.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_47.rt', Key_47.rt);
        psychoJS.experiment.addData('Key_47.duration', Key_47.duration);
        routineTimer.reset();
        }
    
    Key_47.stop();
    // the Routine "Item47" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_48_allKeys;
var Item48Components;
function Item48RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item48' ---
    t = 0;
    Item48Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Item48.started', globalClock.getTime());
    // Run 'Begin Routine' code from timer_code_48
    var time_left = 42
    if (!countdown_started){
        Item48Clock.reset()
        countdown_started = true
    }
    Key_48.keys = undefined;
    Key_48.rt = undefined;
    _Key_48_allKeys = [];
    // keep track of which components have finished
    Item48Components = [];
    Item48Components.push(image_48);
    Item48Components.push(timer_text_48);
    Item48Components.push(Question_48);
    Item48Components.push(Answers_48);
    Item48Components.push(Key_48);
    
    for (const thisComponent of Item48Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Item48RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item48' ---
    // get current time
    t = Item48Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from timer_code_48
    time_left = Math.ceil(42 - Item48Clock.getTime())
    if (time_left <= 0.0){
        countdown_started = false
        continueRoutine = false
    }
    
    // *image_48* updates
    if (t >= 0.0 && image_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_48.tStart = t;  // (not accounting for frame time here)
      image_48.frameNStart = frameN;  // exact frame index
      
      image_48.setAutoDraw(true);
    }
    
    
    if (timer_text_48.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer_text_48.setText(`${time_left}`, false);
    }
    
    // *timer_text_48* updates
    if (t >= 32 && timer_text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer_text_48.tStart = t;  // (not accounting for frame time here)
      timer_text_48.frameNStart = frameN;  // exact frame index
      
      timer_text_48.setAutoDraw(true);
    }
    
    
    // *Question_48* updates
    if (t >= 2 && Question_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Question_48.tStart = t;  // (not accounting for frame time here)
      Question_48.frameNStart = frameN;  // exact frame index
      
      Question_48.setAutoDraw(true);
    }
    
    
    // *Answers_48* updates
    if (t >= 2 && Answers_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Answers_48.tStart = t;  // (not accounting for frame time here)
      Answers_48.frameNStart = frameN;  // exact frame index
      
      Answers_48.setAutoDraw(true);
    }
    
    
    // *Key_48* updates
    if (t >= 2.0 && Key_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_48.tStart = t;  // (not accounting for frame time here)
      Key_48.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_48.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_48.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_48.clearEvents(); });
    }
    
    if (Key_48.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_48.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _Key_48_allKeys = _Key_48_allKeys.concat(theseKeys);
      if (_Key_48_allKeys.length > 0) {
        Key_48.keys = _Key_48_allKeys[_Key_48_allKeys.length - 1].name;  // just the last key pressed
        Key_48.rt = _Key_48_allKeys[_Key_48_allKeys.length - 1].rt;
        Key_48.duration = _Key_48_allKeys[_Key_48_allKeys.length - 1].duration;
        // was this correct?
        if (Key_48.keys == '4') {
            Key_48.corr = 1;
        } else {
            Key_48.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item48Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Item48RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item48' ---
    for (const thisComponent of Item48Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item48.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (Key_48.keys === undefined) {
      if (['None','none',undefined].includes('4')) {
         Key_48.corr = 1;  // correct non-response
      } else {
         Key_48.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_48.corr, level);
    }
    psychoJS.experiment.addData('Key_48.keys', Key_48.keys);
    psychoJS.experiment.addData('Key_48.corr', Key_48.corr);
    if (typeof Key_48.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_48.rt', Key_48.rt);
        psychoJS.experiment.addData('Key_48.duration', Key_48.duration);
        routineTimer.reset();
        }
    
    Key_48.stop();
    // the Routine "Item48" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_Goodbye_allKeys;
var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    GoodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    key_Goodbye.keys = undefined;
    key_Goodbye.rt = undefined;
    _key_Goodbye_allKeys = [];
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(text_Goodbye);
    GoodbyeComponents.push(key_Goodbye);
    GoodbyeComponents.push(image_Goodbye);
    GoodbyeComponents.push(text_endExp);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Goodbye* updates
    if (t >= 0.0 && text_Goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Goodbye.tStart = t;  // (not accounting for frame time here)
      text_Goodbye.frameNStart = frameN;  // exact frame index
      
      text_Goodbye.setAutoDraw(true);
    }
    
    
    // *key_Goodbye* updates
    if (t >= 0.0 && key_Goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Goodbye.tStart = t;  // (not accounting for frame time here)
      key_Goodbye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Goodbye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Goodbye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Goodbye.clearEvents(); });
    }
    
    if (key_Goodbye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Goodbye.getKeys({keyList: [], waitRelease: false});
      _key_Goodbye_allKeys = _key_Goodbye_allKeys.concat(theseKeys);
      if (_key_Goodbye_allKeys.length > 0) {
        key_Goodbye.keys = _key_Goodbye_allKeys[_key_Goodbye_allKeys.length - 1].name;  // just the last key pressed
        key_Goodbye.rt = _key_Goodbye_allKeys[_key_Goodbye_allKeys.length - 1].rt;
        key_Goodbye.duration = _key_Goodbye_allKeys[_key_Goodbye_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_Goodbye* updates
    if (t >= 0.0 && image_Goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_Goodbye.tStart = t;  // (not accounting for frame time here)
      image_Goodbye.frameNStart = frameN;  // exact frame index
      
      image_Goodbye.setAutoDraw(true);
    }
    
    
    // *text_endExp* updates
    if (t >= 0.0 && text_endExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_endExp.tStart = t;  // (not accounting for frame time here)
      text_endExp.frameNStart = frameN;  // exact frame index
      
      text_endExp.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Goodbye.corr, level);
    }
    psychoJS.experiment.addData('key_Goodbye.keys', key_Goodbye.keys);
    if (typeof key_Goodbye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Goodbye.rt', key_Goodbye.rt);
        psychoJS.experiment.addData('key_Goodbye.duration', key_Goodbye.duration);
        routineTimer.reset();
        }
    
    key_Goodbye.stop();
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
