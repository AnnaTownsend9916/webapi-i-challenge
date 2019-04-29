// implement your API here
//first make sure to remember to do yarn 
const express =  require('express');
const db= require('./data/db')

const server = express();
server.use(express.json())
//dont forget the homies lmao, this will send a response to the client
server.get('/', (req, res) => {
    res.send('Hey there');
});

server.post('/api/users', (req, res) => {
    const user = req.body
    db.insert(user)
    .then(
        user => {
            res.status(201).json(user)
        }
    ).catch( err => {
        res.status(500).json({error: err, message: "The user cannot be retrieved"})
    })
})
server.get ('/users', (req,res) =>{
    db.find()
    .then(user =>{
        res.status(200).json(user);
    })
    .catch(error =>{
        res.status(500).json({error : err, message: 'uh-oh'})
    })
})
server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id
db.findById(userId)
.then(user => {
    if(user){
        db.findById(userId) .then( finduser => {
            res.status(201).json(finduser)
        }
)
    } else{
        res.status(404).json( {error : err, message: 'user does not exist'})
    }
}
)
.catch(error =>{
    res.status(500).json({error = err, message: 'cannot be retrieved'})
})
})

server.delete('/api/users/:id', (req, res) => {
    const UserId = req.params.id
    db.remove(UserId)
    .then( user => {
        if(user){
            db.remove(UserId).then(
                removeuser => {
                    res.status(201).json(removeuser)
                }
            )
        }else{
            res.status(404).json({ message : 'does not exist'})
        }
        })
        .catch(error =>{
            res.status(500).json({ message:'user cannot be removed'})
        })
    })
})
