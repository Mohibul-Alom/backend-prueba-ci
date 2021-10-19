import { UsersService } from '../src/users/users.service';

import cron from 'node-cron';

export const tasks = () => {

    console.log('Holii???')
    
    cron.schedule("*/30 * * * * *", function() {
        console.log("running a task every 30 seconds");
        controller.deletePastSession();
    });
    
    try {
        console.log('tasks-->')
         UsersService.findUsers();
    }catch(err) {
        console.error(err);
    }
}