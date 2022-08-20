import nc from "next-connect";
import { vote } from "../../../controllers/voting";

const handler = nc();
handler.post(vote);

export default handler;
