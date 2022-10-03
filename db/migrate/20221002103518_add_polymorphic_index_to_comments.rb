class AddPolymorphicIndexToComments < ActiveRecord::Migration[6.1]
  def change
    add_index :comments, [:user_id, :commentable_id, :commentable_type], unique: true, name: 'index_commetns_on_user_id_and_commentable'
    add_index :comments, [:blog_id, :commentable_id, :commentable_type], unique: true, name: 'index_comments_on_blog_id_and_commentable'
    add_index :comments, [:commentable_id, :commentable_type]
  end
end
