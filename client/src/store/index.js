import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        exercises: [
            {
            id: 1,
            name: "Upperbody1",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png'
            },
            {
            id: 2,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png'
            },
            {
            id: 3,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png'
            },
            {
            id: 4,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png'
            },
            {
            id: 5,
            name: "Upperbody",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png'
            } 
          ],
        },
    mutations: {},
    actions: {},
    modules: {}
});