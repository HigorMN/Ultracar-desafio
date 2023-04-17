import { Dispatch, SetStateAction } from 'react';

export interface IModalOpen {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
