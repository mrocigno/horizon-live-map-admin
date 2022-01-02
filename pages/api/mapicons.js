import connect from 'next-connect';
import { icons } from '../../src/model/listIcons'

const requester = connect({
    onNoMatch(req, res) {
        res.status(405).json({
            aaa: "erro"
        })
    }
})

requester.get((req, res) => {
    res.status(200).json(icons); 
})

export default requester;

export const config = {
    api: {
        bodyParser: true,
    },
};