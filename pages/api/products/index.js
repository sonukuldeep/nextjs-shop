//send all products in all catagories

import { spareParts } from '../../../data/spareParts'
import { hero } from '../../../data/hero'
import { antivirus } from '../../../data/antivirus'
import { bestSellers } from '../../../data/bestSeller'
import { customPCAndRepair } from '../../../data/customPCAndRepair'

export default function handler(req,res) {
    const allProducts = [...spareParts,...bestSellers]
    // const allProducts = [...spareParts,...antivirus,...bestSellers,...customPCAndRepair]
    res.status(200).json(allProducts)
}

    //id 1-8 hero
    //id 9-16 best seller
    //id 17-20 custom ps and repair
    //id 21-24 antivirus
    //id 25-36 spare parts