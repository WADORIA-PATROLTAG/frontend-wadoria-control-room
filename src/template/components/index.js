import BBtn from "./src/bs__button";
import AsyncButton from "./src/sync_button";
import DataLoading from "./src/data__loading";
import FpIcon from "./src/fp_icon";
//import ScanModal from "@/template/view/pages/public/modals/scannig.modal";
//import EmployesCreateModal from "@/template/view/pages/public/modals/employes.modal";
import CustomSelect2 from "./src/custom_select_2";
export default {
    install: (app, opt) => {
        app.component("bs-button", BBtn);
        app.component("async-button", AsyncButton);
        app.component("select-2", CustomSelect2);
        app.component("data-loading", DataLoading);
        app.component("fp-icon", FpIcon);
        //       app.component("scan-modal", ScanModal);
        //     app.component("employes-create-modal", EmployesCreateModal);
    },
};