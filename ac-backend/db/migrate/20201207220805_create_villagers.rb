class CreateVillagers < ActiveRecord::Migration[6.0]
  def change
    create_table :villagers do |t|
      t.string :personality
      t.string :favorite_color
      
      t.timestamps
    end
  end
end
