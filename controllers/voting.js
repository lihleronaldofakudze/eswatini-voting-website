import { executeQuery } from "../config/db";

const getVoting = async (req, res) => {
  let voting = await executeQuery(
    "SELECT * FROM votings WHEERE candidates_id = ?",
    [req.query.voting]
  );
  res.json(voting);
};

const vote = async (req, res) => {
  await executeQuery(
    "INSERT INTO votings (candidates_id, voter_id, voted_for) VALUES (?, ?, ?)",
    [req.body.candidates_id, req.body.voter_id, req.body.voted_for]
  );
  res.send({ result: 0 });
};

export { getVoting, vote };
