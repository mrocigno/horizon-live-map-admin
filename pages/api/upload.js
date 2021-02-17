import connect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/places",
        filename: (req, file, cb) => {
            console.log(file.originalname);
            return cb(null, file.originalname);
        }
    })
});

const teste = connect({
    onNoMatch(req, res) {
        res.status(405).json({
            aaa: "erro"
        })
    }
})

const middleware = upload.array("images");

teste.use(middleware);

teste.post((req, res) => {
    const fs = require('fs');

    fs.readFile('./public/data.json', 'utf8', (err, data) => {
        const objData = JSON.parse(data);
        
        const reqData = {...req.body}
        const markerData = JSON.parse(req.body.marker);
        reqData.marker = markerData;

        objData.push(reqData);
        console.log(objData);


        const logger = fs.createWriteStream('./public/data.json');

        logger.write(JSON.stringify(objData))
    });
    res.status(200).json({data: "yeah"});
})

export default teste;

export const config = {
    api: {
        bodyParser: false,
    },
};