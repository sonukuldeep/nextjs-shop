//send catagory of products

import { spareParts } from '../../../data/spareParts'
import { hero } from '../../../data/hero'
import { antivirus } from '../../../data/antivirus'
import { bestSellers } from '../../../data/bestSeller'
import { customPCAndRepair } from '../../../data/customPCAndRepair'


export default function handler(req, res) {
    const { query: { catagory } } = req
    if (catagory === "spareparts")
        res.status(200).json(spareParts)

    else if (catagory === "hero")
        res.status(200).json(hero)

    else if (catagory === "antivirus")
        res.status(200).json(antivirus)

    else if (catagory === "bestseller")
        res.status(200).json(bestSellers)

    else if (catagory === "custompcandrepair")
        res.status(200).json(customPCAndRepair)

    else {
        res
            .status(404)
            .json({ message: `Product not found` })
    }

}