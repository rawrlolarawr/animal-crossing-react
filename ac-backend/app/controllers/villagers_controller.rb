class VillagersController < ApplicationController
    def index
        villagers = Villager.all
        render json: VillagerSerializer.new(villagers)
    end

    def show
        villager =  Villager.find_by_id(params[:id])
        render json: VillagerSerializer.new(villager)
    end
end
