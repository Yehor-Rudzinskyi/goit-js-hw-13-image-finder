import { success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';


export default function infoFunction(hits) {
    if (hits.length === 0){
      error({
      title: `Try another word!`,
      delay: 1000,
      sticker: false,
    });
    } else {
      success({
      title: `Got it!`,
      delay: 1000,
      sticker: false,
    });
      }
};
