import nc from "next-connect";
import { register, allVoters } from "../../../controllers/voter";

const handler = nc();
handler.post(register);
handler.get(allVoters);

export default handler;
