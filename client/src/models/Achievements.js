import myFetch from "./myFetch";
export default {
    async add(name) {
        await myFetch('/userprofile/shareachievement',{name});
        }
    }