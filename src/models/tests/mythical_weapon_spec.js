"use strict";
// import {MythicalWeaponStore} from '../mythical_weapon'
Object.defineProperty(exports, "__esModule", { value: true });
const mythical_weapon_1 = require("../mythical_weapon");
const store = new mythical_weapon_1.MythicalWeaponStore();
describe('Mythical weapon model', () => {
    it('should have index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should return a list of prod', async () => {
        const res = await store.index();
        expect(res).toEqual([]);
    });
});
