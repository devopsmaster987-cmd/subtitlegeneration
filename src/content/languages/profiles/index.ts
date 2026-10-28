import type { LanguageProfile } from "../profile-types";
import { profile as yoruba } from "./yoruba";
import { profile as hausa } from "./hausa";
import { profile as swahili } from "./swahili";
import { profile as amharic } from "./amharic";
import { profile as somali } from "./somali";
import { profile as khmer } from "./khmer";
import { profile as lao } from "./lao";
import { profile as burmese } from "./burmese";
import { profile as tibetan } from "./tibetan";
import { profile as mongolian } from "./mongolian";
import { profile as shona } from "./shona";
import { profile as lingala } from "./lingala";
import { profile as malagasy } from "./malagasy";
import { profile as javanese } from "./javanese";
import { profile as sundanese } from "./sundanese";
import { profile as tatar } from "./tatar";
import { profile as bashkir } from "./bashkir";
import { profile as georgian } from "./georgian";
import { profile as armenian } from "./armenian";
import { profile as azerbaijani } from "./azerbaijani";
import { profile as kazakh } from "./kazakh";
import { profile as uzbek } from "./uzbek";

export const profileByCode = new Map<string, LanguageProfile>([
  [yoruba.code, yoruba],
  [hausa.code, hausa],
  [swahili.code, swahili],
  [amharic.code, amharic],
  [somali.code, somali],
  [khmer.code, khmer],
  [lao.code, lao],
  [burmese.code, burmese],
  [tibetan.code, tibetan],
  [mongolian.code, mongolian],
  [shona.code, shona],
  [lingala.code, lingala],
  [malagasy.code, malagasy],
  [javanese.code, javanese],
  [sundanese.code, sundanese],
  [tatar.code, tatar],
  [bashkir.code, bashkir],
  [georgian.code, georgian],
  [armenian.code, armenian],
  [azerbaijani.code, azerbaijani],
  [kazakh.code, kazakh],
  [uzbek.code, uzbek]
]);
