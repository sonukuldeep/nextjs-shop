//sends a single product from a catagory

import { spareParts } from '../../../data/spareParts'
import { antivirus } from '../../../data/antivirus'
import { bestSellers } from '../../../data/bestSeller'
import { customPCAndRepair } from '../../../data/customPCAndRepair'
import { hero } from '../../../data/hero'

export default function handler({ query: { id } }, res) {

  //id 1-8 hero
  if (id > 0 && id < 9) {
    filterFunction(hero, id, res)
  }

  //id 9-16 best seller
  else if (id > 8 && id < 17) {
    filterFunction(bestSellers, id, res)
  }

  //id 17-20 custom ps and repair
  else if (id > 16 && id < 21) {
    filterFunction(customPCAndRepair, id, res)
  }

  //id 21-24 antivirus
  else if (id > 20 && id < 25) {
    filterFunction(antivirus, id, res)
  }

  //id 25-36 spare parts
  else if (id > 24 && id < 37) {
    filterFunction(spareParts, id, res)
  }

  else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }

}

function filterFunction(product, id, res) {
  const filtered = product.filter((parts) => parts.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
