import { executeQuery } from "../config/db";

const getVotings = async (req, res) => {
  let votings = await executeQuery("SELECT * FROM votings", []);
  res.json(votings);
};

const vote = async (req, res) => {
  await executeQuery(
    "INSERT INTO votings (candidates_id, voter_id, voted_for) VALUES (?, ?, ?)",
    [req.body.candidates_id, req.body.voter_id, req.body.voted_for]
  );
  res.send({ result: 0 });
};

export { getVotings, vote };
