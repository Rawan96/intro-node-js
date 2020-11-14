const { findUser, deleteUser, fixId } = require('./users')

// write some tests
describe('users', () => {
    describe('fixId', ()=>{
        test('convert params id to integer', ()=>{
            expect(fixId('200')).toBe(200)
        })
    })


    describe('findUsers',()=>{
        test('Find user by id if user excist', async()=>{
            const user = await findUser(1)
            expect(user.id).toBe(1)
        })
    })

    describe('delete user', ()=>{
        test('delete user with id if user excist', async()=>{
            expect.assertions(2)
            
            const user = await findUser(1)
            const deleteUser = await deleteUser(user.id)
            expect(deleteUser.id).toBe(1)
        })
    })


  
})

