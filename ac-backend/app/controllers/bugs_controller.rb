class BugsController < ApplicationController
    def index
        bugs = Bug.all
        render json: BugSerializer.new(bugs)
    end

    def show
        bugs =  Bug.find_by_id(params[:id])
        render json: BugsSerializer.new(bug)
    end
end
