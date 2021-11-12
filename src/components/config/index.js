// 容器
export const containerItems = [
  {
    __config__: {
      label: '空容器',
      type: 'container',
      tag: 'empty'
    },
    children: []
  },
  {
    __config__: {
      label: '表单',
      type: 'container',
      tag: 'el-form'
    },
    children: []
  },
  {
    __config__: {
      label: '表格',
      type: 'container',
      tag: 'el-table',
      ref: 'table',
      tableData: 'tableData'
    },
    children: [],
    __vModel__: 'tableData',
    stripe: false,
    border: true,
    size: 'medium'
  }
];

// 基础组件map
const baseItemMap = {
  input: {
    // 组件的自定义配置
    __config__: {
      type: 'base',
      label: '单行文本',
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'input',
      defaultValue: undefined,
      document: 'https://element.eleme.cn/#/zh-CN/component/input'
    },
    // 组件的插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 其余的为可直接写在组件标签上的属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false
  }
};

// 普通组件
export const baseItems = [
  baseItemMap.input
];

// demo 可用于form-item
export const formItems = [
  {
    label: 'select'
    // __config__: baseItems.select.__config__
  }
];

// table column默认配置
export const columnDefault = {
  prop: 'propName',
  __config__: {
    label: '表-列',
    type: 'prop' // prop | customer
  },
  width: 100,
  'min-width': 100,
  align: 'left',
  fixed: undefined,
  children: [] // when type === customer
};

//
export const columnsItem = [
  {
    key: 'table-select',
    label: 'select'
    // __config__: baseItems.select.__config__
  }
];
