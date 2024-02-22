import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
const DummyModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setReview('')
  };
//   useEffect(() => {
//     console.log('outer')
//     return () => {
//      setReview("")
//      console.log('inner')
//     }
//   },[])
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <div>
          <textarea
            className="w-full border border-primary focus:outline-none outline-none focus:shadow-inner bg-inputBg py-1 rounded-[4px] px-2"
            cols="30"
            rows="5"
            type="text"
            id="message"
            maxLength="250"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};
export default DummyModal;
