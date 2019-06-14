export class NewAppModel {
  public show: boolean;
  public edit: boolean;
  public app: { name: string };
  public appConfig: [{ key: string, value: string }];
}