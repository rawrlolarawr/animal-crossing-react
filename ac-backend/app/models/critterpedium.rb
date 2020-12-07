class Critterpedium < ApplicationRecord
    has_many :fish
    has_many :bugs
    has_many :sea_critters
end
