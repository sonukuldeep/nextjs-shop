import { spareParts } from '../../../spareParts'

export default function handler({ query: { id } }, res) {
  const filtered = spareParts.filter((parts) => parts.id === id[0])
  console.log(id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}