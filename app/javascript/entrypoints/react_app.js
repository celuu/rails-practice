import { mountPostSearch } from "../mounts/post_seach_mount.js";
import { mountPostEdit } from "../mounts/edit_mount.js";
import { mountAuthorShow } from "../mounts/list_author.js";
import { mountAuthorForm } from "../mounts/form-author.js";
import { mountPostShow } from "../mounts/post_show.js";
import { mountEditComment } from "../mounts/edit-comment.js";

function mountAll() {
  mountPostSearch();
  mountPostEdit();
  mountAuthorShow();
  mountAuthorForm();
  mountPostShow();
  mountEditComment();
}

document.addEventListener("turbo:load", mountAll);
mountAll();
