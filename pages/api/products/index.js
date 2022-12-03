 import { spareParts } from '../../../spareParts'

export default function handler(req,res) {
    console.log(req.query)
    res.status(200).json(spareParts)
}