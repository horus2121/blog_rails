class User < ApplicationRecord
    has_many :blogs, dependent: :destroy
    has_many :comments
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

end
