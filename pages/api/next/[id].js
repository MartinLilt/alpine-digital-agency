import data from "../data/cases.json";

export default function personHandler(req, res) {
  const { query } = req;
  const { id } = query;
  const maxValue = data.length;
  const currentObjIndex = data.findIndex((obj) => obj.tag === id);
  const nextCard =
    data[
      currentObjIndex < maxValue ? currentObjIndex + 1 : currentObjIndex - 1
    ];

  return nextCard
    ? res.status(200).json(nextCard)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}

// On the case page we have the NextCase component at the very bottom and for it we send a request to find the next case after the current one.
