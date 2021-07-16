import connect from 'next-connect';

const teste = connect({
    onNoMatch(req, res) {
        res.status(405).json({
            aaa: "erro"
        })
    }
})

teste.get((req, res) => {
    const fs = require('fs');

    fs.readFile('./public/data/data.json', 'utf8', (err, data) => {
        const objData = JSON.parse(data);
        res.status(200).json(objData); 
    });
})

export default teste;

export const config = {
    api: {
        bodyParser: true,
    },
};