import { Modal, Image } from "antd";
import React from "react";
import "./index.css";

export default function Index(props: any) {
  const { isModalOpen, handleOk, handleCancel } = props;
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Delete"}
        closable={false}
      >
        <div className="DeleteIcon">
          <Image src={"/assets/images/logos/Union 142.svg"} preview={false} />
        </div>
        <p className="DeleteMsg">
          <b>Are You Sure Want to Delete??</b>
        </p>
      </Modal>
    </div>
  );
}
