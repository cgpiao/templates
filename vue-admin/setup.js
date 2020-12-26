const excludedFiles = [
   'node_modules',
   'dist',
   '.git',
   'src/components/templates'
]
const TYPE_FOLDER = 'TYPE_FOLDER'
const TYPE_TAB = 'TYPE_TAB'
const TYPE_TABLE = 'TYPE_TABLE'
const TYPE_TAB_TABLE = 'TYPE_TAB_TABLE'
const TYPE_FORM = 'TYPE_FORM'

const ACTION_TO = 'ACTION_TO'
const ACTION_EXPORT = 'ACTION_EXPORT'

const COMPONENTS_PATH = 'src/components'

const dir = 'admin'
const appName = 'APP NAME'

const TABLE_TEMP_SEQ = `
   <template v-slot:seq="{ index }">
      {{ index + 1 }}
   </template>
`
/**
 <template v-slot:seq="{ record }">
 </template>
 */
const structure = [
   {
      type: TYPE_FOLDER,
      name: 'System',
      children: [
         {
            type: TYPE_FOLDER,
            name: 'User',
            children: [
               {
                  name: 'UserTable',
                  type: TYPE_TABLE,
                  breadcrumbs: [{text: '用户管理', name: 'dashboard'}],
                  conditions: [
                     {name: 'sex', type: 'select'},
                     {name: 'name', type: 'input'},
                  ],
                  actions: [
                     {name: '添加', action: ACTION_TO, route: {name: 'user_edit', params: {}}},
                     {name: '导出', action: ACTION_TO, route: {name: 'user_edit', params: {}}},
                  ],
                  table: {
                     columns: [
                        {title: '序号', slots: {customRender: 'seq'},},
                        {title: '姓名', attrs: {dataIndex: 'name'},},
                        {title: '创建日期', slots: {customRender: 'date'}, dataIndex: 'name',},
                        {title: '更新时间', slots: {customRender: 'datetime'}, dataIndex: 'name',},
                        {
                           title: '操作', slots: {customRender: 'action'}, actions: [
                              {name: '添加', action: ACTION_TO, route: {name: 'user_edit', params: {}}},
                              {name: '导出', action: ACTION_EXPORT},
                           ],
                        },
                     ]
                  }
               },

               {
                  name: 'UserEdit',
                  type: TYPE_FORM
               }
            ]
         }
      ]
   }
]


const fs = require('fs')
// const fse = require('fs-extra')
// fs.mkdirSync(dir)
// fs.readdir('template', (err, files) => {
//    files.forEach(file => {
//       if (!excludedFiles.includes(file)) {
//          fse.copy('template/'+file, 'admin/'+file,  { recursive: true })
//       }
//    })
// })
const handleFolder = (path, name) => {
   fs.mkdirSync(path+'/'+name, { recursive: true })
}
let path = __dirname + '/' + dir + '/' + COMPONENTS_PATH
for (item1 of structure) {
   if (item1.type === TYPE_FOLDER) {
      handleFolder(path, item1.name)
      for (item2 of item1.children) {
         if (item2.type === TYPE_FOLDER) {
            path = path + '/' + item1.name
            handleFolder(path, item2.name)
         }
      }
   }
}
