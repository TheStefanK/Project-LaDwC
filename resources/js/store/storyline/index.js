// Storyline definition + all settings [Path/Type/Options/..]

// Video Settings
const VideoPath = '/video/';
const VideoType = '.mp4';
const OverlayTime = 22; // Sek

const state = {

  '1': {
    video: VideoPath + 'Akt_01' + VideoType,
    type: "question",
    question: 'Soll die Regierung Vorsichtsmaßnahmen treffen oder abwarten?',
    firstOption: {
      next: 1.1,
      response: 'Handeln',
    },
    secondOption: {
      next: 1.2,
      response: 'Abwarten',
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0],
    Overlay: OverlayTime,
  },
  '1.1': {
    video: VideoPath + 'Akt_01_1' + VideoType,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0]
  },
  '1.2': {
    video: VideoPath + '1.2' + VideoType,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    MinMaxInfected: [0, 0],
    MinMaxDead: [0, 0],
    // AKW: [1500000,2500000]
  },
// Progress Number 2
  '2': {
    video: VideoPath + 'Akt_02' + VideoType,
    type: "question",
    question: 'Alle Geschäfte des nicht alltäglichen Gebrauchs schließen und Ausgangsbeschänkungen?',
    firstOption: {
      next: '2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '2.2',
      response: 'Nein'
    },
    // Setting for Score
    MinMaxInfected: [1, 1],
    MinMaxDead: [0, 0],
    InfectedDelay: 20000,
    Overlay: OverlayTime,
  },
  '2.1': {
    video: VideoPath + 'Akt_02_Ja' + VideoType,
    type: "continue",
    continueStory: {
      next: '3.1',
      response: 'Weiter'
    },
    MinMaxInfected: [4500, 5500],
    MinMaxDead: [3, 5]
  },
  '2.2': {
    video: VideoPath + 'Akt_02_Nein' + VideoType,
    type: "continue",
    continueStory: {
      next: '3.2',
      response: 'Weiter'
    },
    MinMaxInfected: [9000, 11000],
    MinMaxDead: [10, 15]
  },
// Progress Number 3
  '3.1': {
    video: VideoPath + '3.1' + VideoType,
    type: "question",
    question: 'Wie lange sollen die Geschäfte noch geschlossen bleiben?',
    firstOption: {
      next: '3.1.1',
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    secondOption: {
      next: '3.2',
      response: 'Solange bis ein Impfmittel erhältlich ist'
    },
    MinMaxInfected: [12000, 13000],
    MinMaxDead: [90, 110],
    Overlay: OverlayTime,
  },
  '3.1.1': {
    video: VideoPath + '3.1.1' + VideoType,
    type: "question",
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: '3.1.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.1.1.2',
      response: 'Nein'
    },
    // Setting for Score
    MinMaxInfected: [13000, 14000],
    MinMaxDead: [200, 220],
    Overlay: OverlayTime,
  },

  // End from 3.1.1.X
  '3.1.1.1': {
    video: VideoPath + '3.1.1.1' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [384, 400]

  }, '3.1.1.2': {
    video: VideoPath + '3.1.1.1' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [640, 660]

  },

  // Next Story
  '3.1.2': {
    video: VideoPath + '3.2' + VideoType,
    type: "question",
    question: 'Illegale Demostrationen auflösen? Zur not mit Gewalt?',
    firstOption: {
      next: '3.2.1',
      response: 'Abwarten und Deeskalieren'
    },
    secondOption: {
      next: '3.2.2',
      response: 'Polizeieinsatz'
    },
    MinMaxInfected: [2850, 2950],
    MinMaxDead: [390, 410],
    Overlay: OverlayTime,
  },
  //End from 3.1.2.X
  '3.1.2.1': {
    video: VideoPath + '3.2.1' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [650, 660]
  },
  '3.1.2.2': {
    video: VideoPath + '3.2.2' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [650, 660]
  },
//  Progress Number 4
  '3.2': {
    video: VideoPath + '3.2' + VideoType,
    type: "question",
    question: 'Soll eine Ausgangssperre über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '3.2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.2',
      response: 'Nein'
    },
    MinMaxInfected: [33000, 35000],
    MinMaxDead: [650, 660],
    Overlay: OverlayTime,
  },
  '3.2.1': {
    video: VideoPath + '4.1' + VideoType,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '3.2.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.1.2',
      response: 'Nein'
    },
    MinMaxInfected: [56000, 57000],
    MinMaxDead: [1150, 1250]
  },
  //End from 3.2.1.X
  '3.2.1.1': {
    video: VideoPath + '3.2.1.1' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [1580, 1700]
  },
  '3.2.1.2': {
    video: VideoPath + '4.1.2' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [1580, 1760]
  },

  '3.2.2': {
    video: VideoPath + '4.2' + VideoType,
    type: "question",
    question: 'Soll eine Ausgangsspeere über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '3.2.2.1',
      response: 'Nein'
    },
    secondOption: {
      next: '3.2.2.2',
      response: 'Ja'
    },
    MinMaxInfected: [42000000, 430000000],
    MinMaxDead: [260000, 260600]
  },

  '3.2.2.1': {
    video: VideoPath + '3.2.2.1' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [3000000, 31450000],
    AKW: [1500000,1550000],
  },

  '3.2.2.2': {
    video: VideoPath + '4.2.1' + VideoType,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '3.2.2.2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.2.2.2.2',
      response: 'Nein'
    },
    MinMaxInfected: [7000000, 7010000],
    MinMaxDead: [380000, 388500],
  },

  '3.2.2.2.1': {
    video: VideoPath + '4.2.1.2' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [400000, 430500],
  },
  '3.2.2.2.2': {
    video: VideoPath + '4.2.2' + VideoType,
    type: "end",
    MinMaxInfected: [0, 0],
    MinMaxDead: [400000, 430500],
  },
};

const getters = {
  getStoryLineList: state => {
    return state;
  }
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
