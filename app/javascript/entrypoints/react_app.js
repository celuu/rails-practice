import { mountPostSearch } from "../mounts/post_seach_mount.js";
import { mountPostEdit } from "../mounts/edit_mount.js";
import { mountAuthorShow } from "../mounts/list_author.js";
import { mountAuthorForm } from "../mounts/form-author.js";

function mountAll() {
  mountPostSearch();
  mountPostEdit();
  mountAuthorShow();
  mountAuthorForm();
}

document.addEventListener("turbo:load", mountAll);
mountAll();
