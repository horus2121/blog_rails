class AddReferenceToComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :user_id
    remove_column :comments, :blog_id

    add_reference :comments, :user, foreign_key: true
    add_reference :comments, :blog, foreign_key: true, on_delete: :cascade
  end
end
