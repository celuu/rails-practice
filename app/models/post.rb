class Post < ApplicationRecord
  has_one :author
  has_many :comments

  validates :title, :body, presence: true
end