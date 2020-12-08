class FishSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :active_hours, :location, :flavor_text, :value
end
