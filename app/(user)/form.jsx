"use client";
import { linkToShortAction } from "@/actions/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function ShortUrlForm() {
  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null,
  });
  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      formRef.current.reset();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="shorturlContainer">
      <form className="shorturlForm" ref={formRef} action={action}>
        <input
          type="text"
          name="long_url"
          placeholder="Shorten a link here..."
        />
        <div className="buttons">
          <button>Shorten It!</button>
        </div>
      </form>
    </div>
  );
}
