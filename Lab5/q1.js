app.get('/users',(req,res)=>{
const users=fs.readFileSync('./users.txt');
const usersObjects=[];
const lines=users.toString().split('\n');
lines.forEach((line)=>{
    const tokens=line.split('-');
    const user={
        id:tokens[0],
        firstname:tokens[1],
        lastName:tokens[2]
    }
    usersObjects.push(user)
})
res.json(userObjects);
})

app.post('/users',(req,res)=>{
const users=fs.readFileSync('./users.txt');
const userObjects=[];
const lines=users.toString().split('\n');
lines.forEach((line)=>{
const tokens=line.split('-');
const user={
id:tokens[0],
firstname:tokens[1],
lastName:tokens[2]

}

userObjects.push(user)

})

for(let i=0;i<userObjects.length;i++){
    if(userObjects[i].id==req.body.id){
        res.end('already in file')
    }
}
const writable=fs.createWriteStream('./users.txt');
writable.write(req.body.id + '-'+req.body.firstname+'-'+req.body.lastName);
writable.end();
res.end('success')

})