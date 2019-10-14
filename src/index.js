const $modal = document.querySelector(".modal");
const $button = document.querySelector("button");

$button.addEventListener("click", toggleModal);

function toggleModal() {
  if ($modal.classList.contains("show")) {
    $modal.classList.remove("show");
    $modal.classList.add("hide");
  } else {
    $modal.classList.remove("hide");
    $modal.classList.add("show");
  }
}
