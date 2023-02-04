import client from "../database";

export type Weapon = {
    id: Number;
    name: string;
    type: string;
    weight: number;
}

export class MythicalWeaponStore{ //class will be representation of db
    async index(): Promise<Weapon[]>{ //list all items in db (calls to db are promises)
        try{
            const connection =  await client.connect();
            const sql = 'SELECT * FROM mythical_weapons' //select all from 
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }catch(err){
            throw new Error(`Cannot list the items in db. Error: ${err}`)
        }
    }

    
}