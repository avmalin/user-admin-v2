import { redirect } from "@sveltejs/kit";
import { page} from '$app/state'

export const load = async (event) => {
    //console.log(event.route.id);   
    if (!event.locals.user && event.route.id !== '/login') {
        throw redirect(302, '/login');
    }
    return{user: event.locals.user}
};	

