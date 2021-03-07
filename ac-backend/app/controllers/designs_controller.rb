class DesignsController < ApplicationController
    def index
        designs = Design.all
        render json: DesignSerializer.new(designs)
    end

    def create
        design = Design.create(design_params)
    end

    private

    def design_params
        params.require(:design).permit(:name, :img_src, :mo_code, :ma_code)
    end
end
