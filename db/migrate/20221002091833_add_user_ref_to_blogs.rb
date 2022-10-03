class AddUserRefToBlogs < ActiveRecord::Migration[6.1]
  def change
    # add_column :blogs, :user_id, :integer
    # add_foreign_key :blogs, :users, on_delete: :cascade
    add_reference :blogs, :user, foreign_key: true, on_delete: :cascade
  end
end
