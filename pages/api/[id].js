import data from "./data/cases.json";

export default function personHandler(req, res) {
  const { query } = req;
  const { id } = query;
  const card = data.find((item) => item.tag === id);
  return card
    ? res.status(200).json(card)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
