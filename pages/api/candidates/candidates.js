import nc from "next-connect";
import { allCandidates } from "../../../controllers/candidate";

const handler = nc();
handler.get(allCandidates);

export default handler;
