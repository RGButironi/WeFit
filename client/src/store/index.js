import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        exercises: [
            {
            id: 1,
            name: "Upper Body",
            description: `<p>Dumbbell Curls are an excellent way to build upper-body strength.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 2,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 3,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 4,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 5,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            } 
          ],
        },
    mutations: {},
    actions: {},
    modules: {}
});