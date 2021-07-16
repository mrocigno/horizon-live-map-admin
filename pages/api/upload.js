import connect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/places",
        filename: (req, file, cb) => {
            const splited = file.originalname.split(".");
            const extension = splited[splited.length - 1];
            const r = Math.random().toString(36).substring(7);
            const name = `${r}.${extension}`;

            console.log("extension:", extension);
            console.log("random name", name);
            return cb(null, name);
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

    console.log(req.body);

    fs.readFile('./public/data/data.json', 'utf8', (err, data) => {
        const objData = JSON.parse(data);
        const reqData = {...req.body}

        const markerData = JSON.parse(req.body.marker);
        reqData.id = objData.length;
        reqData.marker = markerData;
        reqData.images = [].concat(req.files.map((e) => (e.filename)));
        objData.push(reqData);

        const logger = fs.createWriteStream('./public/data/data.json');

        logger.write(JSON.stringify(objData));
    });

    res.status(200).json({data: "yeah"});
})

export default teste;

export const config = {
    api: {
        bodyParser: false,
    },
};