class CreateSeaCritters < ActiveRecord::Migration[6.0]
  def change
    create_table :sea_critters do |t|
      t.string :name
      t.string :active_hours
      t.string :location
      t.string :flavor_text
      t.integer :value

      t.timestamps
    end
  end
end
