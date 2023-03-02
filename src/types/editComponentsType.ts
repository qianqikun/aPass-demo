import type { Merge } from "./type-utils";
//编辑器选项
type EditConfig = {
  //字段名称设置
  FieldNameCom: {
    fieldName: string;
  };
  //字数设置
  MaxLengthCom: {
    textLengthMin: number;
    textLengthMax: number;
  };
  //文本格式设置
  TextformatCom: {
    textFormat: number; //0:汉字，1:数字，2:符号，3:大写，4:小写
  };
  //必填设置
  RequiredCom: {
    required: boolean;
  };
  //新建记录时隐藏此字段设置
  HiddenWhenCreateCom: {
    hiddenWhenCreate: boolean;
  };
  //输入框默认文案设置
  PlaceholderCom: {
    placeholderShow: boolean;
    placeholder: string;
  };
  //气泡说明设置
  TipsCom: {
    tipsShow: boolean;
    tipsText: string;
  };
  //字段宽度设置
  FieldWidthCom: {
    fieldWidth: number; //0:整行, 1:1/2, 2:1/3
  };
  //业务类型设置
  BusinessTypeCom: {
    businessType: string[];
  };
  //权限设置
  PermissionSettingCom: {
    permission: [];
  };
  //默认字段值设置
  DefaultFieldValueCom: {};
  //选择器展示方式设置
  SelectorDisplayModeCom: {
    selectorDisplayMode: number; //0:下拉，1:平铺
  };
  //选择器选项设置
  SelectorOptionsSettingsCom: {
    selectorOptions: [];
    selectorMultiple: boolean;
    selectorShowOther: boolean;
  };
  // 手机字段格式
  PhoneFormatCom: {
    PhoneFormat: number; //0:11位手机号，1:不限号码位数
  };
  // 日期时间格式
  DateTimeFormatCom: {
    dateTimeFormat: number; //0:2020-12-30, 1:2020-12-30 14:00, 2:12-30
  };
  // 日期时间默认值
  DateTimeDefaultValueCom: {
    dateTimeDefaultValue: string;
  };
};
export type EditConfigListKey<T extends keyof EditConfig = keyof EditConfig> =
  T extends keyof EditConfig ? T : keyof EditConfig;

type NonEmptyObject<T> = keyof T extends never ? never : T;

type Transformer<T extends object> = {
  [K in keyof T]: T[K] extends NonEmptyObject<T[K]> ? T[K] : {};
}[keyof T];

type PickEditConfig<T extends keyof EditConfig = keyof EditConfig> = Pick<
  EditConfig,
  T
>;

type EditComponentConfig<T extends keyof EditConfig = keyof EditConfig> = Merge<
  Transformer<PickEditConfig<T>>
>;
// 组件默认类型
export type EditComponentDefault = {
  typeName: string;
  id: string;
  fieldComponents: string;
  config: EditComponentConfig;
};

export type columns = {
  id: string;
  components: EditComponentDefault[];
};
