class BugsController < ApplicationController
    def index
        bugs = Bug.all
        render json: CritterSerializer.new(bugs)
    end

    def show
        bugs =  Bug.find_by_id(params[:id])
        render json: CritterSerializer.new(bug)
    end
end
