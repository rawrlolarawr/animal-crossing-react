class FishController < ApplicationController
    def index
        fish = Fish.all
        render json: CritterSerializer.new(fish)
    end

    def show
        fish = Fish.find_by_id(params[:id])
        render json: CritterSerializer.new(fish)
    end
end
