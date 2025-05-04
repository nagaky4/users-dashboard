import { getValueDeepKey } from "@/utils";
import { ref } from "vue";

export const useSortable = () => {
  const originList = ref<Array<any>>([]);

  const initSortSearchFunction = (list: Array<any>) => {
    originList.value = JSON.parse(JSON.stringify(list));
  };

  const sort = (key: string, asc: boolean) => {
    if (!originList.value.length || !key) {
      return;
    }
    return JSON.parse(JSON.stringify(originList.value)).sort(
      (a: any, b: any) =>
        String(getValueDeepKey(a, key)).localeCompare(getValueDeepKey(b, key)) *
        (asc ? 1 : -1)
    );
  };

  const search = (key: string, text: string) => {
    const textValue = text ? text : "";
    return textValue
      ? originList.value.filter((el: any) =>
          getValueDeepKey(el, key)
            .toLowerCase()
            .includes(textValue.toLowerCase())
        )
      : originList.value;
  };

  return { initSortSearchFunction, sort, search };
};
