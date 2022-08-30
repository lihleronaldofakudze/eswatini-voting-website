import { executeQuery } from "../config/db";

const register = async (req, res) => {
  await executeQuery(
    "INSERT INTO voters (natid, fullname, age, region, city, email, password, voted) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.natid,
      req.body.fullname,
      req.body.age,
      req.body.region,
      req.body.city,
      req.body.email,
      req.body.password,
      0,
    ]
  );
  res.send({ result: true });
};

const allVoters = async (req, res) => {
  let voters = await executeQuery("SELECT * FROM voters", []);
  res.json(voters);
};

const getVoter = async (req, res) => {
  let voter = await executeQuery("SELECT * FROM voters WHERE natid = ?", [
    req.query.voterId,
  ]);
  res.json(voter);
};

const voted = async (req, res) => {
  await executeQuery("UPDATE voters SET voted = 1 WHERE natid = ?", [
    req.query.voterId,
  ]);
  res.json({ result: false });
};

export { register, allVoters, getVoter, voted };
