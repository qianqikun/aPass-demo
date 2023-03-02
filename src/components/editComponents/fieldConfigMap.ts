import type { EditConfigListKey } from "@/types/editComponentsType";
type fieldConfigMap = {
  [propName: string]: EditConfigListKey[];
};
const fieldConfigMap: fieldConfigMap = {
  SingleLineTextEdits: [
    "FieldNameCom",
    "MaxLengthCom",
    "RequiredCom",
    "HiddenWhenCreateCom",
    "PlaceholderCom",
    "TipsCom",
    "FieldWidthCom",
    "PermissionSettingCom",
  ],
};

export default fieldConfigMap;
