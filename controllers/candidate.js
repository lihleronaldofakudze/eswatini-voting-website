import { executeQuery } from "../config/db";

const allCandidates = async (req, res) => {
  let candidates = await executeQuery("SELECT * FROM candidates", []);
  res.json(candidates);
};

export { allCandidates };
