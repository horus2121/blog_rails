class RemoveCommentableAndIndexFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_index :comments, name: "index_comments_on_blog_id_and_commentable"
    remove_index :comments, name: "index_comments_on_commentable_id_and_commentable_type"
    remove_index :comments, name: "index_commetns_on_user_id_and_commentable"

    remove_column :comments, :commentable_id
    remove_column :comments, :commentable_type
  end
end
