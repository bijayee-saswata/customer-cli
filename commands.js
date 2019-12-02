const program = require('commander');
const {prompt} = require('inquirer');
const {addCustomer, findCustomer} = require('./index');

//customer questions
const qustn = [
    {
        type : 'input',
        name: 'firstName',
        message: 'Customer First Name : '
    },
    {
        type : 'input',
        name: 'lastName',
        message: 'Customer Last Name : '
    },
    {
        type : 'input',
        name: 'phone',
        message: 'Customer Phone : '
    },
    {
        type : 'input',
        name: 'email',
        message: 'Customer Email Address : '
    },
];

program
.version('1.0.0')
.description('customer management system')

program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(()=>{
        prompt(qustn).then(ans => addCustomer(ans)).catch(err=> console.error(err));
    });

program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action(name => findCustomer(name));

program.parse(process.argv);