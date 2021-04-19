
export function header() {
    return {
      Authorization: `${JSON.parse(localStorage.getItem("com.tdcx.token"))}`
    };
  }