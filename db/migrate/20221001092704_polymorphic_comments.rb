class PolymorphicComments < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :comments, :blogs

    rename_column :comments, :blog_id, :commentable_id
    add_column :comments, :commentable_type, :string

    remove_index :comments, :commentable_id
  end
end
