import type {
  EditComponentLimit,
  EditComponentDefault,
} from "@/types/editComponentsType";

// 单行文本
const SingleLineTextEdit: EditComponentLimit<
  [
    "FieldNameCom",
    "MaxLengthCom",
    "TextformatCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom"
  ]
> = {
  typeName: "单行文本",
  fieldConfigComponents: [
    "FieldNameCom",
    "MaxLengthCom",
    "TextformatCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom",
  ],
  id: "",
  config: {
    fieldName: "单行文本",
    textLengthMin: 0,
    textLengthMax: 50,
    required: false,
    hiddenWhenCreate: false,
    placeholderShow: false,
    placeholder: "",
    textFormat: 0,
    tipsShow: false,
    tipsText: "",
    businessType: [],
    fieldWidth: 0,
    permission: [],
  },
};
// 多行文本
const MultiLineTextEdit: EditComponentLimit<
  [
    "FieldNameCom",
    "MaxLengthCom",
    "TextformatCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom"
  ]
> = {
  typeName: "多行文本",
  fieldConfigComponents: [
    "FieldNameCom",
    "MaxLengthCom",
    "TextformatCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom",
  ],
  id: "",
  config: {
    fieldName: "多行文本",
    textLengthMin: 0,
    textLengthMax: 50,
    required: false,
    hiddenWhenCreate: false,
    placeholderShow: false,
    placeholder: "",
    textFormat: 0,
    tipsShow: false,
    tipsText: "",
    businessType: [],
    fieldWidth: 0,
    permission: [],
  },
};
// 单选
const SingleSelectorEdit: EditComponentLimit<
  [
    "FieldNameCom",
    "SelectorDisplayModeCom",
    "SelectorOptionsSettingsCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom"
  ]
> = {
  typeName: "单选",
  fieldConfigComponents: [
    "FieldNameCom",
    "SelectorDisplayModeCom",
    "SelectorOptionsSettingsCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom",
  ],
  id: "",
  config: {
    fieldName: "单选",
    required: false,
    selectorDisplayMode: 0,
    selectorOptions: [],
    selectorMultiple: false,
    selectorShowOther: false,
    hiddenWhenCreate: false,
    placeholderShow: false,
    placeholder: "",
    tipsShow: false,
    tipsText: "",
    businessType: [],
    fieldWidth: 0,
    permission: [],
  },
};

const MultiSelectorEdit: EditComponentLimit<
  [
    "FieldNameCom",
    "SelectorDisplayModeCom",
    "SelectorOptionsSettingsCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom"
  ]
> = {
  typeName: "多选",
  fieldConfigComponents: [
    "FieldNameCom",
    "SelectorDisplayModeCom",
    "SelectorOptionsSettingsCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "BusinessTypeCom",
    "PermissionSettingCom",
  ],
  id: "",
  config: {
    fieldName: "多选",
    required: false,
    selectorDisplayMode: 0,
    selectorOptions: [],
    selectorMultiple: true,
    selectorShowOther: false,
    hiddenWhenCreate: false,
    placeholderShow: false,
    placeholder: "",
    tipsShow: false,
    tipsText: "",
    businessType: [],
    fieldWidth: 0,
    permission: [],
  },
};
const editComponentsTypeMap: Record<string, EditComponentDefault> = {
  SingleLineTextEdit,
  MultiLineTextEdit,
  SingleSelectorEdit,
  MultiSelectorEdit,
  // // 人员
  // PersonnelEdit: {},
  // // 电话
  // PhoneNumberEdit: {},
  // // 日期时间
  // DateTimePickEdit: {},
  // // 数字
  // NumberEdit: {},
  // // 金额
  // AmountEdit: {},
  // // 百分号
  // PercentEdit: {},
  // // 图片
  // pictureEdit: {},
  // // 附件
  // attachmentEdit: {},
  // // 省市区
  // AreaEdit: {},
  // // 定位
  // PositionEdit: {},
  // // 自增索引
  // SelfIncreasingIndexEdit: {},
  // // 级联选择
  // CascadeSelectorEdit: {},
  // // 引用统计
  // ReferenceStatisticsEdit: {},
  // // 关联字段
  // AssociatedFieldEdit: {},
  // // 子表单
  // SubformEdit: {},
};
const fieldConfigMap: Record<string, string[]> = {};

for (const key of Object.keys(editComponentsTypeMap)) {
  const item = editComponentsTypeMap[key];
  item.fieldComponents = key;
  fieldConfigMap[key] = item.fieldConfigComponents;
}

export { editComponentsTypeMap, fieldConfigMap };
