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
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4"
            },
            {
            id: 2,
            name: "Core",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/38-+es2015-+functions+minus+'function'.mp4"
            },
            {
            id: 3,
            name: "Legs",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 4,
            name: "Cardio",
            description: `<p>Dumbell Curls.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: 'https://www.youtube.com/watch?v=Ku20ZrKFY4Q'
            },
            {
            id: 5,
            name: "Yoga",
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