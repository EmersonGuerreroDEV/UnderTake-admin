import { atomWithStorage } from 'jotai/utils';


export const ModalAtom = atomWithStorage<boolean>('modal', false);
