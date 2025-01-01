
export const load = async (event) => {
    console.log(event.locals.user)
    return{user: event.locals.user || null}
};	

