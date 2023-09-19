import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function Log() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState("login"); // Added state for mode (login or register)

  const handleOpen = () => onOpen()
  

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button key="md" color="secondary" onPress={() => handleOpen()}>
         Login / Register 
        </Button>
      </div>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center">
                {mode === "login" ? "Login" : "Register"} {/* Dynamic header */}
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap gap-8">
                  <Input type="email" label="Email" color="secondary" />
                  <Input type="password" label="Password" color="secondary" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="shadow" onPress={onClose}>Submit</Button>
                <Button
                  color="secondary"
                  variant="shadow"
                  onPress={toggleMode} // Toggle between login and register
                >
                  {mode === "login" ? "Register" : "Login"}{" "}
                  {/* Dynamic button text */}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
