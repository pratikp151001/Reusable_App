import { Modal } from 'antd'
import React from 'react'

export default function Index(props:any) {
    const  {isModalOpen,handleOk,handleCancel }=props
  return (
    <div>
          <Modal title="Delete Modal"
           open={isModalOpen} 
           onOk={handleOk} onCancel={handleCancel}
           >
        Are You Sure Want to Delete???
      </Modal>
      
    </div>
  )
}
