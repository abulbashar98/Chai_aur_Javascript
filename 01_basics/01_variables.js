const accountId = 12345;
let accountEmail = "abulbawshar@gmail.com";
var accountPassword = "sdfsdfsfasd"
accountCity = "Kokkola"

// accountId = 2221111;

console.log(accountId);

//====> TypeError: Assignment to constant variable. Not Allowed

accountEmail = "ab@ab.com";
accountPassword = "Password"
accountCity = "Helsinki"


console.table([accountEmail,accountPassword,accountCity])

/*======>
    
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'ab@ab.com' │
│ 1       │ 'Password'  │
│ 2       │ 'Helsinki'  │
└─────────┴─────────────┘
*/

/*
Prefer not to use var
because of issue in block scope and functional scope
*/