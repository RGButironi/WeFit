import myFetch from "./myFetch";
export default {
    State: {},
    Init(){
        myFetch('/userprofile')
            .then(x=> { this.State = x; 
                console.log(x);
            });
    }
}