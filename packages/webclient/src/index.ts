import { dummy } from "common";

const result = dummy();

console.log(result?.text ?? "no text");
