import nc from "next-connect";
import { vote, getVotings } from "../../../controllers/voting";

const handler = nc();
handler.post(vote);
handler.get(getVotings);

export default handler;
