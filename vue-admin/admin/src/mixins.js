import * as constants from "@/constants";
import agent from "@/agent";
import * as moment from "moment";

const vh = window.innerHeight
const hTableHeader = 55
const hHeader = 64
const hTab = 40
const hBreadcrumb = 42
const hSingleCondition = 44
const hPy = 10
const hPb = 20 + 2
export let AppMixin = {
   computed: {
      sc_table() {
         return vh - hHeader - hPy * 2 - hBreadcrumb - hSingleCondition - hTableHeader - hPb
      },
      sc_tab_table() {
         return vh - hHeader - hPy * 2 - hBreadcrumb - hTab - hSingleCondition - hTableHeader - hPb
      }
   },
   data: function () {
      return {
         vh: window.innerHeight,
         vfDate: 'YYYY-MM-DD',
         recordId: null,
         rootOrgId: constants.LS_ORG_ID,
         rootOrgName: constants.ROOT_ORG_NAME,
      }
   },
   setup() {
      const handleUploadAudio = async (file) => {
         let formData = new FormData()
         formData.append('type', 2)
         formData.append('files', file)
         return agent.common.upload(formData)
      }
      const handleUploadVideo = async (file) => {
         let formData = new FormData()
         formData.append('type', 3)
         formData.append('files', file)
         return agent.common.upload(formData)
      }

      return {
         handleUploadAudio, handleUploadVideo
      }
   },
   methods: {
      handleExport(url, data) {
         console.log(url, data)
      },
      handleUploadPic(file) {
         let formData = new FormData()
         formData.append('type', 1)
         formData.append('files', file)
         return agent.common.upload(formData)
      },
      yyyyMmDd(date, join) {
         if (date === null) {
            date = new Date()
         }
         let format = 'YYYY'+join+'MM'+join+'DD'
         return moment(date).format(format)
      },
      yyyyMmDdHhMm(date, join) {
         if (date === null) {
            date = new Date()
         }
         let format = 'YYYY'+join+'MM'+join+'DD' + ' HH:mm:ss'
         return moment(date).format(format)
      },
      confirm(cb, data, msg = '确定删除该记录吗') {
         this.$confirm({
            content: msg,
            onOk() {
               cb(data)
            }
         })
      },
   },
   mounted() {
      this.recordId = this.$route.params.id
   }
};
