import { handleActions } from "redux-actions"
import update from "immutability-helper"
import { updateMutation } from "./actions"
const initial = {
  /**
   * [moduleName]:{
   *   [mutationName]:{
   *   pending: boolean
   *   error: object
   *   data: object
   * }
   *
   * }
   */
}
export default handleActions(
  {
    [updateMutation](state, { payload }) {
      const { moduleName, mutationName, key, value } = payload
      if (!(moduleName in state)) {
        state[moduleName] = {
          [mutationName]: {}
        }
      }
      if (!(mutationName in state[moduleName])) {
        state[moduleName][mutationName] = {}
      }
      return update(state, {
        [moduleName]: {
          [mutationName]: {
            [key]: {
              $set: value
            }
          }
        }
      })
    }
  },
  initial
)
