import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test ('should set up remove Expense object ', () => {
    const action = removeExpense({id : 'sample id'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id : 'sample id'
    })
})

test ('should set up edit Expense object',()=>{
    const action = editExpense('sample id', {
            description : 'water bill',
            note: 'bills',
            amount : 100
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'sample id',
        updates : {
            description : 'water bill',
            note: 'bills',
            amount : 100
        }
    })

})

test('should set up add expense action object with provided values',()=>{
    const expenseData = {
        description : 'water bill',
        note: 'bills',
        amount : 100,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense action object with default values',()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            description : '',
        note: '',
        amount : 0,
        createdAt: 0,
        id :expect.any(String)
            }
    })
})