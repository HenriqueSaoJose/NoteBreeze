import {drizzle} from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'


import * as dotenv from 'dotenv'
import * as schema from '../../../../migrations/schema'
dotenv.config({path:'.env'})


if (!process.env.DATABASE_URL) {
  console.log("Can´t find url database !");

}

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client,{schema})
const migrateDb =async () => {
  try{
    console.log("Migratin client");
    await migrate(db,{migrationsFolder:'migrations'})
    console.log("successfully migrated client");
    

  }catch(err){
    console.log(`Error migrating client ${err}`);
  }
}
migrateDb()
export default db ;