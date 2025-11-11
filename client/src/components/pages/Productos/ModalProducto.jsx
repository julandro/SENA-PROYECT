import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useEffect } from 'react';
import AddProductForm from './AddProductForm';
import { useState } from 'react';
import FilterProductForm from './FilterProductForm';

import ModalComponent from '../../ui/ModalComponent';

export default function ModalProducto({
  modalContent,
  closeModal,
  producto,
  handleChange,
  saveProduct,
}) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (modalContent) {
      switch (modalContent) {
        case 'add':
          setContent(
            <AddProductForm
              producto={producto}
              handleChange={handleChange}
              saveProduct={saveProduct}
              isEdit={false}
            />
          );
          break;
        case 'edit':
          setContent(
            <AddProductForm
              producto={producto}
              handleChange={handleChange}
              saveProduct={saveProduct}
              isEdit={true}
            />
          );
          break;
        case 'filter':
          setContent(<FilterProductForm closeModal={closeModal} />);
          break;
        default:
          setContent(null);
          break;
      }
    }
  }, [modalContent, producto]);

  return (
    <ModalComponent
      modalContent={modalContent}
      closeModal={closeModal}
      content={content}
    />
  );
}
