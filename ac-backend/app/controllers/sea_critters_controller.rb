class SeaCrittersController < ApplicationController
    def index
        sea_critters = SeaCritter.all
        render json: CritterSerializer.new(sea_critters)
    end

    def show
        sea_critter =  SeaCritter.find_by_id(params[:id])
        render json: CritterSerializer.new(sea_critter)
    end
end
