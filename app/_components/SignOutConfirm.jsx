"use client";

import { useState } from "react";
import { sighnOutAction } from "../_lib/action";

function SignOutConfirm() {
    const [modalConfirmShow, setModalConfirmShow] = useState(false);
    function clickHandler() {
        setModalConfirmShow((prev) => !prev);
    }
    if (!modalConfirmShow) return null;
    return (
        <div className="w-screen h-screen backdrop-blur-2xl">
            <div className="border border-white bg-amber-200/30">
                <h1>Confirm</h1>
                <p>Are you sure ?</p>
                <div className="flex gap-4">
                    <button onClick={sighnOutAction}>Yes</button>
                    <button onClick={clickHandler}>No</button>
                </div>
            </div>
        </div>
    );
}

export default SignOutConfirm;
