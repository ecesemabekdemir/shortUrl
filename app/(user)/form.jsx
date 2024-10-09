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

  const copyToClipboard = () => {
    if (data?.short_url) {
      navigator.clipboard.writeText(data.short_url).then(() => {
        alert("Short url copied");
      });
    }
  };
  return (
    <div className="shorturlContainer">
      <form ref={formRef} action={action}>
        <input
          type="text"
          name="long_url"
          placeholder="kısaltmak istediğin URL"
        />
        <div className="buttons">
          <button>Shorten It!</button>
          <button onClick={copyToClipboard}>Copied</button>
        </div>
      </form>
    </div>
  );
}
