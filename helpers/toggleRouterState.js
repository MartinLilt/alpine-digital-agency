import { headerMap } from "../vars";

export const toggleRouterState = (route, modalSate) => {
  console.log(modalSate);
  if (route === headerMap.home.path && !modalSate) {
    return headerMap.home;
  } else if (route === headerMap.modal.path && modalSate) {
    return headerMap.modal;
  } else if (route === headerMap.works.path) {
    return headerMap.works;
  } else if (route === headerMap.about.path) {
    return headerMap.about;
  } else {
    return headerMap.category;
  }
};
