import { handleActions } from "redux-actions"
import update from "immutability-helper"
import {
  addUserRoles,
  toggleTopbar,
} from "modules/app/actions"

const initialState = {
  topbarCollapsed: false,
}

update.extend("$auto", (value, object) => {
  return object ? update(object, value) : update({}, value)
})

export default handleActions(
  {
    [toggleTopbar](state, { payload }) {
      return update(state, {
        topbarCollapsed: {
          $set:
            payload.collapsed === undefined
              ? !state.topbarCollapsed
              : payload.collapsed,
        },
      })
    },
    [addUserRoles](state, { payload }) {
      return update(state, {
        userRoles: { $merge: payload.roles },
      })
    },
  },
  initialState,
)
