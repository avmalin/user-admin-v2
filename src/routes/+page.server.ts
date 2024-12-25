

import {  fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import {writeFileSync} from 'fs'
import * as table from '$lib/server/db/schema';
import * as auth from '$lib/server/auth.js'

export const actions = {
  //upload file action
  default: async ({ request ,locals}) => {
    if(!locals.user){
      return fail(400,{
        message:'You must be conncted to upload file'
      })
    }
    const formData = Object.fromEntries(await request.formData());
    if (!(formData.fileToUpload as File).name ||(formData.fileToUpload as File).name === 'undefined') {
      return fail(400, {
        error: true,
        message: 'You must provide a file to upload'
      });
    }

    const { fileToUpload } = formData as { fileToUpload: File };
    const maxSize = 5 * 1024 * 1024
    if (fileToUpload.size>maxSize){
        return fail(400,{
            error:true,
            message: 'The file is too big'
        })
    }
    writeFileSync(`upload/${fileToUpload.name}`,Buffer.from(await fileToUpload.arrayBuffer()))
    try{
        let fileId = auth.generateId()
        await db.insert(table.files).values({id:fileId, userId:locals.user?.id,filename:fileToUpload.name,filepath:`upload/${fileToUpload.name}`});
    }
    catch(e){
        console.log(e)
		return fail(500, { message: 'An error has occurred' });
    }
    return { success:true,message: 'הקובץ הועלה בהצלחה' };
  }
  

};