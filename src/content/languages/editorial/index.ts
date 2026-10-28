import type { LanguagePageContent } from "../../types";
import { languagePage as urdu } from "./urdu";
import { languagePage as pashto } from "./pashto";
import { languagePage as sindhi } from "./sindhi";
import { languagePage as punjabi } from "./punjabi";
import { languagePage as hindi } from "./hindi";
import { languagePage as bengali } from "./bengali";
import { languagePage as tamil } from "./tamil";
import { languagePage as telugu } from "./telugu";
import { languagePage as marathi } from "./marathi";
import { languagePage as gujarati } from "./gujarati";
import { languagePage as malayalam } from "./malayalam";
import { languagePage as kannada } from "./kannada";
import { languagePage as arabic } from "./arabic";
import { languagePage as nepali } from "./nepali";
import { languagePage as sinhala } from "./sinhala";
import { languagePage as assamese } from "./assamese";

export const editorialByCode = new Map<string, LanguagePageContent>([
  [urdu.code, urdu],
  [pashto.code, pashto],
  [sindhi.code, sindhi],
  [punjabi.code, punjabi],
  [hindi.code, hindi],
  [bengali.code, bengali],
  [tamil.code, tamil],
  [telugu.code, telugu],
  [marathi.code, marathi],
  [gujarati.code, gujarati],
  [malayalam.code, malayalam],
  [kannada.code, kannada],
  [arabic.code, arabic],
  [nepali.code, nepali],
  [sinhala.code, sinhala],
  [assamese.code, assamese]
]);
