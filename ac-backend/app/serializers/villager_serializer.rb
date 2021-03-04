class VillagerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :personality, :species, :birthday, :catchphrase, :hobbies
end
