// create user
// POST -> /user
//REQ
{
    email: "aba@aba.com",
    password: "encodedPassword"
}

//RES
{
    id: "userId",
    email: "aba@aba.com",
}
//////////////////////



// login user
// POST -> /user/login
//REQ
{
    email: "aba@aba.com",
    password: "encodedPassword"
}

//RES  
TOKEN{USER ID}

//////////////////////

// details user
// GET -> "/user/details/:id"
//REQ
USER ID


//RES
Simplified User

