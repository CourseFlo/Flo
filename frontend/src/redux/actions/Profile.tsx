export const setField = (field: String, isEditing: boolean) => ({ // TODO: switch string to something like enum?
  type: 'SET_FIELD',
  field,
  isEditing,
});
