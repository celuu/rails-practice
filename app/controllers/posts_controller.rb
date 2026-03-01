class PostsController < ApplicationController

  def index
    @posts = Post.all

  end

  def show
    @post = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post
    else
      render :index, status: :unprocessable_entity
    end

  end

  def update
    @post = Post.find(id: params[:id])
    if @post.update(post_params)
      redirect_to @post
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(id: params[:id])
    @post.destroy
    redirect_to posts_path, notice: "Post deleted"
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
  
end