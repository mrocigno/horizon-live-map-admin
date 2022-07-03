import connect from "next-connect"
import { categories } from "../../src/model/categories"

const middleware = connect({
    onNoMatch(req, res) {
        res.status(405).json({
            aaa: "erro"
        })
    }
})

middleware.get((req, res) => {
    res.status(200).json(categories);
})

export default middleware;