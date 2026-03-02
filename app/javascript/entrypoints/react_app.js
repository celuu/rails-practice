import { mountPostSearch } from "../mounts/post_seach_mount.js";
import { mountPostEdit } from "../mounts/edit_mount.js";

function mountAll() {
  mountPostSearch();
  mountPostEdit();
}

document.addEventListener("turbo:load", mountAll);
mountAll(); // Run immediately in case turbo:load already fired
