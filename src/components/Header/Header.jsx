import React,{useState} from 'react'
import { Modal } from "antd";
import Logo from '../../assets/images/logo.png'
import GenerateKeyPopup from '../../Utils/Modals/GenerateKeyPopup/GenerateKeyPopup';

const Header = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="px-40 lg:px-8 xs:px-4 mt-5">
      <div className="flex justify-between items-center xs:flex-col xs:pb-3">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="w-[200px] md:w-150 sm:w-100 xs:w-40"
          />
        </div>
        <button
          className="bg-primary text-grey px-5 py-1 rounded-md"
          onClick={showModal}
        >
          Generate Key
        </button>
      </div>
      <div>
        <p className="text-xs text-grey xs:text-center">
          Home / Functionality / Revolutionize your PDF experience with AI tools
          powered by ChatGPT /{" "}
          <span className="text-disabledGrey">
            Optimize Word Templates using AI
          </span>
        </p>
      </div>
      <Modal
        title="Generate Key"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <GenerateKeyPopup />
      </Modal>
    </div>
  );
}

export default Header