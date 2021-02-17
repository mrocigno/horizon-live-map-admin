import connect from 'next-connect';
import multer from 'multer';

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public",
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
    const logger = fs.createWriteStream('./public/teste.json', {
        flags: 'a'
    });
    res.status(200).json({data: "yeah"});
})

export default teste;

export const config = {
    api: {
        bodyParser: false,
    },
};