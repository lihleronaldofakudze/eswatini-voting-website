import nc from "next-connect";
import { getVoter } from "../../../controllers/voter";

const handler = nc();
handler.get(getVoter);

export default handler;
