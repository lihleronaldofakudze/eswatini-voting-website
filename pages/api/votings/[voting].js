import nc from "next-connect";
import { getVoting } from "../../../controllers/voting";

const handler = nc();
handler.get(getVoting);

export default handler;
