"use client";
import { setModalContent, setShowModal } from "@/Store/slices/modal";
import { RootState } from "@/Store/store";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React from "react";
import { BiX } from "react-icons/bi";
import LoginForm from "../login-form/LoginForm";
import Image from "next/image";
import CartComponent from "../cart-component/CartComponent";

const Modal = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state: RootState) => state.modal.showModal);
  const loading = useAppSelector((state: RootState) => state.loading.loading);
  const modalContent = useAppSelector(
    (state: RootState) => state.modal.modalContent
  );

  const handleClose = () => {
    dispatch(setShowModal(false));
    document.body.style.overflow = "auto";
    dispatch(setModalContent({
      title: "",
      content: "empty"
    }));
  };
  return (
    <div
      className={
        showModal
          ? "modal top-0 left-0 w-full h-full bg-black/40 z-[1000] block transition-all duration-[1.5s] fixed"
          : "duration-[0.5s] hidden"
      }
    >

      {
        loading && (
          <div className="bg-black/60 h-full w-full flex justify-center items-center absolute z-[1003]">
            <Image src={"/loader.webp"} alt="" height={100} width={100} />
          </div>
      )}

      {
        modalContent.title && (
          <div className="fixed right-0 h-full overflow-hidden bg-white md:w-[500px] w-[90%]">
            <div className="header bg-mainColor py-4 px-4 flex justify-between">
              <h3 className="text-white font-bold text-lg">{modalContent.title}</h3>
              <BiX
                className="cursor-pointer"
                onClick={handleClose}
                size={30}
                color="white"
                style={{
                  fontWeight: "bold",
                }}
              />
            </div>

            <div className="body py-4 px-4">
              <RenderModalElement modalContent={modalContent} />
            </div>
          </div>
        )
      }
    </div>
  );
};

interface RenderModalElementProps {
  modalContent: {
    title: string,
    content: string
  };
}

const RenderModalElement: React.FC<RenderModalElementProps> = ({
  modalContent,
}) => {
  switch (modalContent.content) {
    case "auth":
      return <LoginForm />;

    case "cart":
      return <CartComponent />;

    case "empty":
      return null;

    default:
      return null;
  }
};

export default Modal;
