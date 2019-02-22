export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  size: string;
  text: string;
  url: string;
  width: string;

  constructor(_id: string, type: string, pageId: string, size: string, text: string, width: string, url: string) {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
  }
}
