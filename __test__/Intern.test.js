const Intern = require('../lib/Intern.js');

describe("Intern", ()=>{
    const intern = new Intern('Dave', '1234', 'dave@yahoo.com', 'Texas State University');

    describe("initialization",()=>{
        it("creates a new intern object", ()=>{
            expect(intern.name).toBe('Dave');
            expect(intern.id).toEqual(expect.stringContaining('1234'));
            expect(intern.email).toEqual(expect.stringContaining('@'));
            expect(intern.school).toEqual(expect.stringContaining('Texas State University'));
        })
    });

    describe("getName()",()=>{
        it("returns the name of an intern", ()=>{
            expect(intern.getName()).toEqual('Dave');
        })
    });

    describe("getId()",()=>{
        it("returns the id of an intern", ()=>{
            expect(intern.getId()).toEqual(expect.stringContaining('1234'));
        })
    });

    describe("getEmail()",()=>{
        it("returns the email of an intern", ()=>{
            expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
        })
    });

    describe("getRole()",()=>{
        it("returns the role", ()=>{
            expect(intern.getRole()).toEqual('Intern');
        })
    });

    describe("getSchool()",()=>{
        it("returns the school", ()=>{
            expect(intern.getSchool()).toEqual('Texas State University');
        })
    });

});