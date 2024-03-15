"use client";

import {
  FrameSVGKranox,
  useFrameSVGAssemblingAnimation,
} from "@arwes/react-frames";
import { useState, useRef, useEffect } from "react";
import Button from "./atoms/button";

const Modal = ({
  children,
  btnText,
}: {
  children: React.ReactNode;
  btnText: string;
}) => {
  const [modal, setModal] = useState(false);
  const ref = useRef(null);
  const svgRef = useRef(null);
  const { onRender } = useFrameSVGAssemblingAnimation(svgRef);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        setModal(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  });

  return (
    <div>
      <Button size="l" text={btnText} onClick={toggleModal} />
      {modal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto flex">
          <div className="fixed bottom-0 left-0 right-0 top-0 h-[100vh] w-full backdrop-blur-md"></div>
          <div
            ref={ref}
            className="absolute left-[50%] top-[50%] flex h-[30rem] w-[30rem] translate-x-[-50%] translate-y-[-50%]"
          >
            <FrameSVGKranox
              elementRef={svgRef}
              onRender={onRender}
              padding={4}
              strokeWidth={1}
              squareSize={12}
              smallLineLength={12}
              largeLineLength={48}
            />
            <div className="mt-2 w-full">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
