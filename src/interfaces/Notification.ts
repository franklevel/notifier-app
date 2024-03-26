import { Category } from "./Category";
import { Channel } from "./Channel";

export interface Notification {
  id: string;
  message: string;
  category: Category;
  channel: Channel;
  createdAt: string;
}
