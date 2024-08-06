"use server"

import {
    getSignInUrl,
    getSignUpUrl,
    signOut,
} from "@workos-inc/authkit-nextjs";

export const signInUrl = async () => {
    return await getSignInUrl();
}

export const signUpUrl = async () => {
    return await getSignUpUrl();
}

export const signOutUser = async () => {
    await signOut()
}