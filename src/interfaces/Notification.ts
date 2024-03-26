import { Category } from "./Category";
import { Channel } from "./Channel";
import { User } from "./User";

export interface Notification {
  id: string;
  message: string;
  category: Category;
  channel: Channel;
  user: User;
  createdAt: string;
}
