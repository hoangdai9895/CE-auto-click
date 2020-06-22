const loop = setInterval(() => {
  let e = document.querySelector(".item-lead.odd"),
    t = document.querySelector(".item-lead.editing.odd"),
    o = e && e.getAttribute("data-route-edit");
  e &&
    !e.classList.contains("has-notes") &&
    o &&
    !t &&
    (clearInterval(loop),
    (window.location.href = o),
    console.log("Clicked to the white row !!!"));
}, 100);
