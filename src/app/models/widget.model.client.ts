export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  name: string;
  text: string;
  size: string;
  url: string;
  width: string;
  row: string;
  placeholder: string;
  formatted: boolean;


  constructor(_id: string, type: string, pageId: string) {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
  }
}
