// import {MythicalWeaponStore} from '../mythical_weapon'

import { MythicalWeaponStore } from "../mythical_weapon";

const store = new MythicalWeaponStore()

describe('Mythical weapon model', ()=>{
    it('should have index method', ()=>{
        expect(store.index).toBeDefined();
    })

    it('should return a list of prod', async ()=>{
        const res = await store.index()
        expect(res).toEqual([])
    })
})