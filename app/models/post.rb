class Post < ApplicationRecord
  has_one :author

  validates :title, :body, presence: true
end