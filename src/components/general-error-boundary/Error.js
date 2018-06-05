import React from "react";
import { cls } from "reactutils";
import i18n from "i18n-js";
import l from "libs/langs/keys";

import "./style.css";

export default class Error extends React.PureComponent {
  render() {
    const { className, ...attrs } = this.props;

    return (
      <div className={cls("ams-error-msg-wrapper", className)} {...attrs}>
        <div className="ams-error-msg">oops erreur{i18n.t(l.errorMessage)}</div>
      </div>
    );
  }
}
