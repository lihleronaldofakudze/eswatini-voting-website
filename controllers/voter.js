import { executeQuery } from "../config/db";

const register = async (req, res) => {
  await executeQuery(
    "INSERT INTO voters (natid, fullname, age, region, city, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.natid,
      req.body.fullname,
      req.body.age,
      req.body.region,
      req.body.city,
      req.body.email,
      req.body.password,
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

export { register, allVoters, getVoter };
