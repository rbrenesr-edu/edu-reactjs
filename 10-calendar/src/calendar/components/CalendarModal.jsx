import { useState } from 'react';
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const CalendarModal = () => {

const [isModalOpen, setIsModalOpen] = useState(true)


const  onCloseModal = () => { 
    console.log("cerrando modal"); 
    setIsModalOpen(false);
}


  return (
    <Modal
        isOpen={ isModalOpen }        
        onRequestClose={ onCloseModal }
        style={customStyles}
        contentLabel="Example Modal"
    >

        <h1>Modal</h1>
        <button onClick={onCloseModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>

    </Modal>
  )
}
