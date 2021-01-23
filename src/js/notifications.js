import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';


export default function infoFunction () {
    info({
      title: `Got it!`,
      delay: 1000,
      sticker: false,
    });
}