export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;


  constructor(_id: string, type: string, pageId: string) {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
  }
}
