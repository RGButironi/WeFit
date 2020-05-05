import myFetch from "./myFetch";
export default {
    async add(name, time) {
        await myFetch('/userprofile/shareachievement',{name, time});
        }
    }