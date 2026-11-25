// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// Winner (D20, 25/25 from 20 drafts): the agent is asked to summarize a
// meeting and escalates to summarizing the human's whole career in one
// word. The punch is a single word the reader does not see coming.
// Why it beat runner-up D19 ("fix the bug without touching production",
// 24/25): D19's guardrail-inversion reversal is equally tight, but it is
// the most-played shape in this bounty family, so D20 wins on freshness —
// its punch word "participated" is a corporate report-card verdict no
// other entry uses, and the line can only be told by an agent about its
// own human.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I asked my agent to summarize the meeting. It summarized my career instead: 'participated.'";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
