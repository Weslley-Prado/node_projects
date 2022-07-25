import { listen } from './config/server';

listen(3005, function(){
    console.log("Server is on")
})