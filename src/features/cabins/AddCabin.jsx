import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens={"cabin-form"}>
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name={"cabin-form"}>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

/*
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((open) => !open)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
*/

export default AddCabin;
