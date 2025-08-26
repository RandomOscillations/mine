"use client";

import { atom } from "jotai";

export type tabKey = "projects" | "experience" | "tools";
export const tabAtom = atom<tabKey>("projects");
