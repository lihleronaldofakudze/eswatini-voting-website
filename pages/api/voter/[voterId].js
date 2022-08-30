import nc from "next-connect";
import { getVoter, voted } from "../../../controllers/voter";

const handler = nc();
handler.get(getVoter);
handler.patch(voted);

export default handler;
