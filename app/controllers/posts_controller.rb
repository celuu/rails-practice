class PostsController < ApplicationController

  def index
    @post = Post.all

  end

  def show
    @posts = Post.all
  end
end