"use client";
import React, { useRef } from "react";
import css from "./EnterOtp.module.scss";

const EnterOtp = () => {
  const inputRef1 = useRef("");
  const inputRef2 = useRef("");
  const inputRef3 = useRef("");
  const inputRef4 = useRef("");
  const inputRef5 = useRef("");
  const inputRef6 = useRef("");
  const submitButtonRef = useRef(null);

  const handleKeyDown = (e, reference, isLastInput) => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        if (!isLastInput) {
          return reference.current.focus();
        }
        // else {
        //   submitButtonRef.current.click();
        // }
      }, 10);
    }
  };
  return (
    <form className={css.EnterOtp}>
      <div className={css.wrapper}>
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef1}
          onKeyDown={(e) => handleKeyDown(e, inputRef2, false)}
        />
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef2}
          onKeyDown={(e) => handleKeyDown(e, inputRef3, false)}
        />
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef3}
          onKeyDown={(e) => handleKeyDown(e, inputRef4, false)}
        />
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef4}
          onKeyDown={(e) => handleKeyDown(e, inputRef5, false)}
        />
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef5}
          onKeyDown={(e) => handleKeyDown(e, inputRef6, false)}
        />
        <input
          type="text"
          className={css.inputElement}
          ref={inputRef6}
          onKeyDown={(e) => handleKeyDown(e, inputRef6, true)}
        />
      </div>
      <button
        className="primaryButton"
        ref={submitButtonRef}
        // style={{ display: "none" }}
      >
        Verify
      </button>
    </form>
  );
};

export default EnterOtp;
