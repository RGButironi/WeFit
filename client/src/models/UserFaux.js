import myFetch from "./myFetch";
export default {
    async add(name) {
        await myFetch('/newsfeed/getasyncdata',{name, time});
        }
    }