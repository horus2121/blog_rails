class BlogsController < ApplicationController
    before_action :set_blog, only: [:show, :update, :destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        blogs = Blog.all

        render json: { blogs: blogs }, status: :created
    end

    def show
        blog = Blog.find(params[:id])

        render json: { user: blog.user, blog: blog }, status: :created
    end

    def create
        blog = Blog.create!(blog_params)

        if blog
            render json: { user: blog.user, blog: blog }, status: :created
        else
            render json: { errors: blog.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        blog = Blog.find(params[:id])

        if blog.update(blog_params)
            render json: { user: blog.user, blog: blog }, status: :created
        else
            render json: { errors: blog.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        blog = Blog.find(params[:id])
        blog.destroy

        render json: { success: "Blog destroyed."}, status: :see_other
    end

    private

    def set_blog
        blog = Blog.find(params[:id])
    end

    def set_user
        user = User.find_by(id: session[:current_user_id])
    end

    def blog_params
        user = set_user
        user_id = user.id

        params
        .require(:blog)
        .permit(:user_id, :title, :description, :content)
        .merge(user_id: user_id)
    end

    def render_record_not_found
        render json: { status: "Record Not Found." }
    end

    def render_record_invalid
        render json: { status: "Record Invalid." }
    end

end
