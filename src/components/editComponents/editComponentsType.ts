import type { EditComponentDefault } from "@/types/editComponentsType";
const editComponentsTypeMap: {
  [propName: string]: EditComponentDefault;
} = {
  //单行文本
  SingleLineTextEdit: {
    typeName: "单行文本",
    fieldComponents: "SingleLineTextEdits",
    id: "",
    config: {
      fieldName: "姓名",
      textLengthMin: 0,
      textLengthMax: 50,
      required: false,
      hiddenWhenCreate: false,
      placeholderShow: false,
      placeholder: "",
      tipsShow: false,
      tipsText: "",
      businessType: [],
    },
  },
  // //多行文本
  // MultiLineTextEdit: {},
  // // 单选
  // SingleSelectorEdit: {},
  // // 多选
  // MultiSelectorEdit: {},
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
export default editComponentsTypeMap;
