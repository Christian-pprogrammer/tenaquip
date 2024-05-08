import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IModalState {
  showModal: boolean;
  modalContent: {
    title: string,
    content: string
  }
}

const initialState: IModalState = {
  showModal: true,
  modalContent: {
    title: 'Sign in',
    content: 'auth'
  }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },

    setModalContent: (state, action: PayloadAction<{title: string, content: string}>) => {
      state.modalContent = {
        title: action.payload.title,
        content: action.payload.content
      }
    }
  }
})

export const { setShowModal, setModalContent } = modalSlice.actions;

export default modalSlice.reducer;