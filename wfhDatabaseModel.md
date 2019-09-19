// user COLLECTION
{
\_id: ObjectId {
314514ezfsddfs
};
firstName: "string";
lastName: "string";
email: "string";
password: "string";
userDetails: "id"
}
//////////////////////////////////////

// user - details COLLECTION
{
firstName:"string",
lastName:"string"
\_id: ObjectId {
dsad141124121232
};
location: "id";
role: "id";
superiors: "[id,id]";
dates: "id"
}
//////////////////////////////////////

// location COLLECTION
{
\_id: ObjectId {
dsadasd1241241
};
name: "string";
abbrevation: "string";
userIds: "[id,id]";
}
//////////////////////////////////////

// role COLLECTION
{
\_id: ObjectId {
dsadd231312412421
};
name: "string",
userIds: "[id,id]";
}

//////////////////////////////////////

// holidays COLLECTION
{
\_id: ObjectId {
32i12n412n4123
};
type: "string";
name: "string";
date: "number unix"
}
//////////////////////////////////////

// days collection
{
\_id: ObjectId {
2132543431721
}  
 pto: {
days: {
\_id: ObjectId {
dsa412412
}
limit: 21,
days: [number unix]
},
pending: [number unix],
confirmed: [number unix]
},
wfh: {
days: {
\_id: ObjectId {
dsa412412
}
limit: 4,
days: [number unix]
},
pending: [number unix],
confirmed: [number unix]
}

}
