import type { PageServerLoad } from "./lucia/$types";

export const load: PageServerLoad = async (event:PageServerLoad) => {
    console.log(event.locals.user)
    return{user: event.locals.user || null}
};	
