import User, {associate as associateUser} from './user';
import Comment, {associate as associateComment} from './user';
import Hashtag, {associate as associateHashtag} from './user';
import Post, {associate as associatePost} from './user';
import Image, {associate as associateImage} from './user';
export * from './sequelize';

const db = {
  User,
  Comment,
  Post,
  Hashtag,
  Image
}
export type dbType = typeof db; 
associateUser(db);
associateHashtag(db);
associateImage(db);
associatePost(db);
associateComment(db);