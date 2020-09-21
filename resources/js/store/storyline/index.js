// Storyline definition + all settings [Path/Type/Options/..]

// Video Settings
const VideoPath = '/video/';
const VideoType = '.mp4';

const state = {

  '1': {
    video: VideoPath + '1' + VideoType,
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
    // Setting for Score
    infectedMultiplier: 0.00,
    deadMultiplier: 0.00,
    infectedInterval: 5000,
    deadInterval: 25000,
    limit:10000,
    MinMaxInfected: [0,0]
  },
  '1.1': {
    video: VideoPath + '1.1' + VideoType,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
  '1.2': {
    video: VideoPath + '1.2' + VideoType,
    type: "continue",
    continueStory: {
      next: '2',
      response: 'Weiter'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
// Progress Number 2
  '2': {
    video: VideoPath + '2' + VideoType,
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
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
  '2.1': {
    video: VideoPath + '2.1' + VideoType,
    type: "continue",
    continueStory: {
      next: '3',
      response: 'Weiter'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
  '2.2': {
    video: VideoPath + '2.2' + VideoType,
    type: "continue",
    continueStory: {
      next: '4',
      response: 'Weiter'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
// Progress Number 3
  '3': {
    video: VideoPath + '3' + VideoType,
    type: "question",
    question: 'Wie lange sollen die Geschäfte noch geschlossen bleiben?',
    firstOption: {
      next: '3.1',
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    secondOption: {
      next: '4',
      response: 'Solange bis ein Impfmittel erhältlich ist'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
  '3.1': {
    video: VideoPath + '3.1' + VideoType,
    type: "question",
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: '3.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '3.1.1',
      response: 'Nein'
    },
    // Setting for Score
    infectedMultiplier: 0.01,
    deadMultiplier: 0.01,
    infectedInterval: 5000,
    deadInterval: 25000,
  },
  '3.1.1': {
    video: VideoPath + '3.1.1' + VideoType,
    type: "end",

  },
  '3.1.2': {
    video: VideoPath + '3.1.2' + VideoType,
    type: "end",
  },
  // Next Story
  '3.2': {
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
    }
  },
  '3.2.1': {
    video: VideoPath + '3.2.1' + VideoType,
    type: "end",

  },
  '3.2.2': {
    video: VideoPath + '3.2.2' + VideoType,
    type: "end",

  },
//  Progress Number 4
  '4': {
    video: VideoPath + '4' + VideoType,
    type: "question",
    question: 'Soll eine Ausgangssperre über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '4.1',
      response: 'Ja'
    },
    secondOption: {
      next: '4.2',
      response: 'Nein'
    }
  },
  '4.1': {
    video: VideoPath + '4.1' + VideoType,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '4.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '4.1.2',
      response: 'Nein'
    }
  },
  '4.1.1': {
    video: VideoPath + '4.1.1' + VideoType,
    type: "continue",
    continueStory: {
      next: '1',
      response: 'Ende'
    }
  },
  '4.1.2': {
    video: VideoPath + '4.1.2' + VideoType,
    type: "continue",
    continueStory: {
      next: '1',
      response: 'Ende'
    }
  },
  '4.2': {
    video: VideoPath + '4.2' + VideoType,
    type: "question",
    question: 'Soll eine AUsgangsspeere über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '4.2.1',
      response: 'Ja'
    },
    secondOption: {
      next: '4.2.2',
      response: 'Nein'
    }
  },
  '4.2.1': {
    video: VideoPath + '4.2.1' + VideoType,
    type: "question",
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '4.2.1.1',
      response: 'Ja'
    },
    secondOption: {
      next: '4.2.1.2',
      response: 'Nein'
    }
  },
  '4.2.1.1': {
    video: VideoPath + '4.2.1.1' + VideoType,
    type: "end",
  },
  '4.2.1.2': {
    video: VideoPath + '4.2.1.2' + VideoType,
    type: "end",
  },
  '4.2.2': {
    video: VideoPath + '4.2.2' + VideoType,
    type: "end",
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
