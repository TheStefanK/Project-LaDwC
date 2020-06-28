// Storyline definition + all settings [Path/Type/Options/..]

// Video Settings
const VideoPath = '/video/';
const VideoType = '.mp4';

const state = {

  '1': {
    video: VideoPath + 1 + VideoType,
    question: 'Soll die Regierung Vorsichtsmaßnahmen treffen oder abwarten',
    firstOption: {
      next: 1.1,
      response: 'Handeln'
    },
    SecandOption: {
      next: 1.2,
      response: 'Abwarten'
    },
  },
  '1.1': {
    video: VideoPath + '1.1' + VideoType,
    question: '..',
    firstOption: {
      next: '2',
      response: 'Weiter'
    },
    SecandOption: {
      next: '2',
      response: 'Weiter'
    },
    ContinueStory: {
      next: '2',
      response: 'Weiter'
    }
  },
  '1.2': {
    video: VideoPath + '1.2' + VideoType,
    question: undefined,
    continueStory: {
      next: '2',
      response: 'Weiter'
    }
  },
// Progress Number 2
  '2': {
    video: VideoPath + '2' + VideoType,
    question: 'Alle Geschäfte des nicht alltäglichen Gebrauchs schließen und Ausgangsbeschänkungen?',
    firstOption: {
      next: '2.1',
      response: 'Ja'
    },
    SecandOption: {
      next: '2.2',
      response: 'Nein'
    },
  },
  '2.1': {
    video: VideoPath + 2.1 + VideoType,
    question: undefined,
    ContinueStory: {
      next: 3,
      response: 'Weiter'
    }
  },
  '2.2': {
    video: VideoPath + 2.2 + VideoType,
    question: undefined,
    ContinueStory: {
      next: 4,
      response: 'Weiter'
    }
  },
// Progress Number 3
  '3': {
    video: VideoPath + 3 + VideoType,
    question: 'Wie lange sollen die Geschäfte noch geschlossen bleiben?',
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
  },
  '3.1': {
    video: VideoPath + 3.1 + VideoType,
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: 5,
      response: 'Ja'
    },
    SecandOption: {
      next: 5,
      response: 'Nein'
    }
  },
  '3.1.1': {
    video: VideoPath + 3.1 + VideoType,
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: 5,
      response: 'Ja'
    },
    SecandOption: {
      next: 5,
      response: 'Nein'
    }
  },
  '3.1.2': {
    video: VideoPath + 3.1 + VideoType,
    question: 'Hilfpaket für Unternehmmerinnen und Unternehmer',
    firstOption: {
      next: 5,
      response: 'Ja'
    },
    SecandOption: {
      next: 5,
      response: 'Nein'
    }
  },
  // Next Story
  '3.2': {
    video: VideoPath + 3.1 + VideoType,
    question: 'Illegale Demostrationen auflösen? Zur not mit Gewalt?',
    firstOption: {
      next: '3.2.1',
      response: 'Abwarten und Deeskalieren'
    },
    SecandOption: {
      next: '3.2.2',
      response: 'Polizeieinsatz'
    }
  },
  '3.2.1': {
    video: VideoPath + 3.1 + VideoType,
    question: undefined,
    firstOption: {
      next: 5,
      response: 'Ja'
    },
    SecandOption: {
      next: 5,
      response: 'Nein'
    }
  },
  '3.2.2': {
    video: VideoPath + 3.1 + VideoType,
    question: undefined,
    firstOption: {
      next: 5,
      response: 'Ja'
    },
    SecandOption: {
      next: 5,
      response: 'Nein'
    }
  },
//  Progress Number 4
  '4': {
    video: VideoPath + 3 + VideoType,
    question: 'Soll eine Ausgangssperre über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '4.1',
      response: 'Ja'
    },
    SecandOption: {
      next: '4.2',
      response: 'Nein'
    }
  },
  '4.1': {
    video: VideoPath + '4.1' + VideoType,
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '4.1.1',
      response: 'Ja'
    },
    SecandOption: {
      next: '4.1.2',
      response: 'Nein'
    }
  },
  '4.1.1': {
    video: VideoPath + 3 + VideoType,
    question: undefined,
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
  },
  '4.1.2': {
    video: VideoPath + 3 + VideoType,
    question: undefined,
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
  },
  '4.2': {
    video: VideoPath + 3 + VideoType,
    question: 'Soll eine AUsgangsspeere über die Risikogruppe und die Hauptüberträger verhängt werden?',
    firstOption: {
      next: '4.2.1',
      response: 'Ja'
    },
    SecandOption: {
      next: '4.2.2',
      response: 'Nein'
    }
  },
  '4.2.1': {
    video: VideoPath + 3 + VideoType,
    question: 'Hilfspaket für UnternehmerInnen',
    firstOption: {
      next: '4.2.1.1',
      response: 'Ja'
    },
    SecandOption: {
      next: '4.2.1.2',
      response: 'Nein'
    }
  },
  '4.2.1.1': {
    video: VideoPath + 3 + VideoType,
    question: undefined,
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
  },
  '4.2.1.2': {
    video: VideoPath + 3 + VideoType,
    question: undefined,
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
  },
  '4.2.2': {
    video: VideoPath + 3 + VideoType,
    question: undefined,
    firstOption: {
      next: 3.1,
      response: 'Bis Ostern (ca. 2 Wochen)'
    },
    SecandOption: {
      next: 4,
      response: 'Solange bis ein Impfmittel erhältlich ist'
    }
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
