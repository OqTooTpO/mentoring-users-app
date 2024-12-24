import { MaterialsType } from "libs/users/settings/feature-change-theme/src/lib/style-manager/style-manager";
import { MaterialsVM } from './materials-vm';

type MaterialsVMAdapter = {
  entityToVM(entity: MaterialsType): MaterialsVM;
};

export const MaterialsVMAdapter: MaterialsVMAdapter = {
  entityToVM({ id, created_at, title, material_link, folder_id }) {
    return { id, created_at, title, material_link, folder_id };
  },
};