import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        exercises: [
            {
            id: 1,
            name: "Upper Body",
            description: `<p>This upper-body routine includes a range of exercises that will help you to increase your strength and physique. 
            Follow along with us and get your upper-body strength to the next level!</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/biceps1.png',
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4",
            views: 1,
            difficulty: 75
            },
            {
            id: 2,
            name: "Core",
            description: `<p>Increasing core strength is one of the most overlooked areas of personal fitness. 
            This routine is designed to not only help you improve your core strength, but also help you avoid injuries that can occur because 
            of a weak core.</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/core.png',
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4",
            views: 0,
            difficulty: 95
            },
            {
            id: 3,
            name: "Legs",
            description: `<p>Poor lower-body strength is a stumbling block for many folks, that's why there's no skipping leg day with WeFit!Come build your lower body with this great routine!</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/legs.png',
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4",
            views: 0,
            difficulty: 55
            },
            {
            id: 4,
            name: "Cardio",
            description: `<p>Cardiovascular fitness is essential not only for fitness, but for optimal health and longevity.
            This routine incorporates a comprehensive cardio routine that will lay the foundation for fitness goals</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/cardio.png',
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4",
            views: 4,
            difficulty: 30
            },
            {
            id: 5,
            name: "Yoga",
            description: `<p>Feeling fit has a lot to do with range of motion. This routine will leave you feeling 
            years younger, use whenever you're feeling muscle tension, or just for fun!</p>`,
            thumbnail: 'http://cs.newpaltz.edu/~butironr1/WeFitPics/yoga.png',
            vidlink: "http://cs.newpaltz.edu/~butironr1/WeFitPics/IMG_0541.mp4",
            views: 0,
            difficulty: 25
            } 
          ],
        },
    mutations: {
        DELETE_EXERCISE(state, exerciseId){
            let exercises = state.exercises.filter(e => e.id != exerciseId)
            state.exercises = exercises;
        },
        INCREMENT() {
            return this.$state.views++;
            //return this.$state.views()++;
            }
        },
    actions: {
        async deleteExercise({commit}, exercise) {
            commit('DELETE_EXERCISE', exercise.id);
        },

        increment (context) {
            context.commit('INCREMENT')
          }
        },
    modules: {}
});