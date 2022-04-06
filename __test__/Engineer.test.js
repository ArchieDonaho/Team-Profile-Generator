const Engineer = require('../lib/Engineer.js');

describe("Engineer", ()=>{
    const engineer = new Engineer('Dave', '1234', 'dave@yahoo.com', 'ArchieDonaho');

    describe("initialization",()=>{
        it("creates a new engineer object", ()=>{
            expect(engineer.name).toBe('Dave');
            expect(engineer.id).toEqual(expect.stringContaining('1234'));
            expect(engineer.email).toEqual(expect.stringContaining('@'));
            expect(engineer.github).toEqual(expect.stringContaining('ArchieDonaho'));
        })
    });

    describe("getName()",()=>{
        it("returns the name of a engineer", ()=>{
            expect(engineer.getName()).toEqual('Dave');
        })
    });

    describe("getId()",()=>{
        it("returns the id of a engineer", ()=>{
            expect(engineer.getId()).toEqual(expect.stringContaining('1234'));
        })
    });

    describe("getEmail()",()=>{
        it("returns the email of a engineer", ()=>{
            expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
        })
    });

    describe("getRole()",()=>{
        it("returns the role", ()=>{
            expect(engineer.getRole()).toEqual('Engineer');
        })
    });

    describe("getGithub()",()=>{
        it("returns the github account", ()=>{
            expect(engineer.getGithub()).toEqual('ArchieDonaho');
        })
    });

});