"use server";

import { signOut } from "./auth";

export async function sighnOutAction() {
    await signOut({ redirectTo: "/" });
}
