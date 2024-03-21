import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IModalState {
  showModal: boolean;
  modalContent: any;
}

const initialState: IModalState = {
  showModal: false,
  modalContent: 'empty'
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },

    setModalContent: (state, action: PayloadAction<boolean>) => {
      state.modalContent = action.payload
    }
  }
})

export const { setShowModal, setModalContent } = modalSlice.actions;

export default modalSlice.reducer;