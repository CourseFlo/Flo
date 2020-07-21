import { FieldEditState } from '../../type-interfaces/FieldEditState';

const initialStore = {
  name: false,
  email: false,
  major: false,
  courses: false,
};

export const setEditFields = (store: FieldEditState = initialStore, action: any) => {
  if (action.type === 'SET_FIELD') {
    const changedStore: FieldEditState = { ...store };
    switch (action.field) {
      case 'name': // TODO: is there a better way to distinguish between everything, instead of using string?
        changedStore.name = action.isEditing;
        break;
      case 'email':
        changedStore.email = action.isEditing;
        break;
      case 'major':
        changedStore.major = action.isEditing;
        break;
      case 'courses':
        changedStore.courses = action.isEditing;
        break;
      default:
        break;
    }
    return changedStore;
  }
  return store;
};
