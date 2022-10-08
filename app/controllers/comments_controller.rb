class CommentsController < ApplicationController
    before_action :set_blog

    def create
        comment = blog.comments.create!(comment_params)

        if comment
            render json: { comment: comment}, status: :created
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        comment = blog.comments.find(params[:id])
        comment.destroy

        render json: { success: "Comment destroyed."}, status: :see_other
    end

    private

    def set_blog
        blog = Blog.find(params[:blog_id])
    end

    def comment_params
        params.require(:comment).permit(:content)
    end

end
