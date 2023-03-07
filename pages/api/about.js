import data from "./data/about.json";

export default function getAboutPageContent(_req, res) {
  return res.status(200).json(data);
}
