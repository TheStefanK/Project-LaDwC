//Layout Import
const header = () => import('../../components/layout/header/index');
const footer = () => import('../../components/layout/footer/index');



const start = () => import('../../components/start/index');
const score = () => import('../../components/game/score');
const story_01 = () => import('../../components/game/index');

// import start from '../../components/start/index'
export default [
  {
    name: 'home',
    path: '/story',
    components: {
      header: header,
      story: start,
      footer: footer,
    }, meta: {
      title: 'Home',
    },
  },  {
    name: 'game',
    path: '/game',
    components: {
      story: story_01,
    },
  }
]
