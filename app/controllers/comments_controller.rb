class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  def index
    @comments = Comment.all
  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)

    if @comment.save
      redirect_to post_path(@post)
    else
      redirect_to post_path(@post), alert: "Comment could not be saved"
    end
  end

  def edit
    @post = @comment.post
  end

 def update
    if @comment.update(comment_params)
      redirect_to post_path(@comment.post)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post = @comment.post
    @comment.destroy
    redirect_to post_path(@post)
  end

  private
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:text, :post_id )
  end

end