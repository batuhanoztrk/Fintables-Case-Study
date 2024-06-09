import { NavigationActions } from "@react-navigation/compat";
import { NavigationContainerRef, StackActions } from "@react-navigation/native";

export default class NavigationService {
  static _navigator: NavigationContainerRef<ReactNavigation.RootParamList> | null =
    null;

  static setNavigator(
    val: NavigationContainerRef<ReactNavigation.RootParamList> | null,
  ) {
    this._navigator = val;
  }

  static navigate(routeName: string, params: any) {
    this._navigator?.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  static replace(routeName: string, params: any) {
    this._navigator?.dispatch(StackActions.replace(routeName, params));
  }
}
