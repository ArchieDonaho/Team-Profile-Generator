// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

const Employee = require('../lib/Employee.js');

describe("Employee", ()=>{
    const employee = new Employee('Dave', '1234', 'dave@yahoo.com');

    describe("initialization",()=>{
        it("creates a new employee object", ()=>{
            expect(employee.name).toBe('Dave');
            expect(employee.id).toEqual(expect.stringContaining('1234'));
            expect(employee.email).toEqual(expect.stringContaining('@'));
        })
    });

    describe("getName()",()=>{
        it("returns the name of an employee", ()=>{
            expect(employee.getName()).toEqual('Dave');
        })
    });

    describe("getId()",()=>{
        it("returns the id of an employee", ()=>{
            expect(employee.getId()).toEqual(expect.stringContaining('1234'));
        })
    });

    describe("getEmail()",()=>{
        it("returns the email of an employee", ()=>{
            expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
        })
    });

    describe("getRole()",()=>{
        it("returns the role", ()=>{
            expect(employee.getRole()).toEqual('Employee');
        })
    });
});