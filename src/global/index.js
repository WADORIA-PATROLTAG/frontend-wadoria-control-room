export default {
  install: (app, opt) => {

    /**
     * @var Swal Global sweetalert static instance
     * */
    window.Swal = app.config.globalProperties.$swal

    app.config.globalProperties.$closeBsModal = (modalId) => {
      $(`#${modalId}`).on("hidden.bs.modal", function (e) {
        $(this).removeClass(function (index, className) {
          return (className.match(/(^|\s)effect-\S+/g) || []).join(" ");
        });
      });
      $(`#${modalId}`).modal("hide");
    };
    app.config.globalProperties.$showBsModal = (modalId, animation) => {
      $(`#${modalId}`).on("show.bs.modal", function (event) {
        $(this).addClass(`${animation}`);
      });
      $(`#${modalId}`).modal("show");
    };
  },
};
