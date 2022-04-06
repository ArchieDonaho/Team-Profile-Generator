const Manager = require('../lib/Manager.js');

describe("Manger", ()=>{
    const manager = new Manager('Dave', '1234', 'dave@yahoo.com', '58');

    describe("initialization",()=>{
        it("creates a new manager object", ()=>{
            expect(manager.name).toBe('Dave');
            expect(manager.id).toEqual(expect.stringContaining('1234'));
            expect(manager.email).toEqual(expect.stringContaining('@'));
            expect(manager.officeNumber).toEqual(expect.stringContaining('58'));
        })
    });

    describe("getName()",()=>{
        it("returns the name of a manager", ()=>{
            expect(manager.getName()).toEqual('Dave');
        })
    });

    describe("getId()",()=>{
        it("returns the id of a manager", ()=>{
            expect(manager.getId()).toEqual(expect.stringContaining('1234'));
        })
    });

    describe("getEmail()",()=>{
        it("returns the email of a manager", ()=>{
            expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
        })
    });

    describe("getRole()",()=>{
        it("returns the role", ()=>{
            expect(manager.getRole()).toEqual('Manager');
        })
    });

});