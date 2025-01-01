import { db } from '$lib/server/db';
import { json } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import path from 'path';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

//path for the files
const filesDir = path.resolve('upload');

export async function GET() {
  try {
    //read all the files name
    const files = await readdir(filesDir);
    const [result] = await db.select(
      {
        user:{ id: table.users.id, username: table.users.username },
        file:{ id: table.files.id, name: table.files.filename,path: table.files.filepath }
      }).from(table.files)
      .innerJoin(table.users, eq(table.files.userId, table.users.id))
      .where(eq(table.files.userId, table.users.id));
    
    return json({result:result});
  } catch (error) {
    console.error(error);
    return json({ error: 'Failed to read files directory' }, { status: 500 });
  }
}
