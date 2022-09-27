class BlogsController < ApplicationController
    before_action :set_blog, only: [:show, :edit, :update, :destroy]

    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def index
        @blogs = Blog.all
        render json: @blogs
    end

    def show
    end

    def new
        @blog = Blog.new
    end

    def create
        @blog = Blog.new(blog_params)

        if @blog.save
            redirect_to blog_path(@blog), notice: "Blog has been successfully created."
        else
            render :new, status: :unprocessable_entity
        end
    end

    def edit
    end

    def update
        if @blog.update(blog_params)
            redirect_to blog_path(@blog), notice: "Blog has been successfully updated."
        else
            render :edit, status: :unprocessable_entity
        end
    end

    def destroy
        @blog.destroy

        redirect_to blogs_path, status: :see_other, notice: "Blog has been successfully destroyed."
    end

    private

    def set_blog
        @blog = Blog.find(params[:id])
    end

    def blog_params
        params.require(:blog).permit(:title, :content)
    end

    def render_record_not_found
        render json: { status: "Record Not Found." }
    end

    def render_record_invalid
        render json: { status: "Record Invalid." }
    end

end
