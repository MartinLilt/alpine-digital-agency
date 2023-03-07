import data from "./data/cases.json";

export default function getAllCards(_req, res) {
  return res.status(200).json(data);
}
