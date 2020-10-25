const { TestScheduler } = require("jest");

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!` ;

test('Greeting with the name' , () =>{
    const result = generateGreeting('Archu');
    expect(result).toBe('Hello Archu!')
})

test('Greeting with no name' , () =>{
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
})