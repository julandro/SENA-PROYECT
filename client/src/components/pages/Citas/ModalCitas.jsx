import React, { useEffect } from 'react';
import ModalComponent from '../../ui/ModalComponent';
import { useState } from 'react';
import AddCitaForm from './AddCitaForm';

const ModalCitas = ({ modalContent, closeModal }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (modalContent) {
      switch (modalContent) {
        case 'add':
          setContent(<AddCitaForm />);
          break;

        case 'filter':
          setContent(<h1>Filtros</h1>);
          break;

        default:
          break;
      }
    }
  }, [modalContent, closeModal]);

  return (
    <ModalComponent
      modalContent={modalContent}
      closeModal={closeModal}
      content={content}
    />
  );
};

export default ModalCitas;
