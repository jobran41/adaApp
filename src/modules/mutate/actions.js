import { createAction } from "redux-actions"
export const updateMutation = createAction(
  "MUTATE_UPDATE",
  ({ moduleName, mutationName, key, value }) => ({
    moduleName,
    mutationName,
    key,
    value
  })
)
