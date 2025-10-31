import { format, parseISO } from "date-fns";

export const fmt = (d, f = "yyyy-MM-dd") => format(d, f);
export const toISO = (d = new Date()) => d.toISOString();
export const fromISO = (s) => parseISO(s);
